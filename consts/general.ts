import { CartItem } from "@/contexts/CartContext";

export const THEME_MODES = {
  LIGHT: "light",
  DARK: "dark",
};

export const candles: CartItem[] = [
  {
    id: 1,
    price: 19.99,
    name: "Lavender Bliss",
    shortDesc: "Relaxing lavender-scented candle.",
    description:
      "A soothing blend of lavender essential oils designed to calm your mind and create a peaceful atmosphere.",
    scents: ["lavender", "flowers"],
    img: "/assets/images/img.jpg",
  },
  {
    id: 2,
    price: 24.99,
    name: "Vanilla Dream",
    shortDesc: "Warm and sweet vanilla aroma.",
    description:
      "A rich and creamy vanilla fragrance that fills your space with a comforting and cozy scent.",
    scents: ["lavender", "flowers"],
    img: "/assets/images/img.jpg",
  },
  {
    id: 3,
    price: 22.5,
    name: "Citrus Burst",
    shortDesc: "Zesty citrus-scented candle.",
    description:
      "A refreshing blend of orange, lemon, and lime that brightens your mood and energizes your space.",
    scents: ["lavender", "flowers"],
    img: "/assets/images/img.jpg",
  },
  {
    id: 4,
    price: 21.99,
    name: "Rose Garden",
    shortDesc: "Romantic rose fragrance.",
    description:
      "A delicate and floral scent inspired by blooming rose gardens, adding elegance to any room.",
    scents: ["lavender", "flowers"],
    img: "/assets/images/img.jpg",
  },
  {
    id: 5,
    price: 26.99,
    name: "Ocean Breeze",
    shortDesc: "Refreshing coastal scent.",
    description:
      "A crisp and airy scent reminiscent of ocean waves and salty sea air, perfect for a relaxing ambiance.",
    scents: ["lavender", "flowers"],
    img: "/assets/images/img.jpg",
  },
  {
    id: 6,
    price: 23.99,
    name: "Sandalwood Serenity",
    shortDesc: "Earthy and woody aroma.",
    description:
      "A deep, rich sandalwood fragrance that promotes relaxation and grounding.",
    scents: ["lavender", "flowers"],
    img: "/assets/images/img.jpg",
  },
];

export const recommendedColorForScent: Record<string, string> = {
  lavender: "black",
  flowers: "white",
};

export const candlesColors = ["black", "white"];
