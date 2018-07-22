var franklin = document.querySelector('section.franklin');
var greenville = document.querySelector('section.greenville');
var springfield = document.querySelector('section.springfield');

//            1. To start with, we are going to store the URL of the JSON we want to retrieve in a variable. Add the following at the bottom of your JavaScript code:
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// 2. To create a request, we need to create a new request object instance from the XMLHttpRequest constructor, using the new keyword. Add the following below your last line:
var request = new XMLHttpRequest();

// 3. Now we need to open a new request using the open() method. Add the following line:
request.open('GET', requestURL);
//This takes at least two parameters — there are other optional parameters available. We only need the two mandatory ones for this simple example:

//The HTTP method to use when making the network request. In this case GET is fine, as we are just retrieving some simple data.
//The URL to make the request to — this is the URL of the JSON file that we stored earlier.

// 4. Next, add the following two lines — here we are setting the responseType to JSON, so that XHR knows that the server will be returning JSON, and that this should be converted behind the scenes into a JavaScript object. Then we send the request with the send() method:
request.responseType = 'json';
request.send();

// 5. The last bit of this section involves waiting for the response to return from the server, then dealing with it. Add the following code below your previous code:
request.onload = function () {
    var data = request.response;
    townData(data);

    //Here we are storing the response to our request (available in the response property) in a variable called superHeroes; this variable will now contain the JavaScript object based on the JSON! We are then passing that object to two function calls — the first one will fill the <header> with the correct data, while the second one will create an information card for each hero on the team, and insert it into the <section>.

    //We have wrapped the code in an event handler that runs when the load event fires on the request object (see onload) — this is because the load event fires when the response has successfully returned; doing it this way guarantees that request.response will definitely be available when we come to try to do something with it.


    //Populating the header
    //Now we've retrieved the JSON data and converted it into a JavaScript object, let's make use of it by writing the two functions we referenced above. First of all, add the following function definition below the previous code:

    //function populateHeader(jsonObj) {
    //    var myH1 = document.createElement('h1');
    //    myH1.textContent = jsonObj['squadName'];
    //    header.appendChild(myH1);
    //
    //    var myPara = document.createElement('p');
    //    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    //    header.appendChild(myPara);
    //}



    //We have called the parameter jsonObj, to remind ourselves that this JavaScript object originated from JSON. Here we first create an <h1> element with createElement(), set its textContent to equal the squadName property of the object, then append it to the header using appendChild(). We then do a very similar operation with a paragraph: create it, set its text content and append it to the header. The only difference is that its text is set to a concatenated string containing both the homeTown and formed properties of the object.

    //Creating the hero information cards
    // Next, add the following function at the bottom of the code, which creates and displays the superhero cards:

    function townData(jsonObj) {
        var town = jsonObj['towns'];

        for (var i = 0; i < town.length; i++) {
            if (i == 2) {
                continue;
            }
            var myArticle = document.createElement('article');
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');
            var myList = document.createElement('ul');

            myH3.textContent = town[i].name;
            myPara1.textContent = 'Motto: ' + town[i].motto;
            myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
            myPara3.textContent = 'Current Population: ' + town[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + town[i].averageRainfall + "in";
            myPara5.textContent = 'Upcoming Events: '

            var townEvents = town[i].events;
            for (var j = 0; j < townEvents.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = townEvents[j];
                myList.appendChild(listItem);
            }

            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);
            myArticle.appendChild(myList);

            if (town[i].name == "Franklin") {
                franklin.appendChild(myArticle);
            } else if (town[i].name == "Greenville") {
                greenville.appendChild(myArticle);
            } else if (town[i].name == "Springfield") {
                springfield.appendChild(myArticle);
            }
        }
    }
}

//
//To start with, we store the members property of the JavaScript object in a new variable. This array contains multiple objects that contain the information for each hero.

//Next, we use a for loop to loop through each object in the array. For each one, we:

//Create several new elements: an <article>, an <h2>, three <p>s, and a <ul>.
//Set the <h2> to contain the current hero's name.
//Fill the three paragraphs with their secretIdentity, age, and a line saying "Superpowers:" to introduce the information in the list.
//Store the powers property in another new variable called superPowers — this contains an array that lists the current hero's superpowers.
//Use another for loop to loop through the current hero's superpowers — for each one we create a <li> element, put the superpower inside it, then put the listItem inside the <ul> element (myList) using appendChild().
//The very last thing we do is to append the <h2>, <p>s, and <ul> inside the <article> (myArticle), then append the <article> inside the <section>. The order in which things are appended is important, as this is the order they will be displayed inside the HTML.

//Converting between objects and text
// The above example was simple in terms of accessing the JavaScript object, because we set the XHR request to convert the JSON response directly into a JavaScript object using:

//request.responseType = 'json';

//But sometimes we aren't so lucky — sometimes we'll receive a raw JSON string, and we'll need to convert it to an object ourselves. And when we want to send a JavaScript object across the network, we'll need to convert it to JSON (a string) before sending. Luckily, these two problems are so common in web development that a built-in JSON object is available in browsers, which contains the following two methods:

//parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.

//stringify(): Accepts an object as a parameter, and returns the equivalent JSON string form.

//You can see the first one in action in our heroes-finished-json-parse.html example (see the source code) — this does exactly the same thing as the example we built up earlier, except that we set the XHR to return the raw JSON text, then used parse() to convert it to an actual JavaScript object. The key snippet of code is here:

//            request.open('GET', requestURL);
//            request.responseType = 'text'; // now we're getting a string!
//            request.send();
//
//            request.onload = function() {
//                var superHeroesText = request.response; // get the string from the response
//                var superHeroes = JSON.parse(superHeroesText); // convert it to an object
//                populateHeader(superHeroes);
//                showHeroes(superHeroes);
//            }

// As you might guess, stringify() works the opposite way. Try entering the following lines into your browser's JavaScript console one by one to see it in action:

//            var myJSON = { "name": "Chris", "age": "38" };
//            myJSON
//            var myString = JSON.stringify(myJSON);
//            myString

//Here we're creating a JavaScript object, then checking what it contains, then converting it to a JSON string using stringify() — saving the return value in a new variable — then checking it again.
