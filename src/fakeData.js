import {
  elephant,
  giraffe,
  hippo,
  kangaroo,
  koala,
  lion,
  panda,
  penguin,
  polar,
  sloth,
} from "./assets/img/index.js";

const fakeData = [
  {
    imageUrl: elephant,
    description: "African Elephant",
    isMatch: true,
  },
  {
    imageUrl: giraffe,
    description: "Giraffe",
    isMatch: false,
  },
  {
    imageUrl: lion,
    description: "Lion",
    isMatch: false,
  },
  {
    imageUrl: panda,
    description: "Panda",
    isMatch: true,
  },
  {
    imageUrl: kangaroo,
    description: "Kangaroo",
    isMatch: true,
  },
  {
    imageUrl: penguin,
    description: "Penguin",
    isMatch: false,
  },
  {
    imageUrl: hippo,
    description: "Hippopotamus",
    isMatch: false,
  },
  {
    imageUrl: sloth,
    description: "Sloth",
    isMatch: true,
  },
  {
    imageUrl: koala,
    description: "Koala",
    isMatch: false,
  },
  {
    imageUrl: polar,
    description: "Polar Bear",
    isMatch: true,
  },
];

export default fakeData;
