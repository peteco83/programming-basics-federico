const person3 = {
  firstName: "Federico",
  lastName: "Ientile",
  middleName: "José",
  birthYear: 1983,
  birthMonth: 12,
  birthDay: 21,
  myArr: [
    [119, "Capricorn"],
    [218, "Aquarius"],
    [320, "Pisces"],
    [419, "Aries"],
    [520, "Taurus"],
    [620, "Gemini"],
    [722, "Cancer"],
    [822, "Leo"],
    [922, "Virgo"],
    [1022, "Libra"],
    [1121, "Scorpio"],
    [1222, "Sagittarius"],
    [1231, "Capricorn"]
  ],
  fullName: function() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  },
  age: function() {
    return `He is ${2019 - this.birthYear} years old`;
  },

  zodiac: function() {
    let fullZodiac = `${this.birthMonth}${this.birthDay}`;
    fullZodiac = parseInt(fullZodiac, 10);
    for (let i = 0; i < this.myArr.length; i += 1) {
      //   console.log(this.zodiacArray[i][0]);
      if (fullZodiac <= this.myArr[i][0]) {
        return this.myArr[i][1];
      }
    }
  }
};

// console.log(person3.fullName());
// console.log(person3.age());
console.log(person3.zodiac());
