const productData = [
  {
    "id": 1,
    "name": "Hoodie",
    "price": 222.8,
    "category": "Clothing",
    "image": "/images/hoodie.jpg",
    "description": "Stay cozy and stylish with this ultra-soft cotton-blend hoodie. Features a spacious kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for the perfect fit. Ideal for layering during cooler months or lounging at home."
  },
  {
    "id": 2,
    "name": "Sunglasses",
    "price": 291.19,
    "category": "Accessories",
    "image": "/images/sunglasses.jpg",
    "description": "Shield your eyes in luxury with these premium polarized sunglasses. UV400 protection meets timeless design, featuring scratch-resistant lenses and lightweight titanium frames. Perfect for driving, beach days, or city strolling."
  },
  {
    "id": 3,
    "name": "Hoodie",
    "price": 232.33,
    "category": "Clothing",
    "image": "/images/hoodie.jpg",
    "description": "Embrace urban comfort with this heavyweight fleece hoodie. Double-lined hood and reinforced seams ensure lasting durability, while the relaxed fit provides all-day comfort. Features subtle logo embroidery and a roomy front pocket."
  },
  {
    "id": 4,
    "name": "Leather Boots",
    "price": 218.76,
    "category": "Shoes",
    "image": "/images/leather-boots.jpg",
    "description": "Step confidently in these handcrafted genuine leather boots. Full-grain leather upper with traditional lace-up design, cushioned insole, and durable rubber sole. Perfect for both casual outings and semi-formal occasions."
  },
  {
    "id": 5,
    "name": "Loafers",
    "price": 55.57,
    "category": "Shoes",
    "image": "/images/loafers.jpg",
    "description": "Effortless sophistication meets everyday comfort in these classic slip-on loafers. Soft synthetic leather construction with penny-style strap detail, cushioned footbed, and flexible sole for all-day wearability."
  },
  {
    "id": 6,
    "name": "Portable Charger",
    "price": 127.36,
    "category": "Electronics",
    "image": "/images/portable-charger.jpg",
    "description": "Never run out of power with this high-capacity 20,000mAh portable charger. Fast-charging technology, dual USB ports, LED battery indicator, and compact design. Compatible with smartphones, tablets, and other USB devices."
  },
  {
    "id": 7,
    "name": "Slim Fit Jeans",
    "price": 160.24,
    "category": "Clothing",
    "image": "/images/slim-fit-jeans.jpg",
    "description": "Discover the perfect balance of style and comfort with these premium slim-fit jeans. Stretch denim blend contours to your body while maintaining shape. Five-pocket styling with subtle fading and whisker details."
  },
  {
    "id": 8,
    "name": "Vacuum Cleaner",
    "price": 160.54,
    "category": "Home",
    "image": "/images/vacuum-cleaner.jpg",
    "description": "Keep your home spotless with this powerful bagless vacuum cleaner. Advanced cyclonic technology, HEPA filtration system, and lightweight design. Includes multiple attachments for carpets, hardwood, and upholstery cleaning."
  },
  {
    "id": 9,
    "name": "Wallet",
    "price": 120.07,
    "category": "Accessories",
    "image": "/images/wallet.jpg",
    "description": "Organize your essentials with this sleek leather bi-fold wallet. Features 8 card slots, 2 bill compartments, and a clear ID window. Slim profile fits comfortably in your pocket while keeping everything secure and accessible."
  },
  {
    "id": 10,
    "name": "Denim Jacket",
    "price": 225.64,
    "category": "Clothing",
    "image": "/images/denim-jacket.jpg",
    "description": "Timeless style meets modern comfort in this classic denim jacket. Premium cotton denim with vintage wash, button-front closure, chest pockets, and adjustable cuffs. A versatile layering piece for any season."
  },
  {
    "id": 11,
    "name": "Leather Boots",
    "price": 288.27,
    "category": "Shoes",
    "image": "/images/leather-boots.jpg",
    "description": "Elevate your footwear collection with these premium leather ankle boots. Italian leather construction, side-zip closure for easy wear, padded collar, and anti-slip rubber sole. Perfect for both professional and casual settings."
  },
  {
    "id": 12,
    "name": "LED Lamp",
    "price": 147.83,
    "category": "Home",
    "image": "/images/led-lamp.jpg",
    "description": "Brighten your space with this modern LED desk lamp. Adjustable brightness levels, touch controls, USB charging port, and flexible arm positioning. Energy-efficient LED technology with 50,000-hour lifespan."
  },
  {
    "id": 13,
    "name": "Hiking Boots",
    "price": 130.6,
    "category": "Shoes",
    "image": "/images/hiking-boots.jpg",
    "description": "Conquer any trail with these rugged waterproof hiking boots. Breathable membrane, aggressive tread pattern, ankle support, and reinforced toe cap. Designed for comfort during long outdoor adventures."
  },
  {
    "id": 14,
    "name": "Blender",
    "price": 28.1,
    "category": "Home",
    "image": "/images/blender.jpg",
    "description": "Create delicious smoothies and shakes with this compact personal blender. 300-watt motor, BPA-free blending cup, easy one-touch operation, and dishwasher-safe components. Perfect for single servings and on-the-go lifestyles."
  },
  {
    "id": 15,
    "name": "Vacuum Cleaner",
    "price": 186.35,
    "category": "Home",
    "image": "/images/vacuum-cleaner.jpg",
    "description": "Experience superior cleaning power with this cordless stick vacuum. Lithium-ion battery provides up to 45 minutes of runtime, LED headlights, and converts to handheld for versatile cleaning. Ideal for quick cleanups."
  },
  {
    "id": 16,
    "name": "Running Sneakers",
    "price": 87.57,
    "category": "Shoes",
    "image": "/images/running-sneakers.jpg",
    "description": "Maximize your performance with these lightweight running sneakers. Breathable mesh upper, responsive foam cushioning, and flexible outsole for natural foot movement. Perfect for jogging, gym workouts, or casual wear."
  },
  {
    "id": 17,
    "name": "Slim Fit Jeans",
    "price": 60.86,
    "category": "Clothing",
    "image": "/images/slim-fit-jeans.jpg",
    "description": "Affordable style meets quality construction in these essential slim-fit jeans. Classic indigo wash, comfortable stretch fabric, and timeless five-pocket design. A wardrobe staple that pairs well with any outfit."
  },
  {
    "id": 18,
    "name": "Air Purifier",
    "price": 141.52,
    "category": "Home",
    "image": "/images/air-purifier.jpg",
    "description": "Breathe cleaner air with this compact HEPA air purifier. Three-stage filtration system removes 99.97% of particles, quiet operation, and covers up to 300 sq ft. Features automatic air quality monitoring."
  },
  {
    "id": 19,
    "name": "Lipstick Set",
    "price": 217.36,
    "category": "Beauty",
    "image": "/images/lipstick-set.jpg",
    "description": "Complete your makeup collection with this luxury lipstick set. Includes 12 vibrant shades in matte and satin finishes, long-lasting formula, and elegant gold packaging. Perfect for gifting or building your color palette."
  },
  {
    "id": 20,
    "name": "Skincare Kit",
    "price": 49.81,
    "category": "Beauty",
    "image": "/images/skincare-kit.jpg",
    "description": "Start your skincare journey with this essential 4-piece starter kit. Includes gentle cleanser, hydrating toner, moisturizing cream, and SPF protection. Suitable for all skin types and perfect for daily use."
  },
  {
    "id": 21,
    "name": "Perfume",
    "price": 286.93,
    "category": "Beauty",
    "image": "/images/perfume.jpg",
    "description": "Captivate with this sophisticated eau de parfum featuring notes of bergamot, jasmine, and sandalwood. Long-lasting fragrance in an elegant crystal bottle. Perfect for special occasions or as a signature scent."
  },
  {
    "id": 22,
    "name": "Graphic T-Shirt",
    "price": 43.2,
    "category": "Clothing",
    "image": "/images/graphic-t-shirt.jpg",
    "description": "Express your style with this trendy graphic tee. Soft cotton blend fabric, vibrant print design, and relaxed fit for ultimate comfort. Perfect for casual outings, layering, or weekend wear."
  },
  {
    "id": 23,
    "name": "Hoodie",
    "price": 154.13,
    "category": "Clothing",
    "image": "/images/hoodie.jpg",
    "description": "Stay warm and comfortable in this mid-weight pullover hoodie. French terry construction, athletic fit, and classic pouch pocket. Ideal for workouts, casual wear, or lounging around the house."
  },
  {
    "id": 24,
    "name": "Hair Dryer",
    "price": 144.24,
    "category": "Beauty",
    "image": "/images/hair-dryer.jpg",
    "description": "Achieve salon-quality results with this professional ionic hair dryer. Ceramic technology reduces frizz, multiple heat and speed settings, cool shot button, and lightweight design. Includes concentrator and diffuser attachments."
  },
  {
    "id": 25,
    "name": "Polo Shirt",
    "price": 78.25,
    "category": "Clothing",
    "image": "/images/polo-shirt.jpg",
    "description": "Classic meets comfort in this essential pique polo shirt. 100% cotton construction, three-button placket, and timeless fit. Perfect for golf, casual Fridays, or smart-casual occasions."
  },
  {
    "id": 26,
    "name": "Loafers",
    "price": 75.09,
    "category": "Shoes",
    "image": "/images/loafers.jpg",
    "description": "Upgrade your casual footwear with these versatile suede loafers. Soft suede upper, moccasin-style stitching, cushioned insole, and rubber sole for traction. Perfect for both indoor and outdoor wear."
  },
  {
    "id": 27,
    "name": "Polo Shirt",
    "price": 152.57,
    "category": "Clothing",
    "image": "/images/polo-shirt.jpg",
    "description": "Experience premium quality with this luxury polo shirt. Mercerized cotton fabric, mother-of-pearl buttons, and tailored fit. Features subtle logo embroidery and reinforced shoulder seams for durability."
  },
  {
    "id": 28,
    "name": "Cap",
    "price": 245.84,
    "category": "Accessories",
    "image": "/images/cap.jpg",
    "description": "Top off your look with this premium structured baseball cap. Wool blend crown, leather strap closure, curved brim, and moisture-wicking sweatband. Features embroidered logo and classic 6-panel construction."
  },
  {
    "id": 29,
    "name": "Skincare Kit",
    "price": 105.59,
    "category": "Beauty",
    "image": "/images/skincare-kit.jpg",
    "description": "Elevate your skincare routine with this advanced anti-aging kit. Includes vitamin C serum, retinol cream, hyaluronic acid moisturizer, and gentle exfoliating cleanser. Designed to target fine lines and improve skin texture."
  },
  {
    "id": 30,
    "name": "Lipstick Set",
    "price": 26.53,
    "category": "Beauty",
    "image": "/images/lipstick-set.jpg",
    "description": "Discover your perfect shade with this affordable 6-piece lipstick collection. Creamy formula, buildable coverage, and trendy colors from nude to bold. Great for experimenting with new looks or everyday wear."
  },
  {
    "id": 31,
    "name": "Wrist Watch",
    "price": 88.47,
    "category": "Accessories",
    "image": "/images/wrist-watch.jpg",
    "description": "Stay punctual in style with this classic analog watch. Stainless steel case, leather strap, water-resistant design, and precise quartz movement. Features date display and luminous hands for low-light visibility."
  },
  {
    "id": 32,
    "name": "Smartwatch Series 5",
    "price": 298.57,
    "category": "Electronics",
    "image": "/images/smartwatch-series-5.jpg",
    "description": "Stay connected and track your fitness with this advanced smartwatch. Heart rate monitor, GPS tracking, sleep analysis, and smartphone notifications. Water-resistant with 7-day battery life and customizable watch faces."
  },
  {
    "id": 33,
    "name": "Skincare Kit",
    "price": 80.69,
    "category": "Beauty",
    "image": "/images/skincare-kit.jpg",
    "description": "Nourish your skin with this hydrating skincare set. Features hyaluronic acid serum, ceramide moisturizer, gentle foam cleanser, and soothing face mask. Perfect for dry or sensitive skin types."
  },
  {
    "id": 34,
    "name": "Denim Jacket",
    "price": 56.14,
    "category": "Clothing",
    "image": "/images/denim-jacket.jpg",
    "description": "Add a casual edge to any outfit with this distressed denim jacket. Light wash finish, frayed details, oversized fit, and classic button closure. Perfect for layering over dresses, tees, or hoodies."
  },
  {
    "id": 35,
    "name": "Hoodie",
    "price": 249.77,
    "category": "Clothing",
    "image": "/images/hoodie.jpg",
    "description": "Luxury meets comfort in this premium cashmere-blend hoodie. Incredibly soft texture, tailored fit, and subtle designer details. Features brushed interior lining and elegant drawstring with metal tips."
  },
  {
    "id": 36,
    "name": "Lipstick Set",
    "price": 98.18,
    "category": "Beauty",
    "image": "/images/lipstick-set.jpg",
    "description": "Create endless looks with this versatile 9-shade lipstick palette. Includes matte, satin, and gloss finishes in universally flattering colors. Long-wearing formula enriched with vitamin E for smooth application."
  },
  {
    "id": 37,
    "name": "Air Purifier",
    "price": 159.92,
    "category": "Home",
    "image": "/images/air-purifier.jpg",
    "description": "Enhance your indoor air quality with this smart air purifier. Wi-Fi connectivity, app control, real-time air quality display, and automatic mode adjustment. Covers large rooms up to 500 sq ft efficiently."
  },
  {
    "id": 38,
    "name": "Smartwatch Series 5",
    "price": 55.6,
    "category": "Electronics",
    "image": "/images/smartwatch-series-5.jpg",
    "description": "Essential smartwatch features at an unbeatable price. Step counter, call notifications, music control, and basic fitness tracking. 5-day battery life with colorful silicone band and easy-to-read display."
  },
  {
    "id": 39,
    "name": "Running Sneakers",
    "price": 162.95,
    "category": "Shoes",
    "image": "/images/running-sneakers.jpg",
    "description": "Experience premium running performance with these professional-grade sneakers. Advanced cushioning technology, carbon fiber plate, breathable knit upper, and superior energy return for competitive runners."
  },
  {
    "id": 40,
    "name": "Hiking Boots",
    "price": 130.52,
    "category": "Shoes",
    "image": "/images/hiking-boots.jpg",
    "description": "Tackle challenging terrain with these mid-cut hiking boots. Waterproof leather construction, Vibram outsole for superior grip, padded ankle support, and moisture-wicking lining. Perfect for day hikes and backpacking."
  },
  {
    "id": 41,
    "name": "Loafers",
    "price": 214.55,
    "category": "Shoes",
    "image": "/images/loafers.jpg",
    "description": "Sophisticated Italian leather loafers crafted with traditional techniques. Hand-stitched construction, leather sole, and elegant tassel detail. Perfect for business meetings, formal events, or elevated casual wear."
  },
  {
    "id": 42,
    "name": "Denim Jacket",
    "price": 129.18,
    "category": "Clothing",
    "image": "/images/denim-jacket.jpg",
    "description": "Timeless American denim craftsmanship in this raw selvedge jacket. Heavyweight denim that ages beautifully, copper rivets, and vintage-inspired cut. A heritage piece that gets better with every wear."
  },
  {
    "id": 43,
    "name": "Hiking Boots",
    "price": 199.86,
    "category": "Shoes",
    "image": "/images/hiking-boots.jpg",
    "description": "Professional-grade mountaineering boots for serious outdoor enthusiasts. Full-grain leather, steel shank support, crampon compatible, and extreme weather protection. Designed for alpine adventures and technical climbs."
  },
  {
    "id": 44,
    "name": "Nail Polish",
    "price": 108.94,
    "category": "Beauty",
    "image": "/images/nail-polish.jpg",
    "description": "Professional salon-quality nail polish collection featuring 15 trending colors. Long-lasting formula, chip-resistant finish, and wide brush for easy application. Includes base coat, top coat, and cuticle oil."
  },
  {
    "id": 45,
    "name": "Hiking Boots",
    "price": 188.51,
    "category": "Shoes",
    "image": "/images/hiking-boots.jpg",
    "description": "Lightweight yet durable hiking boots for multi-day adventures. Gore-Tex waterproof membrane, EVA midsole cushioning, and aggressive lug sole pattern. Features quick-lace system and reinforced heel and toe areas."
  },
  {
    "id": 46,
    "name": "Leather Boots",
    "price": 298.12,
    "category": "Shoes",
    "image": "/images/leather-boots.jpg",
    "description": "Handcrafted luxury leather boots made from premium full-grain leather. Goodyear welt construction, leather lining, and wooden heel. A timeless investment piece that combines style with exceptional durability."
  },
  {
    "id": 47,
    "name": "Slim Fit Jeans",
    "price": 83.22,
    "category": "Clothing",
    "image": "/images/slim-fit-jeans.jpg",
    "description": "Modern slim-fit jeans with innovative stretch technology. Maintains shape while providing comfort and mobility. Dark indigo wash with subtle contrast stitching and clean finish. Perfect for smart-casual styling."
  },
  {
    "id": 48,
    "name": "LED Lamp",
    "price": 147.96,
    "category": "Home",
    "image": "/images/led-lamp.jpg",
    "description": "Sleek floor lamp with smart lighting features. Voice control compatibility, color temperature adjustment from warm to cool white, and app-controlled dimming. Modern minimalist design complements any décor style."
  },
  {
    "id": 49,
    "name": "Cap",
    "price": 215.05,
    "category": "Accessories",
    "image": "/images/cap.jpg",
    "description": "Luxury leather-brimmed cap with premium wool crown. Adjustable leather strap, moisture-wicking interior, and subtle embossed logo. Combines streetwear style with high-end materials for the discerning fashion enthusiast."
  },
  {
    "id": 50,
    "name": "Polo Shirt",
    "price": 36.85,
    "category": "Clothing",
    "image": "/images/polo-shirt.jpg",
    "description": "Budget-friendly polo shirt without compromising on style. Cotton-poly blend for easy care, classic three-button design, and available in multiple colors. Perfect for casual wear, work uniforms, or sports activities."
  }
]

export default productData