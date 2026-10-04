
// =========================================================
// ELECTROMART PRODUCT DATA
// =========================================================

const products = [

    {
        id: 1,
        name: "Smartphone Pro",
        category: "Mobiles & Tablets",
        brand: "Samsung",
        price: 49999,
        oldPrice: 59999,
        discount: 17,
        rating: 4.8,
        reviews: 126,
        stock: 15,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
        description: "A powerful smartphone with a premium display, excellent camera and long-lasting battery.",
        features: {
            processor: "Octa Core",
            ram: "8 GB",
            storage: "256 GB",
            camera: "50 MP"
        }
    },


    {
        id: 2,
        name: "UltraBook Air",
        category: "Laptops & Computers",
        brand: "Dell",
        price: 56999,
        oldPrice: 79999,
        discount: 29,
        rating: 4.6,
        reviews: 98,
        stock: 10,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
        description: "A lightweight laptop designed for productivity, entertainment and everyday computing.",
        features: {
            processor: "Intel Core i5",
            ram: "16 GB",
            storage: "512 GB SSD",
            camera: "HD Camera"
        }
    },


    {
        id: 3,
        name: "Wireless Headphones",
        category: "Audio & Headphones",
        brand: "Sony",
        price: 3899,
        oldPrice: 5999,
        discount: 35,
        rating: 4.5,
        reviews: 214,
        stock: 25,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
        description: "Enjoy immersive sound with comfortable wireless headphones and powerful bass.",
        features: {
            processor: "Bluetooth 5.3",
            ram: "N/A",
            storage: "N/A",
            camera: "N/A"
        }
    },


    {
        id: 4,
        name: "Smart Watch Series",
        category: "Smartwatches",
        brand: "Apple",
        price: 5499,
        oldPrice: 6999,
        discount: 21,
        rating: 4.7,
        reviews: 156,
        stock: 18,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
        description: "Track your fitness, notifications and daily activities with this stylish smartwatch.",
        features: {
            processor: "Dual Core",
            ram: "2 GB",
            storage: "32 GB",
            camera: "N/A"
        }
    },


    {
        id: 5,
        name: "Digital Camera",
        category: "Cameras & Photography",
        brand: "Canon",
        price: 42499,
        oldPrice: 49999,
        discount: 15,
        rating: 4.6,
        reviews: 87,
        stock: 8,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
        description: "Capture high-quality photos and videos with this versatile digital camera.",
        features: {
            processor: "DIGIC Processor",
            ram: "N/A",
            storage: "128 GB Support",
            camera: "24 MP"
        }
    },


    {
        id: 6,
        name: "Wireless Earbuds",
        category: "Audio & Headphones",
        brand: "JBL",
        price: 2999,
        oldPrice: 3999,
        discount: 25,
        rating: 4.8,
        reviews: 302,
        stock: 30,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80",
        description: "Compact wireless earbuds with clear audio, deep bass and a comfortable fit.",
        features: {
            processor: "Bluetooth 5.2",
            ram: "N/A",
            storage: "N/A",
            camera: "N/A"
        }
    },


    {
        id: 7,
        name: "Galaxy X Pro",
        category: "Mobiles & Tablets",
        brand: "Samsung",
        price: 62999,
        oldPrice: 69999,
        discount: 10,
        rating: 4.7,
        reviews: 76,
        stock: 12,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
        description: "Premium smartphone with an advanced display, powerful processor and professional camera.",
        features: {
            processor: "Snapdragon 8 Gen",
            ram: "12 GB",
            storage: "256 GB",
            camera: "108 MP"
        }
    },


    {
        id: 8,
        name: "ProBook 14",
        category: "Laptops & Computers",
        brand: "HP",
        price: 67999,
        oldPrice: 84999,
        discount: 20,
        rating: 4.6,
        reviews: 64,
        stock: 7,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=700&q=80",
        description: "Professional laptop with excellent performance for work, study and development.",
        features: {
            processor: "Intel Core i7",
            ram: "16 GB",
            storage: "1 TB SSD",
            camera: "HD Camera"
        }
    },


    {
        id: 9,
        name: "Noise Cancelling Headphones",
        category: "Audio & Headphones",
        brand: "Sony",
        price: 7999,
        oldPrice: 9999,
        discount: 20,
        rating: 4.7,
        reviews: 145,
        stock: 14,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=700&q=80",
        description: "Premium headphones with active noise cancellation and immersive sound.",
        features: {
            processor: "Bluetooth 5.3",
            ram: "N/A",
            storage: "N/A",
            camera: "N/A"
        }
    },


    {
        id: 10,
        name: "Smart Watch Ultra",
        category: "Smartwatches",
        brand: "Apple",
        price: 8499,
        oldPrice: 9999,
        discount: 15,
        rating: 4.8,
        reviews: 92,
        stock: 9,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
        description: "Advanced smartwatch designed for fitness, outdoor activities and everyday use.",
        features: {
            processor: "Dual Core",
            ram: "2 GB",
            storage: "64 GB",
            camera: "N/A"
        }
    },


    {
        id: 11,
        name: "Mirrorless Camera",
        category: "Cameras & Photography",
        brand: "Canon",
        price: 74999,
        oldPrice: 89999,
        discount: 17,
        rating: 4.7,
        reviews: 51,
        stock: 5,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
        description: "Professional mirrorless camera for photography enthusiasts and creators.",
        features: {
            processor: "DIGIC X",
            ram: "N/A",
            storage: "256 GB Support",
            camera: "32 MP"
        }
    },


    {
        id: 12,
        name: "RGB Gaming Keyboard",
        category: "Gaming & Accessories",
        brand: "Logitech",
        price: 3499,
        oldPrice: 4499,
        discount: 22,
        rating: 4.5,
        reviews: 118,
        stock: 20,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
        description: "Mechanical gaming keyboard with RGB lighting and responsive keys.",
        features: {
            processor: "Mechanical Switches",
            ram: "N/A",
            storage: "N/A",
            camera: "N/A"
        }
    }

];


// =========================================================
// GET PRODUCT BY ID
// =========================================================

function getProductById(id) {

    return products.find(product => product.id === Number(id));

}


// =========================================================
// SAVE PRODUCTS TO LOCAL STORAGE
// =========================================================

if (!localStorage.getItem("electroMartProducts")) {

    localStorage.setItem(
        "electroMartProducts",
        JSON.stringify(products)
    );

}
