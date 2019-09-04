function generateBandName(rawString) {
  const both = rawString[0].toUpperCase() + rawString.substring(1).toLowerCase();
  return `${both} `;
}

console.log(generateBandName("crimson") + generateBandName("KEBAB"));
