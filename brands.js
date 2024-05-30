const pepsiCo = [
    {
        brand: "Aquafina",
        variety: ["Original"],
        flavor: ["None"],
        size: ["20oz", "1LT", "8pk", "24pk", "32pk"]
    },
    {
        brand: "Bubly",
        variety: ["Original", "Burst"],
        flavor: ["Blackberry", "Cherry", "Coconut Pineapple", "Grapefruit", "Lime", "Mango", "Raspberry", "Strawberry"],
        size: ["16oz", "8pk"]
    },
    {
        brand: "Gatorade",
        variety: ["Original", "Zero", "Fast Twitch", "Fit", "Lyte"],
        flavor: ["Cool Blue", "Cucumber Lime", "Fruit Punch", "Glacier Cherry", "Glacier Freeze", "Grape", "Green Apple",
            "Lemon Lime", "Orange"],
        size: ["20oz", "28oz", "128oz", "6pk", "8pk", "12pk", "18pk"],
    },
    {
        brand: "Mountain Dew",
        variety: ["Original", "Diet", "Zero"],
        flavor: ["None", "Baja", "Caffeine Free", "Code Red", "Frostbite", "Livewire", "Major Melon", "Voltage"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "8pk", "10pk", "12pk", "24pk"]
    },
    {
        brand: "Mug",
        variety: ["Original", "Zero"],
        flavor: ["Rootbeer"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "10pk", "12pk"]
    },
    {
        brand: "Muscle Milk",
        variety: ["Original", "Plant-based"],
        flavor: ["Chocolate", "Vanilla"],
        size: ["16oz"]
    },
    {
        brand: "Pepsi",
        variety: ["Original", "Diet", "Zero"],
        flavor: ["None", "Caffeine Free", "Lime", "Peach", "Wild Cherry"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "8pk", "10pk", "12pk", "24pk"]
    },
    {
        brand: "Propel",
        variety: ["Original"],
        flavor: ["Berry", "Grape", "Lemon", "Strawberry Kiwi"],
        size: ["20oz", "1LT", "6pk", "12pk"]
    },
    {
        brand: "Rockstar",
        variety: ["Original", "Zero Sugar"],
        flavor: ["Fruit Punch", "Original"],
        size: ["16oz", "4pk", "12pk"]
    },
    {
        brand: "Starbucks",
        variety: ["Original", "Oat Milk"],
        flavor: ["Caramel", "Mocha", "White Chocolate", "Vanilla"],
        size: ["16oz", "4pk", "12pk"]
    },
    {
        brand: "Starry",
        variety: ["Original", "Zero"],
        flavor: ["None"],
        size: ["20oz", "6pk-10oz", "6pk-16oz", "10pk", "12pk"]
    }
]

const keurigDrPepper = [
    {
        brand: "Ashoc",
        variety: ["Original", "Accelerator"],
        flavor: ["Berry Lemonade", "Peach Paradise", "Rocket Pop", "Tropical Punch"],
        size: ["12oz", "16oz"]
    },
    {
        brand: "7up",
        variety: ["Original", "Zero"],
        flavor: ["None", "Cherry"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "10pk", "12pk"]
    },
    {
        brand: "A&W",
        variety: ["Original", "Zero"],
        flavor: ["Root Beer", "Cream Soda"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "10pk", "12pk"]
    },
    {
        brand: "Bai",
        variety: ["Original"],
        flavor: ["Brasilia Blueberry", "Kula Watermelon", "Molokai Coconut", "Puna Coconut Pineapple", "Raspberry Lemon Lime",
            "Zambia Bing Cherry"],
        size: ["16oz", "4pk"]
    },
    {
        brand: "Big Red",
        variety: ["Original"],
        flavor: ["None"],
        size: ["20oz", "2LT"]
    },
    {
        brand: "Canada Dry",
        variety: ["Original", "Zero"],
        flavor: ["Ginger Ale", "Fruit Splash"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "10pk", "12pk", "24pk"]
    },
    {
        brand: "Crush",
        variety: ["Original"],
        flavor: ["Orange", "Grape", "Strawberry"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "10pk", "12pk"]
    },
    {
        brand: "Deja Blue",
        variety: ["Original"],
        flavor: ["None"],
        size: ["20oz"]
    },
    {
        brand: "Diet Rite",
        variety: ["Original"],
        flavor: ["None"],
        size: ["12pk"]
    },
    {
        brand: "Dr. Pepper",
        variety: ["Original", "Diet", "Zero"],
        flavor: ["None", "Caffeine Free", "Cherry", "Coconut", "Cream Soda", "Strawberries and Cream"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "8pk", "10pk", "12pk", "24pk"]
    },
    {
        brand: "Hawaiian Punch",
        variety: ["Original"],
        flavor: ["None"],
        size: ["20oz", "2LT", "6pk-16oz", "12pk"]
    },
    {
        brand: "RC Cola",
        variety: ["Original"],
        flavor: ["None", "Mixed Berry"],
        size: ["20oz", "2LT", "6pk-16oz", "12pk"]
    },
    {
        brand: "Schweppes",
        variety: ["Original"],
        flavor: ["Ginger Ale"],
        size: ["6pk-10oz", "6pk-16oz", "12pk"]
    },
    {
        brand: "Squirt",
        variety: ["Original"],
        flavor: ["None"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "10pk", "12pk"]
    },
    {
        brand: "Snapple",
        variety: ["Original"],
        flavor: ["Apple", "Fruit Punch", "Kiwi Strawberry", "Peach", "Watermelon Lemonade"],
        size: ["16oz", "6pk", "12pk"]
    },
    {
        brand: "Sunkist",
        variety: ["Original", "Zero"],
        flavor: ["Berry Lemonade", "Cherry Limeade", "Fruit Punch", "Orange", "Peach", "Strawberry",
            "Strawberry Orange", "Watermelon Lemonade"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "8pk", "10pk", "12pk", "24pk"]
    },
    {
        brand: "Tahitian Treat",
        variety: ["Original"],
        flavor: ["Fruit Punch"],
        size: ["20oz", "2LT", "6pk-16oz", "12pk"]
    },
    {
        brand: "Vernors",
        variety: ["Original"],
        flavor: ["Ginger Ale"],
        size: ["12pk"]
    }
];


const buffaloRock = [
    {
        brand: "Buffalo Rock",
        variety: ["Original", "Diet"],
        flavor: ["Ginger Ale"],
        size: ["12pk"]
    },
    {
        brand: "Grapico",
        variety: ["Original", "Diet"],
        flavor: ["None"],
        size: ["20oz", "2LT", "6pk-16oz", "8pk", "12pk"]
    },
    {
        brand: "Sundrop",
        variety: ["Original", "Zero"],
        flavor: ["None"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "12pk"]
    },
    {
        brand: "Sunfresh",
        variety: ["Original"],
        flavor: ["None"],
        size: ["20oz", "2LT", "12pk"]
    }
];


const celsius = [
    {
        brand: "Celsius Live Fit",
        variety: ["Original", "Variety Pack", "Fizz Free Variety Pack", "Space Variety Pack", "Vibe Variety Pack"],
        flavor: ["None", "Arctic Vibe", "Astro Vibe", "Blue Razz Lemonade", "Cosmic Vibe", "Cola", "Fantasy Vibe", "Fuji Apple Pear",
            "Galaxy Vibe", "Grape Rush", "Green Apple Cherry", "Kiwi Guava", "Lemon Lime", "Mango Passionfruit", "Oasis Vibe",
            "Orange", "Orangecicle", "Peach Mango", "Peach Vibe", "Raspberry Acai", "Raspberry Peach", "Strawberry Guava",
            "Strawberry Lemonade", "Tropical Vibe", "Watermelon", "Watermelon Lemon"],
        size: ["12oz", "4pk", "12pk"]
    },
    {
        brand: "Celsius Essentials",
        variety: ["Original", "Variety Pack"],
        flavor: ["Blue Crush", "Cherry Limeade", "Dragonberry", "Fruit Burst", "Mango Tango"],
        size: ["16oz", "12pk"]
    }
];

const lipton = [
    {
        brand: "Brisk",
        variety: ["Original"],
        flavor: ["Blood Orange", "Iced Tea + Lemonade", "Lemon", "Strawberry Melon", "Sweet Tea"],
        size: ["1LT", "12pk"]
    },
    {
        brand: "Lipton",
        variety: ["Original", "Diet"],
        flavor: ["Green Tea Citrus", "Half & Half Iced Tea/Lemonade", "Lemon", "Mixed Berry", "Peach", "Pineapple Mango", "Watermelon", "White Raspberry"],
        size: ["20oz", "2LT", "12pk"]
    },
    {
        brand: "Pure Leaf",
        variety: ["Original", "Zero"],
        flavor: ["Extra Sweet", "Green Tea", "Lemon", "Raspberry", "Sweet Tea"],
        size: ["6pk", "12pk"]
    }
];