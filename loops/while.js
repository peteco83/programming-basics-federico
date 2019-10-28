let weatherIsNice = true;

while (weatherIsNice) {
  console.log(`let's go outside! :D`);

  const temp = Math.floor(Math.random() * 35);
  console.log(`\nThe temperature is ${temp}`);

  weatherIsNice = temp > 17 && temp < 25 ? true : false;
  console.log(`weatherIsNice: ${weatherIsNice}`);
}

while (!weatherIsNice) {
  console.log(`\nlet's plan a holiday!`);

  const temp = Math.floor(Math.random() * 35);
  console.log(`\nThe temperature is ${temp}`);
  weatherIsNice = temp > 17 && temp < 25 ? true : false;
}
