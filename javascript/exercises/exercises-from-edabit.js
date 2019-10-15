// cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// });

// function cityFacts(city) {
//   return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
// }

// console.log(cityFacts(cityFacts.name));

function monthName(num) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return months[num - 1];
}

console.log(monthName(13));

function volumeOfBox(sizes) {
  return sizes.length * sizes.width * sizes.height;
}

console.log(volumeOfBox({ length: 10, width: 5, height: 5 }));

function getDay(day) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var date = new Date(day);
  return days[date.getDay()];
}

console.log(getDay("10/15/2019"));

function days(month, year) {
  return new Date(year, month, 0).getDate();
}

console.log(days(2, 2012));

// Create a function that converts dates from one of five string formats:

// "January 9, 2019"(MM D, YYYY)
// "Jan 9, 2019"(MM D, YYYY)
// "01/09/2019"(MM / DD / YYYY)
// "01-09-2019"(MM - DD - YYYY)
// "01.09.2019"(MM.DD.YYYY)
// into an array with this format: [MM, DD, YYYY], where MM, DD, and YYYY are all integers.Using the example above:

function convertDate(date) {
  let d = new Date(date);

  return [d.getMonth() + 1, d.getDate(), d.getFullYear()];
}

console.log(convertDate("January, 1, 1980"));
