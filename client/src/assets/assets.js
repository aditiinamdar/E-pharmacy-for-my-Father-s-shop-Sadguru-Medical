import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./main_banner_bg.png";
import main_banner_bg_sm from "./main_banner_bg_sm.png";
import bottom_banner_image from "./bottom_banner_image.png";
import bottom_banner_image_sm from "./bottom_banner_image_sm.png";
import two from "./two.jpg";
import add_address_iamge from "./add_address_image.svg";
import pharmacy from "./pharmacy.png";
import sadguru from "./sadguru.png";

export const assets = {
    sadguru,
    pharmacy,
    logo,
    search_icon,
    remove_icon,
    arrow_right_icon_colored,
    star_icon,
    star_dull_icon,
    cart_icon,
    nav_cart_icon,
    add_icon,
    refresh_icon,
    product_list_icon,
    order_icon,
    upload_area,
    profile_icon,
    menu_icon,
    delivery_truck_icon,
    leaf_icon,
    coin_icon,
    trust_icon,
    black_arrow_icon,
    white_arrow_icon,
    main_banner_bg,
    main_banner_bg_sm,
    two,
    bottom_banner_image,
    bottom_banner_image_sm,
    add_address_iamge,
    box_icon,
};

export const categories = [
    {
        text: "Medicines",
        path: "Medicines",
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1711135829698.png",
        bgColor: "#FEF6DA",
    },
    {
        text: "Devices",
        path: "Devices",
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:214/theme-image-1713346989889.png?dpr=1",
        bgColor: "#FEE0E0",
    },
    {
        text: "Surgicals",
        path: "Surgicals",
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:214/theme-image-1713347086263.png?dpr=1",
        bgColor: "#F0F5DE",
    },
    {
        text: "Personal Care",
        path: "PersonalCare",
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:214/theme-image-1713347643723.png?dpr=1",
        bgColor: "#E1F5EC",
    },
    {
        text: "Vitamins",
        path: "Vitamins",
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:214/theme-image-1713348163795.png?dpr=1",
        bgColor: "#FEE6CD",
    },
    {
        text: "Veternary",
        path: "Veternary",
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1712043199167.png",
        bgColor: "#E0F6FE",
    },
];

export const dummyProducts = [
    // --- 1. Medicines (5 Products) ---
    {
        _id: "1",
        name: "Paracetamol 650mg (Generic)",
        category: "Medicines",
        price: 2.50,
        offerPrice: 2.25,
        image: [
            "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/assets/item/free/resize-w:400/Oi7xhiLt6Q-p_650_tablet_10s_0_2.jpg",
        ],
        description: ["Relieves mild to moderate pain and fever."],
        inStock: true,
    },
    {
        _id: "2",
        name: "Amoxicillin 250mg (Antibiotic)",
        category: "Medicines",
        price: 5.20,
        offerPrice: 4.70,
        image: [
            "https://zplcialirnvkdbmwslyc.supabase.co/storage/v1/object/public/products/Amoxicillin%20250mg.jpeg",
        ],
        description: ["Treats various bacterial infections."],
        inStock: true,
    },
    {
        _id: "3",
        name: "Cetirizine 10mg (Antihistamine)",
        category: "Medicines",
        price: 3.00,
        offerPrice: 2.75,
        image: [
            "https://5.imimg.com/data5/SELLER/Default/2022/3/HN/OH/CH/149355096/cetirizine-10mg-tablets-1000x1000.jpg" // Using an antihistamine image
        ],
        description: ["Used for relief from allergy symptoms."],
        inStock: true,
    },
    {
        _id: "4",
        name: "Omeprazole 20mg (Antacid)",
        category: "Medicines",
        price: 6.50,
        offerPrice: 6.00,
        image: [
            "https://5.imimg.com/data5/IOS/Default/2021/3/OS/LK/WL/70858404/product-jpeg-1000x1000.png" // Using an acid reflux image
        ],
        description: ["Treats stomach acid reflux and heartburn."],
        inStock: true,
    },
    {
        _id: "5",
        name: "Diclofenac Gel (Topical NSAID)",
        category: "Medicines",
        price: 7.00,
        offerPrice: 6.50,
        image: [
            "https://5.imimg.com/data5/SELLER/Default/2024/9/453562636/SQ/VV/AZ/163113727/diclofenac-1-gel-1000x1000.jpg"// Using a topical cream image
        ],
        description: ["Topical gel for localized joint and muscle pain."],
        inStock: true,
    },

    // --- 2. Devices (5 Products) ---
    {
        _id: "6",
        name: "Digital Thermometer",
        category: "Devices",
        price: 15.00,
        offerPrice: 14.50,
        image: ["https://www.bbassets.com/media/uploads/p/l/40325482_1-dr-morepen-digital-thermometer-with-replaceable-batteries-mt110.jpg","https://www.bbassets.com/media/uploads/p/l/40325482-2_1-dr-morepen-digital-thermometer-with-replaceable-batteries-mt110.jpg",
"https://www.bbassets.com/media/uploads/p/l/40325482-3_1-dr-morepen-digital-thermometer-with-replaceable-batteries-mt110.jpg","https://www.bbassets.com/media/uploads/p/l/40325482-4_1-dr-morepen-digital-thermometer-with-replaceable-batteries-mt110.jpg"],
        description: ["Fast and accurate digital fever readings."],
        inStock: true,
    },
    {
        _id: "7",
        name: "Blood Pressure Monitor (Automatic)",
        category: "Devices",
        price: 45.00,
        offerPrice: 42.99,
        image: ["https://m.media-amazon.com/images/I/51ZbzCc222L._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/71ORUcYJoAL._SX679_.jpg"],
        description: ["Easy-to-use automatic arm cuff device."],
        inStock: true,
    },
    {
        _id: "8",
        name: "Pulse Oximeter",
        category: "Devices",
        price: 25.00,
        offerPrice: 23.50,
        image: ["https://cdn01.pharmeasy.in/dam/products_otc/Z08978/pulse-oximeter-device-1-2-1671741743.jpg?dim=700x0&dpr=1&q=100","https://cdn01.pharmeasy.in/dam/products_otc/Z08978/pulse-oximeter-device-1-6.1-1671741742.jpg?dim=256x256&q=75"],
        description: ["Measures blood oxygen saturation and pulse rate."],
        inStock: true,
    },
    {
        _id: "9",
        name: "Glucometer Kit (Blood Sugar)",
        category: "Devices",
        price: 30.00,
        offerPrice: 29.50,
        image: ["https://m.media-amazon.com/images/I/41LONm+i-FL._SY300_SX300_QL70_FMwebp_.jpg"],
        description: ["Essential kit for diabetic monitoring."],
        inStock: true,
    },
    {
        _id: "10",
        name: "Nebulizer Machine",
        category: "Devices",
        price: 55.00,
        offerPrice: 52.99,
        image: ["https://m.media-amazon.com/images/I/41PRyq-bSFL._SY300_SX300_QL70_FMwebp_.jpg"],
        description: ["Used to administer medication in mist form."],
        inStock: true,
    },

    // --- 3. Surgicals (5 Products) ---
    {
        _id: "11",
        name: "Sterile Gauze Pads (10 Pack)",
        category: "Surgicals",
        price: 5.00,
        offerPrice: 4.50,
        image: ["https://cdn01.pharmeasy.in/dam/products_otc/C70659/medica-mediswab-gauze-swab-sterile-e-o-5cm-x-5cm-x-12ply-2-1708771637.jpg"],
        description: ["For wound dressing and absorption."],
        inStock: true,
    },
    {
        _id: "12",
        name: "Surgical Face Masks (50 Pack)",
        category: "Surgicals",
        price: 10.00,
        offerPrice: 9.50,
        image: ["https://www.bbassets.com/media/uploads/p/l/40194935_1-octus-face-mask-3-layer-surgical-disposable-anti-dust-anti-pollution-with-earloop.jpg"],
        description: ["Disposable 3-ply protective masks."],
        inStock: true,
    },
    {
        _id: "13",
        name: "Disposable Gloves (100 Pack)",
        category: "Surgicals",
        price: 15.00,
        offerPrice: 14.50,
        image: ["https://5.imimg.com/data5/SELLER/Default/2025/11/559609144/ZT/FV/JU/123698516/disposable-latex-powdered-examination-gloves-for-hospitals-and-clinics-500x500.jpg"],
        description: ["Latex-free examination gloves."],
        inStock: true,
    },
    {
        _id: "14",
        name: "Antiseptic Wipes (100 Count)",
        category: "Surgicals",
        price: 8.00,
        offerPrice: 7.50,
        image: ["https://cdn01.pharmeasy.in/dam/products_otc/S66246/dettol-disinfectant-sanitizer-wet-wipes-for-skin-surfaces-original-80-count-6.1-1720790263.jpg?dim=700x0&dpr=1&q=100"],
        description: ["For pre-injection and minor wound cleaning."],
        inStock: true,
    },
    {
        _id: "15",
        name: "Band-Aid Assorted Pack (50)",
        category: "Surgicals",
        price: 6.00,
        offerPrice: 5.50,
        image: ["https://rukminim2.flixcart.com/image/416/416/k687wy80/first-aid-tape/y/z/w/water-proof-first-aid-band-100-peice-hansaplast-original-imafzqjzdwdukqwp.jpeg?q=70&crop=false"],
        description: ["Waterproof adhesive bandages."],
        inStock: true,
    },

    // --- 4. Personal Care (5 Products) ---
    {
        _id: "16",
        name: "Strepsils Honey & Lemon",
        category: "PersonalCare",
        price: 5.00,
        offerPrice: 4.50,
        image: [
            "https://cdn01.pharmeasy.in/dam/products_otc/164080/strepsils-orange-lozenges-strip-of-8-1-1669619514.jpg?dim=700x0&dpr=1&q=100",
        ],
        description: ["Antiseptic lozenges for sore throat relief."],
        inStock: true,
    },
    {
        _id: "17",
        name: "Vicks VapoRub",
        category: "PersonalCare",
        price: 18.00,
        offerPrice: 17.50,
        image: [
            "https://zplcialirnvkdbmwslyc.supabase.co/storage/v1/object/public/products/Vicks%20VapoRub.jpg",
        ],
        description: ["Topical analgesic for cold and cough relief."],
        inStock: true,
    },
    {
        _id: "18",
        name: "Clotrimazole Cream (Antifungal)",
        category: "PersonalCare",
        price: 6.00,
        offerPrice: 5.50,
        image: ["https://herbspro.in/cdn/shop/files/263852.jpg?v=1751019403&width=480"],
        description: ["Antifungal cream for minor skin infections."],
        inStock: true,
    },
    {
        _id: "19",
        name: "Hydryllin Syrup (Cough/Cold)",
        category: "PersonalCare",
        price: 15.00,
        offerPrice: 14.50,
        image: ["https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fhydryllin-syrup-120-ml.webp&w=767&q=50",
        ],
        description: ["Cough and cold syrup with diphenhydramine."],
        inStock: true,
    },
    {
        _id: "20",
        name: "Piriton (Antihistamine)",
        category: "PersonalCare",
        price: 7.00,
        offerPrice: 6.50,
        image: [
            "https://onemg.gumlet.io/l_watermark_346,w_240,h_240/a_ignore,w_240,h_240,c_fit,q_auto,f_auto/hx2gxivwmeoxxxsc1hix.png",
        ],
        description: ["Chlorphenamine Maleate (antihistamine)."],
        inStock: true,
    },

    // --- 5. Vitamins (5 Products) ---
    {
        _id: "21",
        name: "Centrum Adults (Multivitamin)",
        category: "Vitamins",
        price: 30.00,
        offerPrice: 29.50,
        image: [
            "https://www.centrumshop.in/dw/image/v2/BKRM_PRD/on/demandware.static/-/Sites-haleon-master-catalog/default/dw472011d7/images/large/men-multivitamin-50-tabs-1.jpg?sw=690&sh=707&sm=fit&q=100",
        ],
        description: ["Comprehensive daily multivitamin tablet."],
        inStock: true,
    },
    {
        _id: "22",
        name: "Vitamin D3 1000 IU",
        category: "Vitamins",
        price: 10.00,
        offerPrice: 9.50,
        image: ["https://m.media-amazon.com/images/I/415QBpxNfIL._SY300_SX300_QL70_FMwebp_.jpg"],
        description: ["High-strength Vitamin D supplement for bone health."],
        inStock: true,
    },
    {
        _id: "23",
        name: "Calcium Sandoz",
        category: "Vitamins",
        price: 18.00,
        offerPrice: 17.50,
        image: [
            "https://www.centrumshop.in/dw/image/v2/BKRM_PRD/on/demandware.static/-/Sites-haleon-master-catalog/default/dw7edf7cdb/images/large/ostacalcium-total-30-tabs-01.jpg?sw=690&sh=707&sm=fit&q=100",
        ],
        description: ["Effervescent calcium and Vitamin C supplement."],
        inStock: true,
    },
    {
        _id: "24",
        name: "Fefol Spansule (Iron & Folic Acid)",
        category: "Vitamins",
        price: 15.00,
        offerPrice: 14.50,
        image: [
            "https://images.apollo247.in/pub/media/catalog/product/f/e/fef0002.jpg?tr=w-264,q-80,f-webp,dpr-false,c-at_max",
        ],
        description: ["Iron and Folic Acid supplement for anemia."],
        inStock: true,
    },
    {
        _id: "25",
        name: "Surbex Z (B-Complex + Zinc)",
        category: "Vitamins",
        price: 12.00,
        offerPrice: 11.50,
        image: ["https://pharmacyskincare.com/cdn/shop/files/surbex-z-tablet-vitamins-supplements-407.jpg?v=1755114847&width=493"],
        description: ["High-potency Vitamin B complex with Zinc."],
        inStock: true,
    },

    // --- 6. Veternary (5 Products) ---
    {
        _id: "26",
        name: "Tick and Flea Spot-On",
        category: "Veternary",
        price: 20.00,
        offerPrice: 19.50,
        image: ["https://ik.imagekit.io/supertails/cdn/shop/files/Pharmacy_86_4427b3fc-1d4d-4776-9075-fb08041522c9_600x.png?v=1717678231"],
        description: ["Monthly treatment for dogs and cats."],
        inStock: true,
    },
    {
        _id: "27",
        name: "Pet Dewormer Tablets",
        category: "Veternary",
        price: 15.00,
        offerPrice: 14.50,
        image: ["https://ik.imagekit.io/supertails/cdn/shop/files/Pharmacy_-_2024-06-17T115813.403_600x.png?v=1741852122"],
        description: ["Broad-spectrum deworming for pets."],
        inStock: true,
    },
    {
        _id: "28",
        name: "Joint Care Chews (Dogs)",
        category: "Veternary",
        price: 35.00,
        offerPrice: 32.99,
        image: ["https://ik.imagekit.io/supertails/cdn/shop/files/Pharmacy_18_bab0b436-7113-46e7-a4a2-11deb4ff8fd0_600x.png?v=1696448959"],
        description: ["Glucosamine and Chondroitin for mobility."],
        inStock: true,
    },
    {
        _id: "29",
        name: "Liv-52 (Pet Version)",
        category: "Veternary",
        price: 10.00,
        offerPrice: 9.50,
        image: [
            "https://rukminim2.flixcart.com/image/416/416/jyt0knk0/pet-health-supplement/d/d/2/100-liv-52-tablets-100-counts-himalaya-original-imafgh3djrteyumg.jpeg?q=70&crop=false",
        ],
        description: ["Herbal supplement for liver support in animals."],
        inStock: true,
    },
    {
        _id: "30",
        name: "Ear Cleaning Solution",
        category: "Veternary",
        price: 8.00,
        offerPrice: 7.50,
        image: ["https://cdn01.pharmeasy.in/dam/productsnowatermark/043145/clearwax-ear-drops-10ml-combo-3-1756894273-non-watermarked.jpg?dim=256x256&q=75"],
        description: ["Gentle formula for dog and cat ears."],
        inStock: true,
    },
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { text: "Home", url: "#" },
            { text: "Best Sellers", url: "#" },
            { text: "Offers & Deals", url: "#" },
            { text: "Contact Us", url: "#" },
            { text: "FAQs", url: "#" },
        ],
    },
    {
        title: "Need help?",
        links: [
            { text: "Delivery Information", url: "#" },
            { text: "Return & Refund Policy", url: "#" },
            { text: "Payment Methods", url: "#" },
            { text: "Track your Order", url: "#" },
            { text: "Contact Us", url: "#" },
        ],
    },
    {
        title: "Follow Us",
        links: [
            { text: "Instagram", url: "#" },
            { text: "Twitter", url: "#" },
            { text: "Facebook", url: "#" },
            { text: "YouTube", url: "#" },
        ],
    },
];

export const features = [
    {
        icon: delivery_truck_icon,
        title: "Fastest Delivery",
        description: "Medicines delivered in under 30 minutes.",
    },
    {
        icon: leaf_icon,
        title: "Genuine Products",
        description: "All products sourced from trusted suppliers.",
    },
    {
        icon: coin_icon,
        title: "Affordable Prices",
        description: "Quality health products at competitive prices.",
    },
    {
        icon: trust_icon,
        title: "Trusted by Thousands",
        description: "Loved by 10,000+ happy customers.",
    },
];

export const dummyAddress = [
    {
        _id: "67b5b9e54ea97f71bbc196a0",
        userId: "67b5880e4d09769c5ca61644",
        firstName: "Great",
        lastName: "Stack",
        email: "user.greatstack@gmail.com",
        street: "Street 123",
        city: "Main City",
        state: "New State",
        zipcode: 123456,
        country: "IN",
        phone: "1234567890",
    },
];

export const dummyOrders = [
    {
        _id: "67e2589a8f87e63366786400",
        userId: "67b5880e4d09769c5ca61644",
        items: [
            {
                // Ibuprofen (now ID 1)
                product: dummyProducts[0],
                quantity: 2,
                _id: "67e2589a8f87e63366786401",
            },
        ],
        // Recalculated amount based on new data/order items
        amount: 4.50, 
        address: dummyAddress[0],
        status: "Order Placed",
        paymentType: "Online",
        isPaid: true,
        createdAt: "2025-12-20T07:17:46.018Z",
        updatedAt: "2025-12-20T07:18:13.103Z",
    },
    {
        _id: "67e258798f87e633667863f2",
        userId: "67b5880e4d09769c5ca61644",
        items: [
            {
                // Paracetamol (now ID 1)
                product: dummyProducts[0], 
                quantity: 1,
                _id: "67e258798f87e633667863f3",
            },
            {
                // Amoxicillin (now ID 2)
                product: dummyProducts[1], 
                quantity: 1,
                _id: "67e258798f87e633667863f4",
            },
        ],
        // Recalculated amount based on new data/order items
        amount: 6.95, 
        address: dummyAddress[0],
        status: "Order Placed",
        paymentType: "COD",
        isPaid: false,
        createdAt: "2025-12-20T07:17:13.068Z",
        updatedAt: "2025-12-20T07:17:13.068Z",
    },
]; 