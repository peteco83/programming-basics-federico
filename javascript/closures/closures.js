// function setLocation(city) {
//   const country = "Italy";

//   function printLocation() {
//     console.log(`You are now in ${city}, ${country}`);
//   }

//   printLocation();
// }

// setLocation("Rome");

// function setLocation(city) {
//   const country = "Italy";

//   function printLocation() {
//     console.log(`You are now in ${city}, ${country}`);
//   }

//   return printLocation;
// }

// const currentLocation = setLocation("Rome");

// currentLocation();

// function cityLocation() {
//   let city = "Paris";

//   return {
//     get: function() {
//       console.log(city);
//     },
//     set: function(newcity) {
//       city = newcity;
//     }
//   };
// }

// let myLocation = cityLocation();

// myLocation.get();
// myLocation.set("Buenos Aires");
// myLocation.get();

// function showMessage(message) {
//   setTimeout(function() {
//     alert(message);
//   }, 3000);
// }

// showMessage("Function called 3 seconds ago");

// function fullName(firstName, lastName, callback) {
//   console.log("My name is " + firstName + " " + lastName);
//   callback(lastName);
// }

// var greeting = function(ln) {
//   console.log("Welcome Mr. " + ln);
// };

// fullName("Jackie", "Chan", greeting);

// function fullName(firstName, lastName, callback) {
//   console.log("My name is " + firstName + " " + lastName);
//   callback(lastName);
// }

// fullName("Jackie", "Chan", function(ln) {
//   console.log("Welcome Mr. " + ln);
// });

function publish(item, author, callback) {
  // Generic function with common data
  console.log(item);
  var date = new Date();

  callback(author, date);
}

function messages(author, time) {
  // Callback function with specific data
  var sendTime = time.toLocaleTimeString();
  console.log("Sent from " + author + " at " + sendTime);
}

function articles(author, date) {
  // Callback function with specific data
  var pubDate = date.toDateString();
  console.log("Written by " + author);
  console.log("Published " + pubDate);
}

publish("How are you?", "Monique", messages);

publish("10 Tips for JavaScript Developers", "Jane Doe", articles);
