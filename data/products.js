export const farmer = {
  name: "Govindan Nair",
  age: 58,
  village: "Kottarakkara, Kollam",
  state: "Kerala",
  landAcres: 3.5,
  farmingSince: 1976,
  generation: "3rd generation",
  quote:
    "My grandfather planted the first tamarind tree in 1948. I am still farming the same land. My hands know this soil.",
  emoji: "🧑‍🌾",
  whatsApp: "918301061753",
  displayPhone: "+91 83010 61753",
};

export const products = [
  {
    slug: "black-pepper",
    name: "Black Pepper",
    localName: "Kurumulaku",
    tagline: "The King of Spices",
    story:
      "Govindan planted these vines along the coconut palms — just like his father did. It takes 4 years before a vine yields its first harvest. That patience is what you taste.",
    shortDesc: "Hand-picked Malabar black pepper, sun-dried on woven mats for 10 days.",
    description:
      "Each berry is picked by hand — only the fully ripe red ones make it into your bag. After picking, they are spread on woven mats in the Kerala sun for 10 days, turning dark and wrinkled with concentrated flavour. No machinery. No shortcuts.",
    price: "₹850",
    unit: "500g",
    variants: [
      { label: "250g", price: "₹450" },
      { label: "500g", price: "₹850" },
      { label: "1kg", price: "₹1,550" },
    ],
    harvestMonths: 4,
    harvestLabel: "Oct – Nov 2025",
    status: "preorder",
    badge: "Pre-Order",
    fieldStatus: "Vines are flowering 🌸",
    image: "/images/pepper.png",
    color: "#3A6B35",
    bgColor: "#C8DFB8",
    emoji: "🌿",
    preorderCount: 31,
    category: "Spice",
    benefits: ["Rich in piperine", "Aids nutrient absorption", "Grown without pesticides"],
    whatsappMsg:
      "Namaskaram! I'd like to pre-order Black Pepper (Kurumulaku) from Nelpadam Farms. Please share harvest timeline and payment details.",
  },
  {
    slug: "tamarind",
    name: "Tamarind",
    localName: "Puli",
    tagline: "Sour, Ancient & Irreplaceable",
    story:
      "The tamarind tree in Govindan's yard is 75 years old. His grandfather planted it as a sapling. Govindan still climbs it every harvest season — his children now watch from below.",
    shortDesc: "Seedless sun-dried tamarind from a 75-year-old family tree, prepared the traditional way.",
    description:
      "This tamarind is not grown in a plantation. It comes from a single 75-year-old tree on Govindan's family land. The pods are collected, de-seeded by hand, pressed into balls, and sun-dried for a week. The result is an intensely sour, complex flavour that store-bought paste cannot replicate.",
    price: "₹280",
    unit: "500g block",
    variants: [
      { label: "250g", price: "₹150" },
      { label: "500g", price: "₹280" },
      { label: "1kg", price: "₹520" },
    ],
    harvestMonths: 3,
    harvestLabel: "Sep – Oct 2025",
    status: "preorder",
    badge: "Pre-Order",
    fieldStatus: "Pods forming on branches 🌳",
    image: "/images/tamarind.png",
    color: "#6B2D0F",
    bgColor: "#F0D4B8",
    emoji: "🌳",
    preorderCount: 54,
    category: "Souring Agent",
    benefits: ["Tartaric acid-rich", "Natural digestive", "From a single 75-yr tree"],
    whatsappMsg:
      "Namaskaram! I'd like to pre-order Tamarind (Puli) from Nelpadam Farms. Please share harvest timeline and payment details.",
  },
  {
    slug: "turmeric",
    name: "Turmeric",
    localName: "Manjal",
    tagline: "Golden Root, Ancient Healer",
    story:
      "Govindan grows a wild variety called Kasturi Manjal — almost impossible to find in markets. High curcumin, deep orange inside. His wife Shanthi dries and grinds it on a stone slab, just as her mother taught her.",
    shortDesc: "Wild Kasturi Manjal, stone-ground by hand. 3× the curcumin of commercial turmeric.",
    description:
      "Kasturi Manjal is a rare wild variety grown in the shade of Govindan's coconut grove. It produces thick rhizomes with an almost orange interior — a sign of high curcumin content. Shanthi, Govindan's wife, cures the roots in boiling water, sun-dries them for two weeks, and grinds them fresh on a stone grinder. Each batch is prepared on order.",
    price: "₹380",
    unit: "200g powder",
    variants: [
      { label: "Whole Rhizome 200g", price: "₹300" },
      { label: "Powder 200g", price: "₹380" },
      { label: "Powder 500g", price: "₹850" },
    ],
    harvestMonths: 5,
    harvestLabel: "Nov – Dec 2025",
    status: "preorder",
    badge: "Pre-Order",
    fieldStatus: "Rhizomes growing underground 🌱",
    image: "/images/turmeric.png",
    color: "#C9930A",
    bgColor: "#F5DFA0",
    emoji: "🟡",
    preorderCount: 47,
    category: "Root Spice",
    benefits: ["3× curcumin vs commercial", "Stone-ground on order", "Wild highland variety"],
    whatsappMsg:
      "Namaskaram! I'd like to pre-order Wild Turmeric (Kasturi Manjal) from Nelpadam Farms. Please share harvest details.",
  },
  {
    slug: "coconut",
    name: "Coconut Oil",
    localName: "Velichenna",
    tagline: "Cold-Pressed from Our Own Grove",
    story:
      "Two hundred coconut palms line the edges of Govindan's land. The oil is extracted using a wooden press his father built — no heat, no refinement. Just the honest oil of the land.",
    shortDesc: "Cold-pressed virgin coconut oil from Govindan's 200-palm grove. Extracted on a wooden press.",
    description:
      "The coconuts are harvested, grated, and pressed the same day using a traditional wooden press (chekku). No heat is applied — the oil simply flows out under mechanical pressure. It is a cloudy, aromatic oil that sets solid in cold weather. No additives, no bleaching, no deodorising.",
    price: "₹550",
    unit: "1 litre",
    variants: [
      { label: "500ml", price: "₹295" },
      { label: "1 litre", price: "₹550" },
      { label: "2 litres", price: "₹1,050" },
    ],
    harvestMonths: 2,
    harvestLabel: "Year-round (next batch Aug 2025)",
    status: "preorder",
    badge: "Pre-Order",
    fieldStatus: "Palms being harvested weekly 🥥",
    image: "/images/coconut.png",
    color: "#A0522D",
    bgColor: "#F5E6D3",
    emoji: "🥥",
    preorderCount: 89,
    category: "Cooking Oil",
    benefits: ["Cold-pressed, unrefined", "From own grove", "No additives ever"],
    whatsappMsg:
      "Namaskaram! I'd like to pre-order Cold-Pressed Coconut Oil (Velichenna) from Nelpadam Farms. Please share batch availability.",
  },
];

export const impactStats = [
  { number: "221", label: "Families pre-ordered this season" },
  { number: "3.5", label: "Acres farmed by one family" },
  { number: "₹0", label: "Spent on pesticides — ever" },
  { number: "48", label: "Years Govindan has farmed this land" },
];

export const kanyammaProducts = [
  {
    slug: "mundirikothu",
    name: "Mundirikothu",
    localName: "முந்திரிக்கொத்து",
    tagline: "Crisp Rice Flour Delight",
    shortDesc: "Diamond-shaped rice flour crisps, shallow-fried to golden perfection. A Kanyakumari tea-time favourite.",
    description:
      "Made from finely ground rice flour, seasoned with cumin and asafoetida, rolled thin and cut into diamond shapes before being shallow-fried to a crisp golden brown. Kanyamma prepares them in small batches to ensure every piece is perfectly crunchy.",
    price: "₹120",
    unit: "250g pack",
    variants: [
      { label: "250g", price: "₹120" },
      { label: "500g", price: "₹220" },
    ],
    status: "available",
    badge: "Made to Order",
    image: "/images/mundirikothu.png",
    color: "#8B1A1A",
    bgColor: "#F5E0E0",
    emoji: "🥟",
    preorderCount: 28,
    category: "Savory Snack",
    benefits: ["All-natural ingredients", "No preservatives", "Stays fresh for weeks"],
    whatsappMsg:
      "Vanakkam Kanyamma! I'd like to order Mundirikothu from Nelpadam Farms. Please share availability and pricing.",
  },
  {
    slug: "athirasa",
    name: "Athirasa",
    localName: "அதிரசம்",
    tagline: "Traditional Jaggery Pancake",
    shortDesc: "Deep-fried jaggery-and-rice pancake, a festival essential in every Tamil home.",
    description:
      "Athirasa is made from a fermented batter of rice and jaggery, spiced with cardamom and dry ginger, then deep-fried into thick, chewy pancakes with a caramelised crust. Kanyamma's version uses palm jaggery for a deeper, earthier sweetness.",
    price: "₹150",
    unit: "6 pieces",
    variants: [
      { label: "6 pieces", price: "₹150" },
      { label: "12 pieces", price: "₹280" },
    ],
    status: "available",
    badge: "Festival Special",
    image: "/images/athirasa.png",
    color: "#C89B3C",
    bgColor: "#F5EAC8",
    emoji: "🫓",
    preorderCount: 43,
    category: "Sweet",
    benefits: ["Palm jaggery sweetness", "Fermented naturally", "No refined sugar"],
    whatsappMsg:
      "Vanakkam Kanyamma! I'd like to order Athirasa from Nelpadam Farms. Please share availability and pricing.",
  },
  {
    slug: "kanyakumari-mixture",
    name: "Kanyakumari Mixture",
    localName: "கன்னியாகுமரி மிக்சர்",
    tagline: "Spicy Temple-Town Mix",
    shortDesc: "A crunchy medley of fried gram, peanuts, curry leaves and spices — a Kanyakumari specialty.",
    description:
      "This mixture is Kanyamma's most-loved savoury snack. Roasted gram, peanuts, broken cashews, and fresh curry leaves are tempered with mustard, red chilli, and hing, then tossed with thin sev. Every batch is made fresh and packed while still warm.",
    price: "₹100",
    unit: "200g pack",
    variants: [
      { label: "200g", price: "₹100" },
      { label: "500g", price: "₹220" },
    ],
    status: "available",
    badge: "Popular",
    image: "/images/kanyakumari-mixture.png",
    color: "#B83030",
    bgColor: "#F5E0E0",
    emoji: "🥜",
    preorderCount: 36,
    category: "Savory Snack",
    benefits: ["Kanyakumari family recipe", "Hand-roasted spices", "No MSG"],
    whatsappMsg:
      "Vanakkam Kanyamma! I'd like to order Kanyakumari Mixture from Nelpadam Farms. Please share availability and pricing.",
  },
  {
    slug: "pal-boli",
    name: "Pal Boli",
    localName: "பால் போளி",
    tagline: "Sweet Milk Dumplings",
    shortDesc: "Soft, stuffed puris soaked in sweetened reduced milk — a festive indulgence.",
    description:
      "Pal Boli is a traditional Tamil sweet where soft wheat flour puris are stuffed with a lentil-and-jaggery filling, then soaked in thick, sweetened reduced milk infused with cardamom and saffron. Kanyamma makes them fresh for special orders — each bite is pure comfort.",
    price: "₹180",
    unit: "4 pieces",
    variants: [
      { label: "4 pieces", price: "₹180" },
      { label: "8 pieces", price: "₹340" },
    ],
    status: "available",
    badge: "Premium",
    image: "/images/pal-boli.png",
    color: "#C89B3C",
    bgColor: "#FDF0D6",
    emoji: "🥞",
    preorderCount: 19,
    category: "Sweet",
    benefits: ["Saffron-infused milk", "Hand-stuffed filling", "Made on order only"],
    whatsappMsg:
      "Vanakkam Kanyamma! I'd like to order Pal Boli from Nelpadam Farms. Please share availability and pricing.",
  },
];

export const kanyamma = {
  name: "Kanyamma",
  detail: "Home-producer of traditional sweets · Kanyakumari, Tamil Nadu",
  village: "Kanyakumari Dstct, Tamil Nadu",
  quote:
    "My mother taught me these recipes. Now the whole village comes to me for athirasa during festivals. I never thought city people would also want to taste them.",
  emoji: "🍬",
};

export const producers = [
  { id: "govindan", name: "Govindan Nair", type: "Farmer", village: "Kottarakkara, Kerala", whatsApp: "918301061753", displayPhone: "+91 83010 61753" },
  { id: "kanyamma", name: "Kanyamma", type: "Sweet-maker", village: "Kanyakumari, Tamil Nadu", whatsApp: "918301061753", displayPhone: "+91 83010 61753" },
];

export const kanyammaChapters = [
  {
    number: "01",
    title: "The Tradition",
    body: "In a small home in Kanyakumari district, Kanyamma continues a legacy of traditional sweet-making passed down through generations. Her kitchen is filled with the aroma of jaggery, coconut, and rice flour — the same ingredients her mother and grandmother used.",
  },
  {
    number: "02",
    title: "The Specialties",
    body: "Her mundirikothu — crisp, diamond-shaped rice flour crisps — and athirasa, a deep-fried jaggery pancake, are village favourites. Every batch is made by hand, with no preservatives or machines. Just time-honoured recipes and fresh ingredients.",
  },
  {
    number: "03",
    title: "Her Kitchen, Her Business",
    body: "What started as making sweets for family festivals has grown into a small home enterprise. Kanyamma now prepares extra batches for her neighbours and nearby villagers who place orders for weddings, festivals, and special occasions.",
  },
  {
    number: "04",
    title: "How Nelpadam Helps",
    body: "Nelpadam Farms showcases her story and connects her sweets with customers who value authentic, homemade traditional foods. Every order we bring her means one more reason to keep these recipes alive — and one more source of income for her family.",
  },
];

export const chapters = [
  {
    number: "01",
    title: "The Land",
    body: "Kottarakkara, Kollam district. A 3.5-acre plot of red-soil land that has been in Govindan's family since 1948. Three generations have farmed here. The fourth is watching.",
  },
  {
    number: "02",
    title: "The Crops",
    body: "Pepper vines climb the coconut palms. Tamarind trees cast shade over the turmeric beds. Everything grows together — the way nature intended, not the way a spreadsheet would plan.",
  },
  {
    number: "03",
    title: "The Problem",
    body: "Middlemen buy Govindan's harvest at ₹180/kg. They sell it in your city for ₹800/kg. Govindan gets 22% of what you pay. Nelpadam exists to change that number.",
  },
  {
    number: "04",
    title: "Your Role",
    body: "When you pre-order, Govindan knows exactly how much to harvest and pack. No waste. No middlemen. You get fresher spices. He gets fair pay. Both win.",
  },
];
