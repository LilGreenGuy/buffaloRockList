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
        variety: ["Original", "Zero", "Fast Twitch", "Fit"],
        flavor: ["Cool Blue", "Cucumber Lime", "Fruit Punch", "Glacier Cherry", "Glacier Freeze", "Grape", "Green Apple",
            "Lemon Lime", "Orange"],
        size: ["20oz", "28oz", "128oz", "6pk", "8pk", "12pk", "18pk"],
    },
    {
        brand: "Mountain Dew",
        variety: ["Original", "Diet", "Zero"],
        flavor: ["None", "Baja", "Code Red", "Frostbite", "Livewire", "Major Melon", "Voltage"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "8pk", "10pk", "12pk", "24pk"]
    },
    {
        brand: "Mug",
        variety: ["Original", "Zero"],
        flavor: ["None"],
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
        flavor: ["Grape", "Lemon", "Strawberry Kiwi"],
        size: ["20oz", "1.25LT", "6pk", "12pk"]
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
        variety: ["Original"],
        flavor: ["Berry Lemonade"],
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
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "8pk", "10pk", "12pk", "24pk"],
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
        flavor: ["Apple", "Fruit Punch", "Kiwi Strawberry"],
        size: ["16oz", "6pk", "12pk"]
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
        size: ["20oz", "2LT", "12pk"]
    },
    {
        brand: "Sundrop",
        variety: ["Original", "Zero"],
        flavor: ["None"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "12pk"]
    },
    {
        brand: "Sunfresh",
        variety: ["Original, Diet"],
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



const companyField = document.querySelector("#parentCompany");
const brandField = document.getElementById("brand");
const flavorField = document.getElementById("flavor");
const varietyField = document.getElementById("variety");
const sizeField = document.getElementById("size");
const submitBtn = document.querySelector(".submit")
const listTable = document.querySelector(".table");
const cases = document.getElementById("case");
const units = document.getElementById("unit");
const resetBtn = document.querySelector(".reset");

cases.addEventListener("click", () => emptyField(cases));
units.addEventListener("click", () => emptyField(units));
submitBtn.addEventListener("click", () => addItem());
submitBtn.addEventListener("mouseup", () => submitBtn.blur());
resetBtn.addEventListener("dblclick", () => resetList());
companyField.addEventListener("change", () => createBrands(companyField.value));
brandField.addEventListener("change", () => createSubFields(companyField.value));

function createBrands(value) {
    let brandFieldChildren = brandField.children.length;
    for (let i = 1; i < brandFieldChildren; ++i) {
        brandField.removeChild(brandField.lastChild);
    }

    if (value === "Buffalo Rock") {
        createBrandFields(buffaloRock);
    } else if (value === "Celsius") {
        createBrandFields(celsius);
    } else if (value === "Lipton Teas") {
        createBrandFields(lipton);
    } else if (value === "Keurig Dr. Pepper") {
        createBrandFields(keurigDrPepper);
    } else if (value === "Pepsi Co") {
        createBrandFields(pepsiCo);
    }

    inputToggles()
}

function createBrandFields(objects) {

    for (let obj of objects) {
        const brandOption = document.createElement("option");
        brandOption.innerText = `${obj.brand}`;
        brandField.appendChild(brandOption);
    }
}

function createSubFields(value) {

    if (value === "Buffalo Rock") {
        createFields(buffaloRock);
    } else if (value === "Celsius") {
        createFields(celsius);
    } else if (value === "Lipton Teas") {
        createFields(lipton);
    } else if (value === "Keurig Dr. Pepper") {
        createFields(keurigDrPepper);
    } else if (value === "Pepsi Co") {
        createFields(pepsiCo);
    }

    inputToggles();

    function createFields(objects) {
        const removeChildren = (options) => {
            for (let i = 1; i < options.children.length; ++i) {
                options.removeChild(varietyField.lastChild);
            }
        }

        removeChildren(varietyField);
        removeChildren(flavorField);
        removeChildren(sizeField);

        for (i = 0; i < objects.length; i++) {
            if (brandField.value === objects[i].brand) {
                let brandSelected = objects[i];
                for (j = 0; j < brandSelected.variety.length; j++) {
                    const varietyOption = document.createElement("option");
                    varietyOption.innerText = `${brandSelected.variety[j]}`;
                    varietyField.appendChild(varietyOption);
                }
                const varietyArray = document.querySelectorAll("#variety option");
                varietyArray[1].setAttribute("selected", "");
                for (j = 0; j < brandSelected.flavor.length; j++) {
                    const flavorOption = document.createElement("option");
                    flavorOption.innerText = `${brandSelected.flavor[j]}`;
                    flavorField.appendChild(flavorOption);
                }
                const flavorArray = document.querySelectorAll("#flavor option");
                flavorArray[1].setAttribute("selected", "");
                for (j = 0; j < brandSelected.size.length; j++) {
                    const sizeOption = document.createElement("option");
                    sizeOption.innerText = `${brandSelected.size[j]}`;
                    sizeField.appendChild(sizeOption);
                }
                const sizeArray = document.querySelectorAll("#size option");
                sizeArray[1].setAttribute("selected", "");
            }
        }
    }
}

function addItem() {
    const fillItem = document.createElement("div");
    fillItem.classList.add("todo");
    listTable.appendChild(fillItem);

    const listedItem = document.createElement("p");
    listedItem.classList.add("listItem");
    fillItem.appendChild(listedItem);
    if (brandField.value === ""
        || flavorField.value === ""
        || varietyField.value === ""
        || sizeField.value === ""
        || (cases.value === "0" || cases.value === "")
        && (units.value === "0" || units.value === "")) {
        const parent = listedItem.parentNode;
        return parent.remove();
    }
    let listItemText = `${brandField.value} `;
    if (varietyField.value != "Original") {
        listItemText += `${varietyField.value} `;
    }
    if (flavorField.value !== "None") {
        listItemText += `${flavorField.value} `;
    }
    listItemText += `${sizeField.value} needs`;
    if (parseInt(cases.value) === 1) {
        listItemText += ` ${cases.value} case`;
    } else if (parseInt(cases.value) > 1) {
        listItemText += ` ${cases.value} cases`;
    }
    if (cases.value && units.value !== "") {
        listItemText += ` and`;
    }
    if (parseInt(units.value) === 1) {
        listItemText += ` ${units.value} unit`;
    } else if (parseInt(units.value) > 1) {
        listItemText += ` ${units.value} units`;
    }
    listedItem.innerHTML = listItemText;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteThis");
    deleteBtn.innerHTML = "&#10060";
    fillItem.appendChild(deleteBtn);

    function deleteItem() {
        const parent = deleteBtn.parentNode;
        parent.remove();
    }

    deleteBtn.onclick = () => deleteItem();
}

function inputToggles() {
    if (companyField.value != "") {
        brandField.removeAttribute("disabled");
    } else if (companyField.value === "") {
        brandField.setAttribute("disabled", "");
    }

    if (brandField.value != "") {
        varietyField.removeAttribute("disabled");
        flavorField.removeAttribute("disabled");
        sizeField.removeAttribute("disabled");
        cases.removeAttribute("disabled");
        units.removeAttribute("disabled");
    } else if (brandField.value === "") {
        varietyField.setAttribute("disabled", "");
        flavorField.setAttribute("disabled", "");
        sizeField.setAttribute("disabled", "");
        cases.setAttribute("disabled", "");
        units.setAttribute("disabled", "");
    }
}

function emptyField(element) {
    element.value = "";
}

function resetList() {
    listTable.innerHTML = "";
}