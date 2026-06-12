const text = "The fox is quick. The fox is smart.";

// Convert to lowercase
const lowerText = text.toLowerCase();

// Split into words and count "fox"
const words = lowerText.match(/\b\w+\b/g);
const foxCount = words.filter(word => word === "fox").length;

console.log("Lowercase Text:", lowerText);
console.log("Fox Count:", foxCount);