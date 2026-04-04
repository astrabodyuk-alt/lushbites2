export type MenuItem = {
  name: string;
  desc: string;
  price: string;
  badge?: string;
  emoji: string;
  image?: string;
};

export type MenuSection = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    id: "beef-burgers",
    label: "Beef Burgers",
    items: [
      {
        name: "Devil's Bite",
        desc: "Double smashed beef patty, American cheddar, pickled jalapeños, crispy onions, Devil's sauce, toasted brioche bun.",
        price: "£10.50",
        badge: "Best Seller",
        emoji: "🍔",
        image: "/menu/devil-bite.png",
      },
      {
        name: "BBQ Bacon Cheeseburger",
        desc: "Double smashed beef patty, streaky bacon, smoked cheddar, BBQ sauce, pickles, lettuce, toasted brioche bun.",
        price: "£11.50",
        emoji: "🥓",
        image: "/menu/bbq-bacon.png",
      },
      {
        name: "Classic Smash",
        desc: "Double smashed beef patty, American cheddar, American mustard, pickles, white onion, toasted brioche bun. The original.",
        price: "£9.50",
        emoji: "⭐",
        image: "/menu/classic-smash.png",
      },
    ],
  },
  {
    id: "lamb-burgers",
    label: "Lamb Burgers",
    items: [
      {
        name: "Spicy Lamb Smash",
        desc: "Double smashed spiced lamb patty, harissa mayo, pickled red onion, fresh mint, gem lettuce, toasted brioche bun.",
        price: "£12.00",
        badge: "Signature",
        emoji: "🐑",
      },
    ],
  },
  {
    id: "chicken-burgers",
    label: "Chicken Burgers",
    items: [
      {
        name: "Classic Chicken",
        desc: "Crispy buttermilk chicken fillet, iceberg lettuce, tomato, garlic mayo, toasted brioche bun.",
        price: "£10.00",
        emoji: "🐔",
      },
      {
        name: "BBQ Bacon & Cheddar Chicken",
        desc: "Crispy buttermilk chicken fillet, streaky bacon, cheddar, BBQ sauce, pickles, toasted brioche bun.",
        price: "£11.50",
        emoji: "🥓",
      },
    ],
  },
  {
    id: "wings",
    label: "Wings",
    items: [
      {
        name: "Buffalo Wings",
        desc: "Crispy wings tossed in classic buffalo sauce. Tangy, buttery, and fiery. Served with celery sticks and blue cheese dip.",
        price: "5pc £6.50 · 10pc £11.00",
        badge: "Classic",
        emoji: "🔥",
      },
      {
        name: "Southern Fried Wings",
        desc: "Classic southern seasoning, deep-fried to golden crisp perfection. Served with ranch dip.",
        price: "5pc £6.50 · 10pc £11.00",
        emoji: "🍗",
      },
      {
        name: "Texan Sticky BBQ",
        desc: "Slow-cooked BBQ glaze, smoked paprika, honey finish. Sticky, rich, and deeply satisfying.",
        price: "5pc £6.50 · 10pc £11.00",
        emoji: "🍖",
      },
      {
        name: "Garlic Parmesan",
        desc: "Roasted garlic butter glaze with aged Parmesan dust and fresh herbs. Rich, savoury, addictive.",
        price: "5pc £6.50 · 10pc £11.00",
        emoji: "🧄",
      },
      {
        name: "Mango Habanero",
        desc: "Sweet mango glaze meets slow habanero heat. Fruity up front, proper burn on the finish.",
        price: "5pc £6.50 · 10pc £11.00",
        badge: "Hot",
        emoji: "🥭",
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      {
        name: "Cheesy Crinkle Fries",
        desc: "Skin-on crinkle fries loaded with molten cheddar cheese sauce and crispy shallots.",
        price: "£4.50",
        badge: "Fan Fave",
        emoji: "🧀",
      },
      {
        name: "Classic Loaded Fries",
        desc: "Skin-on fries topped with Lush Bites special sauce, pickled jalapeños, and American cheddar. A meal in itself.",
        price: "£5.50",
        emoji: "🍟",
      },
      {
        name: "Mac Cheese Bites",
        desc: "Crispy panko-crusted mac and cheese bites. Golden and shatteringly crisp outside, molten and oozing inside.",
        price: "£4.00",
        emoji: "🧆",
      },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    items: [
      {
        name: "Beef Smash Salad",
        desc: "Smashed beef patty over mixed greens, beef tomato, pickled red onions, Lush Bites special sauce dressing.",
        price: "£9.50",
        emoji: "🥗",
      },
      {
        name: "Lamb Smash Salad",
        desc: "Spiced lamb over gem lettuce, pomegranate seeds, cucumber ribbons, fresh mint, harissa dressing.",
        price: "£10.00",
        emoji: "🌿",
      },
      {
        name: "Chicken Salad",
        desc: "Crispy chicken fillet strips over mixed greens, sweetcorn, cherry tomatoes, honey mustard dressing.",
        price: "£9.50",
        emoji: "🐔",
      },
      {
        name: "Veggie Salad",
        desc: "Roasted spiced chickpeas, grilled halloumi, mixed leaves, sun-dried tomatoes, olives, tahini lemon dressing.",
        price: "£8.50",
        badge: "Veggie",
        emoji: "🌿",
      },
    ],
  },
];

export const menuCategories = [
  { id: "burgers", label: "Burgers", sections: ["beef-burgers", "lamb-burgers", "chicken-burgers"] },
  { id: "wings",   label: "Wings",   sections: ["wings"] },
  { id: "sides",   label: "Sides",   sections: ["sides"] },
  { id: "salads",  label: "Salads",  sections: ["salads"] },
];
