import bracelet1 from "../src/assets/bracelets/bracelet1.jpg";
import bracelet2 from "../src/assets/bracelets/bracelet2.jpg";
import pendant1 from "../src/assets/pendants/pendant1.jpg";
import toering1 from "../src/assets/toerings/toering1.jpg";
import toering2 from "../src/assets/toerings/toering2.jpg";

export const PRODUCTS_DATA = [
  {
    category: "pendants",
    items: [
      {
        id: 1,
        name: "Elegant Silver Pendant",
        price: 49.99,
        description:
          "A beautifully crafted silver pendant perfect for any occasion.",
        imageUrl: pendant1,
      },
    ],
  },
  {
    category: "toeRings",
    items: [
      {
        id: 2,
        name: "Classic Gold Toe Ring",
        price: 59.99,
        description: "A timeless gold toe ring that adds a touch of elegance.",
        imageUrl: toering1,
      },
      {
        id: 3,
        name: "Modern Rose Gold Toe Ring",
        price: 69.99,
        description: "A stylish rose gold toe ring for contemporary fashion.",
        imageUrl: toering2,
      },
    ],
  },
  {
    category: "bracelets",
    items: [
      {
        id: 4,
        name: "Elegant Silver Bracelet",
        price: 49.99,
        description:
          "A beautifully crafted silver bracelet perfect for any occasion.",
        imageUrl: bracelet1,
      },
      {
        id: 5,
        name: "Classic Gold Bracelet",
        price: 59.99,
        description: "A timeless gold bracelet that adds a touch of elegance.",
        imageUrl: bracelet2,
      },
    ],
  },
];
