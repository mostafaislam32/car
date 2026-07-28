// Expanded static database of vehicles, categories, and 10 premium accessories catalog for the GOLDEN application
// Tailored to the real Golden Car Stores (Cairo, Est. 1990) specialized accessories line.

export const vehiclesData = {
  makes: ["Toyota", "Hyundai", "Kia", "Mercedes", "BMW"],
  models: {
    Toyota: ["Corolla", "Fortuner", "C-HR"],
    Hyundai: ["Tucson", "Elantra", "Creta"],
    Kia: ["Sportage", "Cerato", "Seltos"],
    Mercedes: ["C-Class", "E-Class", "GLC"],
    BMW: ["3 Series", "5 Series", "X5", "M3"]
  },
  years: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"],
  engines: {
    "Toyota-Corolla": ["1.6L Active CVT (120 HP)", "1.8L Hybrid Synergy (121 HP)"],
    "Toyota-Fortuner": ["2.7L Dual VVT-i (163 HP)", "4.0L V6 Dual VVT-i (235 HP)"],
    "Toyota-C-HR": ["1.2L Turbo CVT (115 HP)", "1.8L Hybrid Synergy (121 HP)"],
    "Hyundai-Tucson": ["1.6L T-GDI 7-Speed DCT (180 HP)", "2.0L MPI 6-Speed Auto (156 HP)"],
    "Hyundai-Elantra": ["1.6L MPI 6-Speed Auto (127 HP)", "2.0L MPI 6-Speed Auto (159 HP)"],
    "Hyundai-Creta": ["1.5L MPI CVT (115 HP)"],
    "Kia-Sportage": ["1.6L T-GDI 7-Speed DCT (180 HP)", "2.0L MPI 6-Speed Auto (156 HP)"],
    "Kia-Cerato": ["1.6L MPI 6-Speed Auto (128 HP)"],
    "Kia-Seltos": ["1.4L T-GDI 7-Speed DCT (140 HP)"],
    "Mercedes-C-Class": ["C180 1.5L MHEV 9G-Tronic (170 HP)", "C200 1.5L MHEV 9G-Tronic (204 HP)"],
    "Mercedes-E-Class": ["E200 2.0L Mild Hybrid (204 HP)", "E300 2.0L Mild Hybrid (258 HP)"],
    "Mercedes-GLC": ["GLC200 2.0L 9G-Tronic (204 HP)", "GLC300 2.0L 9G-Tronic (258 HP)"],
    "BMW-3 Series": ["318i 2.0L TwinPower Turbo (156 HP)", "320i 2.0L TwinPower Turbo (184 HP)"],
    "BMW-5 Series": ["520i 2.0L TwinPower Turbo (184 HP)", "530i 2.0L TwinPower Turbo (252 HP)"],
    "BMW-X5": ["xDrive40i 3.0L B58 I6 (375 HP)", "xDrive50e 3.0L Plug-in Hybrid (483 HP)"],
    "BMW-M3": ["3.0L Competition Twin-Turbo I6 (503 HP)"]
  }
};

export const categoriesData = [
  { id: "all", name: "All Accessories", icon: "Sliders" },
  { id: "lighting", name: "Premium Lighting", icon: "Zap" },
  { id: "screens", name: "Android Screens", icon: "Activity" },
  { id: "seats", name: "Seats & Covers", icon: "Sliders" },
  { id: "floormats", name: "Luxury Floor Mats", icon: "Disc" },
  { id: "exterior", name: "Exterior Styling", icon: "Wind" }
];

export const productsData = [
  // ==================== PREMIUM LIGHTING ====================
  {
    id: "gd-lgt-laser-01",
    name: "GOLDEN Premium Laser LED Projector Lenses (3.0\")",
    brand: "GOLDEN Tuning",
    category: "lighting",
    price: 240.00,
    rating: 4.9,
    reviewsCount: 124,
    sku: "GD-LGT-LASER-30",
    image: "brakes.jpg",
    description: "Upgrade your vehicle lighting to motorsport standards. The GOLDEN Laser LED projector lenses provide unparalleled road visibility with a sharp cut-off line. Features high-output dual LED chips combined with a laser auxiliary high-beam, reaching over 600 meters.",
    specs: {
      "Light Output": "Low Beam: 6000LM | High Beam: 9000LM",
      "Color Temperature": "5500K - Cool Diamond White",
      "Laser Range": "Up to 600 meters",
      "Cooling System": "Dual ball-bearing silent fan with copper heat pipes",
      "Life Span": "30,000+ Hours",
      "Fitment Size": "3.0-inch universal thread mounting"
    },
    reviews: [
      { id: 1, user: "Ahmed T.", rating: 5, date: "2026-06-12", comment: "The brightness is insane! High beam reaches incredibly far on the highway." }
    ],
    compatibility: ["Toyota-Corolla", "Hyundai-Tucson", "Hyundai-Elantra", "Kia-Sportage", "Kia-Cerato", "Mercedes-C-Class", "Mercedes-E-Class", "BMW-3 Series", "BMW-5 Series"]
  },
  {
    id: "gd-lgt-ambient-02",
    name: "GOLDEN Dynamic Symphony App-Controlled Ambient Lighting",
    brand: "GOLDEN Tuning",
    category: "lighting",
    price: 130.00,
    rating: 4.8,
    reviewsCount: 96,
    sku: "GD-LGT-AMBIENT-SYM",
    image: "ignition_coils.jpg",
    description: "Bring your car cabin to life. The GOLDEN Symphony Ambient Light kit provides multi-color dynamic LED strips that integrate seamlessly with your interior trim. Controlled via a mobile app or physical button, featuring music sync, gradient flow, and brightness control.",
    specs: {
      "Strips Included": "4 door panels, 4 footwell lights, 2 dashboard lines",
      "Control Interface": "Bluetooth App (iOS & Android) & physical button",
      "Color Depth": "16 Million Colors RGB",
      "Material": "Acrylic optical fiber line (highly flexible and thin)",
      "Operating Voltage": "12V DC"
    },
    reviews: [
      { id: 1, user: "Sherif G.", rating: 5, date: "2026-05-18", comment: "Super clean installation, looks like a factory ambient lighting setup from a 2026 model." }
    ],
    compatibility: ["Toyota-Corolla", "Toyota-Fortuner", "Toyota-C-HR", "Hyundai-Tucson", "Hyundai-Elantra", "Hyundai-Creta", "Kia-Sportage", "Kia-Cerato", "Kia-Seltos", "Mercedes-C-Class", "Mercedes-E-Class", "Mercedes-GLC", "BMW-3 Series", "BMW-5 Series", "BMW-X5"]
  },
  {
    id: "gd-lgt-ledbulbs-03",
    name: "GOLDEN Hyper-LED Headlight Bulb Kit (H7/H4/H11)",
    brand: "GOLDEN Tuning",
    category: "lighting",
    price: 65.00,
    rating: 4.7,
    reviewsCount: 85,
    sku: "GD-LGT-H7LED",
    image: "spark_plugs.jpg",
    description: "Direct plug-and-play LED replacement bulbs for factory halogen headlights. Features an ultra-slim copper board matching original filament locations for perfect beam pattern alignment without blinding oncoming traffic.",
    specs: {
      "Socket Types": "Available in H7, H4, H11, HB3/9005, HB4/9006",
      "Power Output": "110W per pair",
      "Brightness": "18,000 LM per set",
      "Installation": "100% plug-and-play direct replacement",
      "Canbus Decoder": "Integrated anti-flicker and error-free chips"
    },
    reviews: [
      { id: 1, user: "Mustafa H.", rating: 4, date: "2026-04-30", comment: "Very good fit on my Corolla. The light is super white and crisp." }
    ],
    compatibility: ["Toyota-Corolla", "Toyota-Fortuner", "Toyota-C-HR", "Hyundai-Tucson", "Hyundai-Elantra", "Hyundai-Creta", "Kia-Sportage", "Kia-Cerato", "Kia-Seltos"]
  },

  // ==================== ANDROID SCREENS ====================
  {
    id: "gd-scr-octa-04",
    name: "GOLDEN Smart Android Screen 10.25\" (4GB / 64GB)",
    brand: "GOLDEN Tech",
    category: "screens",
    price: 390.00,
    rating: 4.9,
    reviewsCount: 142,
    sku: "GD-SCR-OCTA-10",
    image: "intercooler.jpg",
    description: "Unleash high-end infotainment features in your dashboard. High-resolution IPS capacitive touch screen running Android 12. Supports wireless Apple CarPlay and Android Auto. Fully integrates with original steering wheel controls, factory cameras, and radar sensors.",
    specs: {
      "Processor": "Unisoc Octa-Core 2.0GHz 64-Bit",
      "Memory": "4GB RAM + 64GB High-Speed Storage",
      "Display": "10.25-inch IPS Touch Panel (1920x720 HD)",
      "Connectivity": "Wireless CarPlay, Wireless Android Auto, Built-in 4G LTE Slot",
      "Audio DSP": "32-Band Equalizer with premium digital sound amplifier"
    },
    reviews: [
      { id: 1, user: "Youssef M.", rating: 5, date: "2026-06-02", comment: "The screen is lightning fast, and CarPlay connects automatically as soon as I start the engine." }
    ],
    compatibility: ["Toyota-Corolla", "Toyota-Fortuner", "Hyundai-Tucson", "Hyundai-Elantra", "Kia-Sportage", "Kia-Cerato"]
  },
  {
    id: "gd-scr-tesla-05",
    name: "GOLDEN Tesla-Style Vertical Android Screen (6GB / 128GB)",
    brand: "GOLDEN Tech",
    category: "screens",
    price: 480.00,
    rating: 4.8,
    reviewsCount: 64,
    sku: "GD-SCR-TESLA-VERT",
    image: "react.svg",
    description: "The ultimate vertical display configuration. Inspired by luxury EV dashboards, this massive vertical screen replaces standard dash layouts, integrating dual-zone climate controls and complete vehicle settings directly onto the digital screen.",
    specs: {
      "Processor": "Qualcomm Snapdragon Octa-Core",
      "Memory": "6GB RAM + 128GB ROM",
      "Screen Size": "9.7-inch to 12.1-inch depending on model compatibility",
      "Climate Control": "Full digital AC dashboard integration",
      "Navigation": "Dual GPS + Glonass support"
    },
    reviews: [
      { id: 1, user: "Tarek S.", rating: 5, date: "2026-07-10", comment: "Gives a whole new look to my Tucson. Having the map and climate control on a huge display is awesome." }
    ],
    compatibility: ["Toyota-Corolla", "Toyota-Fortuner", "Hyundai-Tucson", "Hyundai-Elantra", "Kia-Sportage"]
  },

  // ==================== SEATS & COVERS ====================
  {
    id: "gd-sea-leather-06",
    name: "GOLDEN Custom Fit Premium Eco-Leather Seat Covers",
    brand: "GOLDEN Interior",
    category: "seats",
    price: 280.00,
    rating: 4.7,
    reviewsCount: 110,
    sku: "GD-SEA-ECO-LTH",
    image: "springs.jpg",
    description: "Protect and upgrade your interior styling. Made from high-durability eco-leather that replicates the soft touch of genuine automotive leather. Airbag compatible and designed specifically for each vehicle model for a tight, original-looking fit.",
    specs: {
      "Material": "Eco-Leather (Waterproof, scratch-resistant)",
      "Airbag Safe": "Yes, custom tear-away stitch panels for side airbags",
      "Package Content": "Full set (Front seats, rear seats, headrests, armrest covers)",
      "Padding": "5mm high-density foam backing for added comfort"
    },
    reviews: [
      { id: 1, user: "Maged K.", rating: 5, date: "2026-06-25", comment: "Fits perfectly. People honestly think I had the entire seats reupholstered in genuine leather." }
    ],
    compatibility: ["Toyota-Corolla", "Toyota-Fortuner", "Toyota-C-HR", "Hyundai-Tucson", "Hyundai-Elantra", "Hyundai-Creta", "Kia-Sportage", "Kia-Cerato", "Kia-Seltos", "Mercedes-C-Class", "Mercedes-E-Class", "Mercedes-GLC", "BMW-3 Series", "BMW-5 Series"]
  },
  {
    id: "gd-sea-alcantara-07",
    name: "GOLDEN Alcantara Sports Steering Wheel Cover Wrap",
    brand: "GOLDEN Interior",
    category: "seats",
    price: 90.00,
    rating: 5.0,
    reviewsCount: 58,
    sku: "GD-SEA-ALC-WRAP",
    image: "sway_bar.jpg",
    description: "Upgrade your steering feel to racetrack levels. Hand-stitched premium Alcantara wrap matching performance car designs. Offers superior grip and a luxurious matte look, complete with racing top-center marker line.",
    specs: {
      "Material": "Premium Italian Alcantara wrap",
      "Top Marker": "Available in Red, Yellow, or Blue racing stripe",
      "Installation": "Requires custom hand stitching (sewing kit included)",
      "Grip Feel": "High-friction matte texture (sweat-resistant)"
    },
    reviews: [
      { id: 1, user: "Karim F.", rating: 5, date: "2026-07-02", comment: "Best upgrade you can get for the cabin. Grip feels amazing, highly recommended." }
    ],
    compatibility: ["Toyota-Corolla", "Toyota-Fortuner", "Toyota-C-HR", "Hyundai-Tucson", "Hyundai-Elantra", "Hyundai-Creta", "Kia-Sportage", "Kia-Cerato", "Kia-Seltos", "Mercedes-C-Class", "Mercedes-E-Class", "Mercedes-GLC", "BMW-3 Series", "BMW-5 Series", "BMW-X5"]
  },

  // ==================== LUXURY FLOOR MATS ====================
  {
    id: "gd-mat-7d-08",
    name: "GOLDEN 7D Luxury Custom Fit Diamond Floor Mats",
    brand: "GOLDEN Interior",
    category: "floormats",
    price: 140.00,
    rating: 4.9,
    reviewsCount: 195,
    sku: "GD-MAT-7D-DLX",
    image: "brake_pads.jpg",
    description: "The gold standard in interior floor protection. 7D design offers 360-degree coverage, creeping up the side walls to prevent dirt and water from reaching original carpets. Features a dual-layer design with a removable coil mat for easy cleaning.",
    specs: {
      "Structure": "Dual layer (Lower diamond-stitched leather mat + Upper coil wire mat)",
      "Coverage": "Deep sidewalls and full rear center hump coverage",
      "Cleaning": "Upper layer detaches in seconds for quick spray wash",
      "Safety": "Anti-slip backing and specialized locking clips to clear pedals"
    },
    reviews: [
      { id: 1, user: "Hossam B.", rating: 5, date: "2026-05-14", comment: "Fits edge to edge. The double layer makes cleaning so much easier." }
    ],
    compatibility: ["Toyota-Corolla", "Toyota-Fortuner", "Toyota-C-HR", "Hyundai-Tucson", "Hyundai-Elantra", "Hyundai-Creta", "Kia-Sportage", "Kia-Cerato", "Kia-Seltos", "Mercedes-C-Class", "Mercedes-E-Class", "Mercedes-GLC", "BMW-3 Series", "BMW-5 Series", "BMW-X5"]
  },

  // ==================== EXTERIOR STYLING ====================
  {
    id: "gd-ext-spoiler-09",
    name: "GOLDEN Performance Gloss Black Trunk Spoiler",
    brand: "GOLDEN Exterior",
    category: "exterior",
    price: 170.00,
    rating: 4.8,
    reviewsCount: 89,
    sku: "GD-EXT-SPOILER-GB",
    image: "exhaust.jpg",
    description: "Enhance your car's profile with an aggressive racing stance. Engineered with high-strength lightweight ABS, finished in deep gloss black piano paint. Easily installs via double-sided automotive adhesive tape without drilling.",
    specs: {
      "Material": "Premium High-Impact ABS Plastic",
      "Finish": "UV-resistant Gloss Black Piano Lacquer",
      "Installation": "No-drill adhesive mounting (3M automotive tape included)",
      "Design Type": "M-Performance / Duckbill hybrid styling"
    },
    reviews: [
      { id: 1, user: "Ramy N.", rating: 5, date: "2026-06-20", comment: "Gives the rear end a much sportier look. Painted finish matches perfect." }
    ],
    compatibility: ["Toyota-Corolla", "Hyundai-Elantra", "Kia-Cerato", "Mercedes-C-Class", "Mercedes-E-Class", "BMW-3 Series", "BMW-5 Series"]
  },
  {
    id: "gd-ext-mirror-10",
    name: "GOLDEN Carbon Fiber M-Style Mirror Covers (Pair)",
    brand: "GOLDEN Exterior",
    category: "exterior",
    price: 110.00,
    rating: 4.9,
    reviewsCount: 73,
    sku: "GD-EXT-MIRROR-CF",
    image: "intake.jpg",
    description: "Upgrade standard mirror housings to the legendary aggressive M-Style horns. Made from real 3K twill dry carbon fiber with a high-gloss clear coat layer that resists yellowing and fading.",
    specs: {
      "Material": "Real 3K Carbon Fiber weave with ABS backing clips",
      "Structure": "Direct clip-on replacement (not stick-on covers)",
      "Weave Pattern": "2x2 Twill weave pattern",
      "Weight": "Super lightweight (approx. 90g per cap)"
    },
    reviews: [
      { id: 1, user: "Khaled A.", rating: 4, date: "2026-04-14", comment: "Fits perfectly. Real carbon fiber weave is very clean and consistent." }
    ],
    compatibility: ["Mercedes-C-Class", "Mercedes-E-Class", "Mercedes-GLC", "BMW-3 Series", "BMW-5 Series", "BMW-X5"]
  },
  {
    id: "gd-brk-carbon-11",
    name: "GOLDEN M-Sport Slotted Brake Rotor & Pad Kit",
    brand: "GOLDEN Braking",
    category: "exterior",
    price: 360.00,
    rating: 4.9,
    reviewsCount: 67,
    sku: "GD-BRK-MSPORT-KIT",
    image: "brakes.jpg",
    description: "Track-inspired front axle braking upgrade for BMW performance fitments. Includes slotted high-carbon rotors and low-dust ceramic sport pads for stronger bite, cleaner wheels, and more consistent stopping power.",
    specs: {
      "Rotor Type": "High-carbon slotted sport rotors",
      "Pad Compound": "Ceramic low-dust performance blend",
      "Axle Coverage": "Front axle kit",
      "Fitment": "BMW M-Sport and M-style brake packages"
    },
    reviews: [
      { id: 1, user: "Omar S.", rating: 5, date: "2026-07-08", comment: "Pedal feel is firmer and the front wheels stay much cleaner than before." }
    ],
    compatibility: ["BMW-3 Series", "BMW-5 Series", "BMW-M3"]
  },
  {
    id: "gd-ext-diffuser-12",
    name: "GOLDEN Gloss Black Rear Diffuser & Quad Exhaust Trim",
    brand: "GOLDEN Exterior",
    category: "exterior",
    price: 220.00,
    rating: 4.8,
    reviewsCount: 52,
    sku: "GD-EXT-DIFF-QD",
    image: "downpipe.jpg",
    description: "Aggressive rear styling package with a gloss black diffuser and quad exhaust tip surrounds. Designed to sit at the lower rear bumper line for a cleaner M-performance look.",
    specs: {
      "Material": "ABS diffuser with heat-resistant trim finish",
      "Finish": "Gloss black",
      "Placement": "Lower rear bumper",
      "Installation": "Clip-and-screw fitment with bumper-safe hardware"
    },
    reviews: [
      { id: 1, user: "Nader F.", rating: 5, date: "2026-06-29", comment: "The rear end looks much wider and more aggressive now." }
    ],
    compatibility: ["BMW-3 Series", "BMW-M3"]
  },
  {
    id: "gd-ext-splitter-13",
    name: "GOLDEN Gloss Black M-Performance Front Splitter Lip",
    brand: "GOLDEN Exterior",
    category: "exterior",
    price: 190.00,
    rating: 4.8,
    reviewsCount: 61,
    sku: "GD-EXT-FSPL-M3",
    image: "intake.jpg",
    description: "Lower front bumper splitter designed for the BMW M3 front fascia. Adds a sharper lower edge, protects the bumper lip, and gives the car a wider motorsport stance.",
    specs: {
      "Material": "High-impact ABS",
      "Finish": "Gloss black",
      "Placement": "Lower front bumper",
      "Installation": "Bolt-and-tape fitment with bumper-safe hardware"
    },
    reviews: [
      { id: 1, user: "Hany R.", rating: 5, date: "2026-07-16", comment: "The front end looks lower and more aggressive without scraping everywhere." }
    ],
    compatibility: ["BMW-3 Series", "BMW-M3"]
  },
  {
    id: "gd-ext-skirts-14",
    name: "GOLDEN Carbon Look M-Performance Side Skirt Extensions",
    brand: "GOLDEN Exterior",
    category: "exterior",
    price: 240.00,
    rating: 4.7,
    reviewsCount: 48,
    sku: "GD-EXT-SKIRT-M3",
    image: "sway_bar.jpg",
    description: "Pair of side skirt blade extensions for the lower rocker panels. The carbon-look finish visually connects the front splitter and rear diffuser for a complete M-performance exterior kit.",
    specs: {
      "Material": "ABS with carbon-look finish",
      "Package Content": "Left and right side skirt extensions",
      "Placement": "Lower rocker panels",
      "Installation": "Screw and adhesive mounting"
    },
    reviews: [
      { id: 1, user: "Fady M.", rating: 5, date: "2026-07-05", comment: "Matches the front lip and diffuser nicely. The side profile looks much cleaner." }
    ],
    compatibility: ["BMW-3 Series", "BMW-M3"]
  },

  // ==================== 3D HOTSPOT MATCHED PARTS ====================
  {
    id: "gd-3d-headlight-15",
    name: "BMW M3 G80 Adaptive Laser Headlight Upgrade",
    brand: "GOLDEN 3D Fit",
    category: "lighting",
    price: 520.00,
    rating: 4.9,
    reviewsCount: 44,
    sku: "GD-3D-G80-HDL",
    image: "spark_plugs.jpg",
    description: "A front headlight upgrade matched to the 3D hotspot on the BMW M3 nose. Designed for the G80 headlight area with sharper laser-style projection, bright DRL signature, and error-free control modules.",
    specs: {
      "Placement": "Front left and right headlight housings",
      "Lighting Type": "Laser-style LED projector with DRL strip",
      "Housing Finish": "Smoked clear lens with black inner trim",
      "Fitment": "BMW M3 G80 front fascia"
    },
    reviews: [
      { id: 1, user: "Ali K.", rating: 5, date: "2026-07-18", comment: "Matches the front end perfectly and the DRL shape looks much sharper." }
    ],
    compatibility: ["BMW-M3"]
  },
  {
    id: "gd-3d-front-splitter-16",
    name: "BMW M3 G80 Gloss Black Front Splitter Lip",
    brand: "GOLDEN 3D Fit",
    category: "exterior",
    price: 210.00,
    rating: 4.8,
    reviewsCount: 39,
    sku: "GD-3D-G80-FSPL",
    image: "intake.jpg",
    description: "A lower front splitter that matches the front bumper hotspot. It sits directly under the M3 front intake line to make the nose look lower, wider, and more aggressive.",
    specs: {
      "Placement": "Lower front bumper",
      "Finish": "Gloss black",
      "Material": "Flexible ABS lip",
      "Package Content": "Three-piece front splitter set"
    },
    reviews: [
      { id: 1, user: "Mahmoud E.", rating: 5, date: "2026-07-11", comment: "This is exactly the piece that finishes the front bumper." }
    ],
    compatibility: ["BMW-M3"]
  },
  {
    id: "gd-3d-front-brakes-17",
    name: "BMW M3 G80 Front Performance Brake Package",
    brand: "GOLDEN 3D Fit",
    category: "exterior",
    price: 680.00,
    rating: 5.0,
    reviewsCount: 33,
    sku: "GD-3D-G80-FBRK",
    image: "brakes.jpg",
    description: "A front wheel brake package for the hotspot placed on the front wheel assembly. Includes drilled rotors, sport pads, and painted caliper covers for a stronger performance look.",
    specs: {
      "Placement": "Front wheel brake area",
      "Rotor Style": "Drilled and slotted performance rotors",
      "Pad Type": "Low-dust ceramic sport pads",
      "Visual Upgrade": "Red M-style caliper cover set"
    },
    reviews: [
      { id: 1, user: "Yassin D.", rating: 5, date: "2026-06-27", comment: "The red calipers behind the wheel make the whole side profile pop." }
    ],
    compatibility: ["BMW-M3"]
  },
  {
    id: "gd-3d-trunk-spoiler-18",
    name: "BMW M3 G80 Carbon Ducktail Trunk Spoiler",
    brand: "GOLDEN 3D Fit",
    category: "exterior",
    price: 260.00,
    rating: 4.9,
    reviewsCount: 57,
    sku: "GD-3D-G80-SPOIL",
    image: "exhaust.jpg",
    description: "A carbon ducktail spoiler matched to the hotspot on the trunk edge. It follows the BMW M3 rear deck line and gives the back of the car a clean M-performance profile.",
    specs: {
      "Placement": "Rear trunk edge",
      "Finish": "Gloss carbon look",
      "Material": "ABS with UV clear coat",
      "Installation": "Automotive adhesive mounting"
    },
    reviews: [
      { id: 1, user: "Karim N.", rating: 5, date: "2026-07-01", comment: "The rear looks wider and sportier without being too much." }
    ],
    compatibility: ["BMW-M3"]
  },
  {
    id: "gd-3d-mirror-caps-19",
    name: "BMW M3 G80 Carbon M-Horn Mirror Caps",
    brand: "GOLDEN 3D Fit",
    category: "exterior",
    price: 145.00,
    rating: 4.8,
    reviewsCount: 46,
    sku: "GD-3D-G80-MIRR",
    image: "intake.jpg",
    description: "Carbon-look M-horn mirror caps matched to the side mirror hotspot. These replace the factory mirror shells and sharpen the side view of the car.",
    specs: {
      "Placement": "Left and right side mirrors",
      "Finish": "Gloss carbon look",
      "Structure": "Clip-on replacement shell",
      "Package Content": "Pair of mirror caps"
    },
    reviews: [
      { id: 1, user: "Mostafa A.", rating: 5, date: "2026-07-13", comment: "Small part but it changes the whole character of the side view." }
    ],
    compatibility: ["BMW-M3"]
  },
  {
    id: "gd-3d-side-skirts-20",
    name: "BMW M3 G80 Carbon Side Skirt Blade Extensions",
    brand: "GOLDEN 3D Fit",
    category: "exterior",
    price: 295.00,
    rating: 4.7,
    reviewsCount: 35,
    sku: "GD-3D-G80-SKIRT",
    image: "sway_bar.jpg",
    description: "Side skirt blade extensions matched to the lower rocker panel hotspot. They visually connect the front splitter to the rear diffuser and make the M3 side line sit lower.",
    specs: {
      "Placement": "Lower side rocker panels",
      "Finish": "Gloss carbon look",
      "Package Content": "Left and right skirt blades",
      "Installation": "Screw and adhesive mounting"
    },
    reviews: [
      { id: 1, user: "Sherif T.", rating: 4, date: "2026-06-22", comment: "Best side profile upgrade after wheels. Clean fit on the lower line." }
    ],
    compatibility: ["BMW-M3"]
  },
  {
    id: "gd-3d-rear-diffuser-21",
    name: "BMW M3 G80 Rear Diffuser With Quad Exhaust Surrounds",
    brand: "GOLDEN 3D Fit",
    category: "exterior",
    price: 340.00,
    rating: 4.9,
    reviewsCount: 41,
    sku: "GD-3D-G80-DIFF",
    image: "downpipe.jpg",
    description: "A rear diffuser matched to the lower rear bumper hotspot. The fins and quad exhaust surrounds sit around the M3 rear exhaust area for a more complete performance look.",
    specs: {
      "Placement": "Lower rear bumper and exhaust surround",
      "Finish": "Gloss black with carbon-look fins",
      "Exhaust Trim": "Quad outlet surrounds",
      "Installation": "Clip-and-screw fitment"
    },
    reviews: [
      { id: 1, user: "Tarek Z.", rating: 5, date: "2026-07-09", comment: "Now the back finally matches the aggressive front." }
    ],
    compatibility: ["BMW-M3"]
  }
];
