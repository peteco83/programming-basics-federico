// // First Exercise

// const nestedObject = {
//   speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
//   data: {
//     continents: {
//       europe: {
//         countries: {
//           switzerland: {
//             capital: "Bern",
//             population: 8000000
//           }
//         }
//       }
//     },
//     languages: {
//       spanish: {
//         hello: "Hola"
//       },
//       french: {
//         hello: "Bonjour"
//       }
//     }
//   },
//   addSpeaker: function() {
//     let pushedArr = { name: "Markus" };
//     this.speakers.push(pushedArr);
//   },
//   set addLanguage(lang) {
//     nestedObject.data.languages = Object.assign(
//       nestedObject.data.languages,
//       lang
//     );
//   },
//   set addCountry(keys) {
//     nestedObject.data.continents.europe.countries = Object.assign(
//       nestedObject.data.continents.europe.countries,
//       keys
//     );
//   }
// };

// // let langLang =
// nestedObject.addLanguage = { german: { hello: "Hallo" } };

// nestedObject.addSpeaker();

// let eurCountry = { italy: { capital: "Rome", population: 60000000 } };
// nestedObject.addCountry = eurCountry;

// console.log(nestedObject.speakers);
// console.log(nestedObject.data.languages);
// console.log(nestedObject.data.continents.europe.countries);

// Second Exercise

var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13]
    },
    addSnack: function(snack) {
      this.snacks.push(snack);
      return this;
    },
    readPrimeNumbers: function() {
      for (
        let i = 0;
        i < nestedData.innerData.numberData.primeNumbers.length;
        i += 1
      ) {
        console.log(nestedData.innerData.numberData.primeNumbers[i]);
      }
    }
  }
};

//2

const fiboDido = () => {
  let fibonnaciNumbers = nestedData.innerData.numberData.fibonnaci;
  for (let i = 0; i < fibonnaciNumbers.length; i += 1) {
    if (fibonnaciNumbers[i] % 2 === 0) {
      console.log(fibonnaciNumbers[i]);
    }
  }
};

//1
nestedData.innerData.readPrimeNumbers();

//2
fiboDido();

//3
console.log(nestedData.innerData.order[1]);

//4
nestedData.innerData.addSnack("chocolate");
console.log(nestedData.innerData.snacks);

// 1 - Using a for loop, console.log all of the numbers in the primeNumbers array.
// 2 - Using a for loop, console.log all of the even Fibonnaci numbers.
// 3 - Console.log the value “second” inside the order array.
// 4 - Inside of the addSnack function there is a special keyword called this.What does the word this refer to inside the addSnack function?
