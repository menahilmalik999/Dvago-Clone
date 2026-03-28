// Product Data - Comprehensive list of 50+ products
const allProducts = [
  // Medicine Category
  {
    id: 1,
    name: "Panadol Extra Tablets 24s",
    price: 156.0,
    originalPrice: 165.0,
    category: "Medicine",
    brand: "GSK",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    description: "Fast relief from headaches, fever, and body aches. Contains paracetamol and caffeine.",
    rating: 4.5,
    inStock: true,
    slug: "panadol-extra-tablets-24s"
  },
  {
    id: 2,
    name: "Brufen 400mg Tablets 20s",
    price: 89.0,
    category: "Medicine",
    brand: "Abbott",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
    description: "Anti-inflammatory pain reliever for muscle pain, arthritis, and fever.",
    rating: 4.3,
    inStock: true,
    slug: "brufen-400mg-tablets-20s"
  },
  {
    id: 3,
    name: "Augmentin 625mg Tablets 14s",
    price: 425.0,
    originalPrice: 450.0,
    category: "Medicine",
    brand: "GSK",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
    description: "Antibiotic for bacterial infections. Prescription required.",
    rating: 4.7,
    inStock: true,
    slug: "augmentin-625mg-tablets-14s"
  },
  {
    id: 4,
    name: "Gaviscon Advance Liquid 120ml",
    price: 361.0,
    originalPrice: 380.0,
    category: "Medicine",
    brand: "Reckitt",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    description: "Relief from heartburn and acid reflux. Mint flavor.",
    rating: 4.6,
    inStock: true,
    slug: "gaviscon-advance-liquid-120ml"
  },
  {
    id: 5,
    name: "Disprin Tablets 24s",
    price: 95.0,
    category: "Medicine",
    brand: "Reckitt",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
    description: "Fast dissolving aspirin for quick pain relief.",
    rating: 4.2,
    inStock: true,
    slug: "disprin-tablets-24s"
  },

  // Nutrition & Supplements
  {
    id: 6,
    name: "Glucerna Milk Powder Vanilla 400g",
    price: 4495.95,
    originalPrice: 4635.0,
    category: "Nutrition & Supplements",
    brand: "Abbott",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop",
    description: "Specialized nutrition for diabetics with slow-release carbohydrates.",
    rating: 4.8,
    inStock: true,
    slug: "glucerna-milk-powder-vanilla-400g"
  },
  {
    id: 7,
    name: "Ensure Milk Powder Vanilla 850g",
    price: 6038.25,
    originalPrice: 6225.0,
    category: "Nutrition & Supplements",
    brand: "Abbott",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop",
    description: "Complete balanced nutrition with 32 nutrients for adults.",
    rating: 4.9,
    inStock: true,
    slug: "ensure-milk-powder-vanilla-850g"
  },
  {
    id: 8,
    name: "Centrum Adults Multivitamin Tablets 130s",
    price: 1530.0,
    originalPrice: 1800.0,
    category: "Nutrition & Supplements",
    brand: "GSK",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop",
    description: "Complete multivitamin with 24 essential nutrients for daily health.",
    rating: 4.7,
    inStock: true,
    slug: "centrum-adults-multivitamin-130s"
  },
  {
    id: 9,
    name: "Redoxon Triple Action Effervescent Orange 15s",
    price: 850.0,
    category: "Nutrition & Supplements",
    brand: "Bayer",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop",
    description: "Vitamin C, D, and Zinc for immune support. Orange flavor.",
    rating: 4.6,
    inStock: true,
    slug: "redoxon-triple-action-orange-15s"
  },
  {
    id: 10,
    name: "Omega-3 Fish Oil Capsules 60s",
    price: 1250.0,
    originalPrice: 1400.0,
    category: "Nutrition & Supplements",
    brand: "Nature's Bounty",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop",
    description: "Heart and brain health support with EPA and DHA.",
    rating: 4.5,
    inStock: true,
    slug: "omega-3-fish-oil-60s"
  },

  // Personal Care
  {
    id: 11,
    name: "Eventone-C Cream 30g",
    price: 1947.5,
    originalPrice: 2050.0,
    category: "Personal Care",
    brand: "Pierre Fabre",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    description: "Skin brightening cream with Vitamin C for even skin tone.",
    rating: 4.4,
    inStock: true,
    slug: "eventone-c-cream-30g"
  },
  {
    id: 12,
    name: "La Roche-Posay Effaclar Gel 50ml",
    price: 2500.0,
    category: "Personal Care",
    brand: "La Roche-Posay",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    description: "Purifying foaming gel cleanser for oily sensitive skin.",
    rating: 4.8,
    inStock: true,
    slug: "la-roche-posay-effaclar-gel-50ml"
  },
  {
    id: 13,
    name: "Cetaphil Gentle Skin Cleanser 125ml",
    price: 1850.0,
    originalPrice: 1950.0,
    category: "Personal Care",
    brand: "Galderma",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    description: "Gentle cleanser for all skin types, soap-free formula.",
    rating: 4.7,
    inStock: true,
    slug: "cetaphil-gentle-cleanser-125ml"
  },
  {
    id: 14,
    name: "The Ordinary AHA 30% + BHA 2% Peeling Solution 30ml",
    price: 4200.0,
    category: "Personal Care",
    brand: "The Ordinary",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    description: "Exfoliating facial treatment for improved skin texture.",
    rating: 4.6,
    inStock: true,
    slug: "the-ordinary-peeling-solution-30ml"
  },
  {
    id: 15,
    name: "Neutrogena Hydro Boost Water Gel 50ml",
    price: 2350.0,
    category: "Personal Care",
    brand: "Neutrogena",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    description: "Oil-free moisturizer with hyaluronic acid for hydrated skin.",
    rating: 4.5,
    inStock: true,
    slug: "neutrogena-hydro-boost-50ml"
  },

  // Baby & Mother Care
  {
    id: 16,
    name: "Senior Adult Pull Up Size XL 10pcs",
    price: 1576.0,
    category: "Baby & Mother Care",
    brand: "Senior",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
    description: "Adult diapers with superior absorbency and comfort.",
    rating: 4.3,
    inStock: true,
    slug: "senior-adult-pull-up-xl-10pcs"
  },
  {
    id: 17,
    name: "Pampers Baby Dry Diapers Size 4 (46pcs)",
    price: 2450.0,
    originalPrice: 2600.0,
    category: "Baby & Mother Care",
    brand: "Pampers",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
    description: "Up to 12 hours of overnight protection for babies.",
    rating: 4.8,
    inStock: true,
    slug: "pampers-baby-dry-size4-46pcs"
  },
  {
    id: 18,
    name: "Johnson's Baby Shampoo 500ml",
    price: 895.0,
    category: "Baby & Mother Care",
    brand: "Johnson & Johnson",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
    description: "No more tears formula, gentle on baby's eyes and hair.",
    rating: 4.6,
    inStock: true,
    slug: "johnsons-baby-shampoo-500ml"
  },
  {
    id: 19,
    name: "Meiji Big Milk Powder 900g",
    price: 5039.15,
    originalPrice: 5195.0,
    category: "Baby & Mother Care",
    brand: "Meiji",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop",
    description: "Growing-up formula for children 1-3 years with DHA.",
    rating: 4.7,
    inStock: true,
    slug: "meiji-big-milk-powder-900g"
  },
  {
    id: 20,
    name: "Pigeon Baby Wipes 80pcs",
    price: 425.0,
    category: "Baby & Mother Care",
    brand: "Pigeon",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
    description: "Gentle baby wipes with chamomile extract, alcohol-free.",
    rating: 4.5,
    inStock: true,
    slug: "pigeon-baby-wipes-80pcs"
  },

  // Devices & Support
  {
    id: 21,
    name: "Omron Blood Pressure Monitor HEM-7120",
    price: 4850.0,
    originalPrice: 5200.0,
    category: "Devices & Support",
    brand: "Omron",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop",
    description: "Automatic digital blood pressure monitor with IntelliSense.",
    rating: 4.8,
    inStock: true,
    slug: "omron-bp-monitor-hem7120"
  },
  {
    id: 22,
    name: "Accu-Chek Active Glucometer Kit",
    price: 2150.0,
    category: "Devices & Support",
    brand: "Roche",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop",
    description: "Blood glucose monitoring system with 10 test strips.",
    rating: 4.7,
    inStock: true,
    slug: "accu-chek-active-glucometer"
  },
  {
    id: 23,
    name: "Digital Thermometer",
    price: 350.0,
    originalPrice: 400.0,
    category: "Devices & Support",
    brand: "Beurer",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop",
    description: "Fast and accurate digital thermometer with fever alarm.",
    rating: 4.4,
    inStock: true,
    slug: "digital-thermometer"
  },
  {
    id: 24,
    name: "Philips Nebulizer InnoSpire Essence",
    price: 8500.0,
    category: "Devices & Support",
    brand: "Philips",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop",
    description: "Compressor nebulizer for respiratory treatments.",
    rating: 4.6,
    inStock: true,
    slug: "philips-nebulizer-innospire"
  },
  {
    id: 25,
    name: "Pulse Oximeter Fingertip",
    price: 1850.0,
    originalPrice: 2100.0,
    category: "Devices & Support",
    brand: "Beurer",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop",
    description: "Measures blood oxygen saturation and pulse rate.",
    rating: 4.5,
    inStock: true,
    slug: "pulse-oximeter-fingertip"
  },

  // Foods & Beverages
  {
    id: 26,
    name: "Horlicks Health Drink 500g",
    price: 725.0,
    category: "Foods & Beverages",
    brand: "GSK",
    image: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&h=400&fit=crop",
    description: "Malted health drink with vitamins and minerals.",
    rating: 4.4,
    inStock: true,
    slug: "horlicks-health-drink-500g"
  },
  {
    id: 27,
    name: "Boost Health Drink Chocolate 500g",
    price: 1450.0,
    originalPrice: 1550.0,
    category: "Foods & Beverages",
    brand: "Nestle",
    image: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&h=400&fit=crop",
    description: "Nutritional drink with protein and 26 vitamins & minerals.",
    rating: 4.6,
    inStock: true,
    slug: "boost-health-drink-chocolate-500g"
  },
  {
    id: 28,
    name: "Green Tea Bags 25s",
    price: 450.0,
    category: "Foods & Beverages",
    brand: "Lipton",
    image: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&h=400&fit=crop",
    description: "Antioxidant-rich green tea for daily wellness.",
    rating: 4.3,
    inStock: true,
    slug: "green-tea-bags-25s"
  },
  {
    id: 29,
    name: "Organic Honey 500g",
    price: 1250.0,
    category: "Foods & Beverages",
    brand: "Hemani",
    image: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&h=400&fit=crop",
    description: "Pure organic honey with natural enzymes and antioxidants.",
    rating: 4.7,
    inStock: true,
    slug: "organic-honey-500g"
  },
  {
    id: 30,
    name: "Sugar-Free Sweetener 100 Tablets",
    price: 285.0,
    originalPrice: 320.0,
    category: "Foods & Beverages",
    brand: "Equal",
    image: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&h=400&fit=crop",
    description: "Zero-calorie sweetener tablets for diabetics.",
    rating: 4.2,
    inStock: true,
    slug: "sugar-free-sweetener-100tabs"
  },

  // OTC And Health Need
  {
    id: 31,
    name: "Vicks VapoRub 50g",
    price: 285.0,
    category: "OTC And Health Need",
    brand: "P&G",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    description: "Topical ointment for cough and congestion relief.",
    rating: 4.6,
    inStock: true,
    slug: "vicks-vaporub-50g"
  },
  {
    id: 32,
    name: "Strepsils Honey & Lemon Lozenges 24s",
    price: 195.0,
    originalPrice: 210.0,
    category: "OTC And Health Need",
    brand: "Reckitt",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    description: "Soothing lozenges for sore throat relief.",
    rating: 4.5,
    inStock: true,
    slug: "strepsils-honey-lemon-24s"
  },
  {
    id: 33,
    name: "Band-Aid Adhesive Bandages 20s",
    price: 175.0,
    category: "OTC And Health Need",
    brand: "Johnson & Johnson",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=400&fit=crop",
    description: "Flexible fabric bandages for minor cuts and scrapes.",
    rating: 4.4,
    inStock: true,
    slug: "band-aid-bandages-20s"
  },
  {
    id: 34,
    name: "Dettol Antiseptic Liquid 250ml",
    price: 425.0,
    category: "OTC And Health Need",
    brand: "Reckitt",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=400&fit=crop",
    description: "Antiseptic disinfectant for wound cleaning and protection.",
    rating: 4.7,
    inStock: true,
    slug: "dettol-antiseptic-250ml"
  },
  {
    id: 35,
    name: "Cotton Wool 100g",
    price: 125.0,
    originalPrice: 150.0,
    category: "OTC And Health Need",
    brand: "Johnson & Johnson",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=400&fit=crop",
    description: "Absorbent cotton wool for medical and cosmetic use.",
    rating: 4.3,
    inStock: true,
    slug: "cotton-wool-100g"
  },

  // Additional Medicine Products
  {
    id: 36,
    name: "Calpol Suspension 120ml",
    price: 165.0,
    category: "Medicine",
    brand: "GSK",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    description: "Paracetamol suspension for children's fever and pain.",
    rating: 4.8,
    inStock: true,
    slug: "calpol-suspension-120ml"
  },
  {
    id: 37,
    name: "Flagyl 400mg Tablets 15s",
    price: 195.0,
    originalPrice: 220.0,
    category: "Medicine",
    brand: "Sanofi",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
    description: "Antibiotic for bacterial and parasitic infections.",
    rating: 4.4,
    inStock: true,
    slug: "flagyl-400mg-15s"
  },
  {
    id: 38,
    name: "Risek 20mg Capsules 14s",
    price: 285.0,
    category: "Medicine",
    brand: "Getz Pharma",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
    description: "Proton pump inhibitor for acid reflux and ulcers.",
    rating: 4.6,
    inStock: true,
    slug: "risek-20mg-14s"
  },

  // Additional Personal Care
  {
    id: 39,
    name: "Bonanza Code Green 30ml",
    price: 1043.0,
    originalPrice: 1490.0,
    category: "Personal Care",
    brand: "Bonanza",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    description: "Premium men's fragrance with fresh woody notes.",
    rating: 4.5,
    inStock: true,
    slug: "bonanza-code-green-30ml"
  },
  {
    id: 40,
    name: "Bonanza Addiction 100ml",
    price: 3992.0,
    originalPrice: 4990.0,
    category: "Personal Care",
    brand: "Bonanza",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    description: "Luxurious oriental fragrance for men.",
    rating: 4.7,
    inStock: true,
    slug: "bonanza-addiction-100ml"
  },
  {
    id: 41,
    name: "Skin Aqua Clear White SPF-50 Cream 25g",
    price: 2055.56,
    category: "Personal Care",
    brand: "Rohto",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    description: "Sunscreen with whitening effect and high UV protection.",
    rating: 4.6,
    inStock: true,
    slug: "skin-aqua-spf50-25g"
  },
  {
    id: 42,
    name: "Dove Body Wash 250ml",
    price: 895.0,
    originalPrice: 950.0,
    category: "Personal Care",
    brand: "Unilever",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    description: "Moisturizing body wash with ¼ moisturizing cream.",
    rating: 4.5,
    inStock: true,
    slug: "dove-body-wash-250ml"
  },

  // Additional Nutrition
  {
    id: 43,
    name: "Livity Milk Powder Strawberry 400g",
    price: 2999.99,
    category: "Nutrition & Supplements",
    brand: "Ferozsons",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop",
    description: "Nutritional supplement for adults with strawberry flavor.",
    rating: 4.4,
    inStock: true,
    slug: "livity-strawberry-400g"
  },
  {
    id: 44,
    name: "Vitamin D3 1000 IU Tablets 30s",
    price: 650.0,
    category: "Nutrition & Supplements",
    brand: "Nature's Bounty",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop",
    description: "Bone health and immune support supplement.",
    rating: 4.6,
    inStock: true,
    slug: "vitamin-d3-1000iu-30s"
  },
  {
    id: 45,
    name: "Calcium + Vitamin D Tablets 60s",
    price: 850.0,
    originalPrice: 950.0,
    category: "Nutrition & Supplements",
    brand: "Centrum",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop",
    description: "Supports strong bones and teeth with calcium and vitamin D.",
    rating: 4.5,
    inStock: true,
    slug: "calcium-vitamin-d-60s"
  },

  // Additional Baby Care
  {
    id: 46,
    name: "Huggies Dry Diapers Size 3 (54pcs)",
    price: 2150.0,
    category: "Baby & Mother Care",
    brand: "Kimberly-Clark",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
    description: "Soft and absorbent diapers with leak lock system.",
    rating: 4.7,
    inStock: true,
    slug: "huggies-dry-size3-54pcs"
  },
  {
    id: 47,
    name: "Sebamed Baby Lotion 200ml",
    price: 1650.0,
    originalPrice: 1750.0,
    category: "Baby & Mother Care",
    brand: "Sebamed",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
    description: "pH 5.5 baby lotion for sensitive skin protection.",
    rating: 4.8,
    inStock: true,
    slug: "sebamed-baby-lotion-200ml"
  },

  // Additional Devices
  {
    id: 48,
    name: "Infrared Forehead Thermometer",
    price: 2850.0,
    category: "Devices & Support",
    brand: "Beurer",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop",
    description: "Non-contact infrared thermometer for instant readings.",
    rating: 4.7,
    inStock: true,
    slug: "infrared-forehead-thermometer"
  },
  {
    id: 49,
    name: "Wheelchair Foldable Standard",
    price: 18500.0,
    originalPrice: 20000.0,
    category: "Devices & Support",
    brand: "Karma",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop",
    description: "Lightweight foldable wheelchair with comfortable seating.",
    rating: 4.6,
    inStock: true,
    slug: "wheelchair-foldable-standard"
  },

  // Additional OTC
  {
    id: 50,
    name: "Savlon Antiseptic Cream 60g",
    price: 195.0,
    category: "OTC And Health Need",
    brand: "Johnson & Johnson",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=400&fit=crop",
    description: "Antiseptic cream for cuts, grazes, and minor burns.",
    rating: 4.5,
    inStock: true,
    slug: "savlon-antiseptic-cream-60g"
  },
  {
    id: 51,
    name: "Face Masks Surgical 50pcs",
    price: 450.0,
    originalPrice: 500.0,
    category: "OTC And Health Need",
    brand: "3M",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=400&fit=crop",
    description: "3-ply disposable face masks for daily protection.",
    rating: 4.4,
    inStock: true,
    slug: "face-masks-surgical-50pcs"
  },
  {
    id: 52,
    name: "Hand Sanitizer 500ml",
    price: 395.0,
    category: "OTC And Health Need",
    brand: "Dettol",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=400&fit=crop",
    description: "Alcohol-based hand sanitizer kills 99.9% germs.",
    rating: 4.6,
    inStock: true,
    slug: "hand-sanitizer-500ml"
  },

  // Additional Foods & Beverages
  {
    id: 53,
    name: "Protein Powder Chocolate 1kg",
    price: 4500.0,
    category: "Foods & Beverages",
    brand: "Optimum Nutrition",
    image: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&h=400&fit=crop",
    description: "Whey protein isolate for muscle building and recovery.",
    rating: 4.8,
    inStock: true,
    slug: "protein-powder-chocolate-1kg"
  },
  {
    id: 54,
    name: "Apple Cider Vinegar 500ml",
    price: 850.0,
    originalPrice: 950.0,
    category: "Foods & Beverages",
    brand: "Hemani",
    image: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&h=400&fit=crop",
    description: "Organic apple cider vinegar with mother for wellness.",
    rating: 4.5,
    inStock: true,
    slug: "apple-cider-vinegar-500ml"
  },
  {
    id: 55,
    name: "Herbal Tea Chamomile 20 Bags",
    price: 495.0,
    category: "Foods & Beverages",
    brand: "Twinings",
    image: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&h=400&fit=crop",
    description: "Calming chamomile tea for relaxation and better sleep.",
    rating: 4.4,
    inStock: true,
    slug: "herbal-tea-chamomile-20bags"
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { allProducts };
}
