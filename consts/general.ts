import { Candle } from "@/app/[candleId]/page";

export const THEME_MODES = {
  LIGHT: "light",
  DARK: "dark",
};

export const candles: Candle[] = [
  {
    type: "mold",
    id: 1,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Spiced Cinnamon",
    shortDesc: "A warm and cozy cinnamon aroma.",
    description:
      "A rich blend of spiced cinnamon that evokes the comfort of home and festive memories.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 2,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "vanilla Embrace",
    shortDesc: "A comforting and creamy vanilla scent.",
    description:
      "A luscious vanilla fragrance that wraps you in warmth and sweetness, perfect for relaxation.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 3,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Berry Cheesecake",
    shortDesc: "A delightful mix of berries and creamy cheesecake.",
    description:
      "A mouthwatering fusion of ripe berries and rich, buttery cheesecake that fills your space with sweetness.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 4,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Coffee Glow",
    shortDesc: "The bold and inviting aroma of fresh coffee.",
    description:
      "Wake up to the energizing scent of freshly brewed coffee, infused with subtle caramel undertones for extra warmth.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 5,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Suger cookie",
    shortDesc: "A sweet and buttery cookie delight.",
    description:
      "Experience the comforting aroma of freshly baked sugar cookies, with hints of vanilla and caramelized sugar.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 6,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "It Girl",
    shortDesc: "A chic and luxurious fragrance.",
    description:
      "A sophisticated blend of floral and musky notes, designed for those who love elegance and confidence.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 7,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "cherry Wine",
    shortDesc: "A rich and fruity cherry-infused aroma.",
    description:
      "A bold fusion of deep red cherries and a hint of velvety wine, creating an intoxicating and luxurious scent.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 8,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Rose & Rouge",
    shortDesc: "A romantic and floral rose bouquet.",
    description:
      "A classic and timeless fragrance featuring fresh roses blended with soft powdery notes for a graceful finish.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 9,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "citrus Mist",
    shortDesc: "A bright and zesty citrus medley.",
    description:
      "A refreshing burst of orange, lemon, and lime, perfect for uplifting your mood and brightening your space.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 10,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Flaming Hot",
    shortDesc: "A bold and spicy fiery scent.",
    description:
      "Ignite your senses with a daring mix of chili, cinnamon, and warm spices that bring intense energy to any room.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 11,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Oud Essence",
    shortDesc: "A rich and luxurious oud fragrance.",
    description:
      "Experience the deep and mysterious aroma of oud, blended with warm and woody undertones to create an elegant and sophisticated atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 12,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Forbidden Musk",
    shortDesc: "A bold and seductive musk aroma.",
    description:
      "Unleash an irresistible allure with this sultry musk blend, exuding warmth, mystery, and timeless elegance.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 13,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Crimson Amber",
    shortDesc: "A warm amber-infused glow.",
    description:
      "An enchanting mix of rich amber and deep red spices, creating an intoxicating scent that fills your space with warmth and depth.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 14,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "You are the one",
    shortDesc: "A romantic and enchanting scent.",
    description:
      "A captivating fragrance inspired by love and passion, blending soft florals with a touch of sweetness for a scent as unforgettable as you",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 15,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Into the night",
    shortDesc: "A dark and mysterious aroma.",
    description:
      "Dive into the night with this alluring fragrance, blending deep, sensual notes with a hint of mystery for an unforgettable experience.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 16,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Iced Latte",
    shortDesc: "A creamy and energizing Caffeine aroma.",
    description:
      "A refreshing fusion of aromatic coffee, creamy vanilla, and subtle sweet notes, inspired by your favorite iced lattes. Whether infused with the calming essence of lavender, the energizing aroma of espresso, or the earthy touch of matcha, this candle creates a cozy yet invigorating atmosphere, perfect for any moment of the day",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 17,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 18,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 19,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "mold",
    id: 20,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 21,
    prices: [{ price: 19.99, size: 150 }],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 22,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 23,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 24,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 25,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 26,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 27,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 28,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 29,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
  {
    type: "jar",
    id: 30,
    prices: [
      { price: 19.99, size: 150 },
      { price: 119.99, size: 180 },
      { price: 219.99, size: 190 },
    ],
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",

    imgs: ["/assets/images/img.jpg"],
  },
];
export const recommendedColorForScent: Record<string, string> = {
  lavender: "purple",
  "white flower": "white",
  "champagne toast": "offwhite",
  "cinnamon spiced vanilla": "white",
  "coco chanel": "creamy",
  "dark kiss": "purple",
  "Strawberry Pound Cake": "red",
  "Pumpkin Cinnamon": "orange",
  "tobaco vanilla": "coffee",
  mocha: "coffee",
  "blue berry": "blue",
  choclate: "brown",
  "into the night": "black",
  strawberry: "white",
  "you are the one": "pink",
  "sugered vanilla": "creamy",
  "coconut sweety": "Creamy",
  amber: "peachy",
  "black opiume": "hot pink",
  "good girl": "babyblue",
  khamrah: "light amber",
  "icecream berry": "red",
  "watermelon lemon": "green",
  "marshmello caramel": "pink",
  "cotton candy": "pink",
  "elder blossom": "creamy",
  "bakarat rouge": "maroon",
  "choco biscute": "coffee",
  Fahrenheit: "maroon",
  "La vie est belle": "pale pink",
  Sauvage: "black",
  "Orange cloves": "orange",
  "Caramel apple": "peachy",
  "Chocolate hazelnut": "light brown",
  "Amber chocolate": "black",
  "Vanilla sandalwood": "white",
  "sweet vanilla": "pale pink",
  "black hourse": "black",
  "dolce and gabbana the one men": "navy",
  "silver scent deep bogart": "white",
  "terre de hermes": "navy",
};

export const candlesColors = [
  "light brown",
  "pale pink",
  "maroon",
  "light amber",
  "hot pink",
  "offwhite",
  "black",
  "white",
  "red",
  "pink",
  "purple",
  "creamy",
  "coffee",
  "yellow",
  "violet",
  "mint",
  "grey",
  "green",
  "lavender",
  "blue",
  "babyblue",
  "navy",
  "brown",
  "orange",
  "peachy",
];
export const candleScents = [
  "champagne toast",
  "cinnamon spiced vanilla",
  "coco chanel",
  "cinnamon spiced vanilla",
  "dark kiss",
  "cinnamon spiced vanilla",
  "Strawberry Pound Cake",
  "Pumpkin Cinnamon",
  "tobaco vanilla",
  "mocha",
  "oud",
  "white flower",
  "blue berry",
  "choclate",
  "into the night",
  "strawberry",
  "you are the one",
  "sugered vanilla",
  "coconut sweety",
  "amber",
  "black opiume",
  "good girl",
  "khamrah",
  "icecream berry",
  "watermelon lemon",
  "marshmello caramel",
  "cotton candy",
  "elder blossom",
  "bakarat rouge",
  "choco biscute",
  "Fahrenheit",
  "La vie est belle",
  "Sauvage",
  "Orange cloves",
  "Caramel apple",
  "Chocolate hazelnut",
  "Amber chocolate",
  "Vanilla sandalwood",
  "sweet vanilla",
  "black hourse",
  "dolce and gabbana the one men",
  "silver scent deep bogart",
  "terre d'hermes",
];
