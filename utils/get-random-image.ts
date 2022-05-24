const categories = [
  [
    "beach",
    "car",
    "cat",
    "food",
    "city",
    "dog",
    "snow",
    "fruit",
    "computer",
    "forest",
  ],
  [
    "kitchen",
    "party",
    "animal",
    "data",
    "art",
    "abstract",
    "people",
    "rain",
    "office",
    "kids",
  ],
  [
    "dance",
    "sing",
    "baby",
    "person",
    "zoo",
    "couple",
    "love",
    "universe",
    "planet",
    "travel",
  ],
];

// return a random image url based on random category above
export default function getRandomImage(size?: string) {
  const randomNum1 = Math.floor(Math.random() * 3);
  const randomNum2 = Math.floor(Math.random() * 10);

  // get random category by two random numbers - improves chance not to repeat a value
  const randomCategory = categories[randomNum1][randomNum2];

  // default to landscape size
  const selectedSize = size === "square" ? "300x300" : "900x568";

  // expected valid url --> 'https://source.unsplash.com/300x300?baby'
  return `https://source.unsplash.com/${selectedSize}?${randomCategory}`;
}
