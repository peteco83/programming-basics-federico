//JavaScript Accessors Objects Getter

const person1 = {
  firstname: "Peteco",
  lastname: "Carabajal",
  age: 34,
  city: "Chapalmadal",
  language: "es",
  get lang() {
    return this.language;
  }
};

//Printout the data from the object using a getter
console.log(person1.lang);

//JavaScript Accessors Objects Setter
const person2 = {
  firstname: "Patrick",
  lastname: "Petela",
  age: 40,
  city: "Berlin",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

console.log(person2.language);

//Set an object property using a setter:
person2.lang = "ch";

console.log(person2.firstname);
//Display data from the object:
console.log(person2.language);

// JavaScript Function or Getter
const person3 = {
  firstName: "Federico",
  lastName: "Ientile",
  middleName: "José",
  birthYear: 1983,
  birthMonth: 12,
  birthDay: 31,

  fullName: function() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  },
  age: function() {
    return `He is ${2019 - this.birthYear} years old`;
  },

  zodiacArray: [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ],
  zodiac: function() {
    if (
      (this.birthMonth === 3 && this.birthDay > 20) ||
      (this.birthMonth === 4 && this.birthDay < 20)
    ) {
      console.log(this.zodiacArray[0]);
    }
    if (
      (this.birthMonth === 4 && this.birthDay > 19) ||
      (this.birthMonth === 5 && this.birthDay < 21)
    ) {
      console.log(this.zodiacArray[1]);
    }
    if (
      (this.birthMonth === 5 && this.birthDay > 20) ||
      (this.birthMonth === 6 && this.birthDay < 21)
    ) {
      console.log(this.zodiacArray[2]);
    }
    if (
      (this.birthMonth === 6 && this.birthDay > 20) ||
      (this.birthMonth === 7 && this.birthDay < 23)
    ) {
      console.log(this.zodiacArray[3]);
    }
    if (
      (this.birthMonth === 7 && this.birthDay > 22) ||
      (this.birthMonth === 8 && this.birthDay < 23)
    ) {
      console.log(this.zodiacArray[4]);
    }
    if (
      (this.birthMonth === 8 && this.birthDay > 22) ||
      (this.birthMonth === 9 && this.birthDay < 23)
    ) {
      console.log(this.zodiacArray[5]);
    }
    if (
      (this.birthMonth === 9 && this.birthDay > 22) ||
      (this.birthMonth === 10 && this.birthDay < 23)
    ) {
      console.log(this.zodiacArray[6]);
    }
    if (
      (this.birthMonth === 10 && this.birthDay > 22) ||
      (this.birthMonth === 11 && this.birthDay < 22)
    ) {
      console.log(this.zodiacArray[7]);
    }
    if (
      this.birthMonth === 11 &&
      this.birthDay > 21 &&
      (this.birthMonth === 12 && this.birthDay < 23)
    ) {
      console.log(this.zodiacArray[8]);
    }
    if (
      (this.birthMonth === 12 && this.birthDay > 22) ||
      (this.birthMonth === 1 && this.birthDay < 20)
    ) {
      console.log(this.zodiacArray[9]);
    }
    if (
      (this.birthMonth === 1 && this.birthDay > 19) ||
      (this.birthMonth === 2 && this.birthDay < 19)
    ) {
      console.log(this.zodiacArray[10]);
    }
    if (
      (this.birthMonth === 2 && this.birthDay > 20) ||
      (this.birthMonth === 3 && this.birthDay < 21)
    ) {
      console.log(this.zodiacArray[11]);
    }
  }
};

// console.log(person3.fullName());
// console.log(person3.age());

person3.zodiac();
