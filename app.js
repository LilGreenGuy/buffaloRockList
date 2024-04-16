const pepsiCo = [
    {
        brand: ["Aquafina", "Lifewater", "Lipton", "Mug", "Propel", "Rockstar", "SoBe", "Starry"],
        variety: ["Original", "Diet", "Zero"],
        flavor: ["None", "Baja", "Caffeine Free", "Code Red", "Fruit Splash", "Livewire", "Voltage", "Wild Cherry",],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "8pk", "10pk", "12pk", "18pk", "24pk", "32pk"]
    },
    {
        brand: ["Gatorade"],
        variety: ["Original", "Zero", "Fast Twitch", "Fit"],
        flavor: ["Cool Blue", "Cucumber Lime", "Fruit Punch", "Glacier Cherry", "Glacier Freeze", "Grape", "Lemon Lime", "Orange"],
        size: ["20oz", "28oz", "128oz", "6pk", "8pk", "12pk", "18pk"],
    },
    {
        brand: ["Mountain Dew"],
        variety: ["Original", "Diet", "Zero"],
        flavor: ["None", "Baja", "Code Red", "Frostbite", "Livewire", "Major Melon", "Voltage"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "8pk", "10pk", "12pk", "24pk"]
    },
    {
        brand: ["Pepsi"],
        variety: ["Original", "Diet", "Zero"],
        flavor: ["None", "Wild Cherry"],
        size: ["20oz", "2LT", "6pk-10oz", "6pk-16oz", "8pk", "10pk", "12pk", "24pk"]
    },
    {
        brand: ["Aquafina"],
        variety: ["None"]
    }
    // {
    //     brand: ["Pepsi", "Mountain Dew", "Starry", "Gatorade", "Aquafina", "Propel", "Lipton", "Mug", "Lifewater", "Rockstar", "SoBe"],
    //     flavors: ["Baja", "Code Red", "Livewire", "Voltage", "Wild Cherry",],
    //     sizes: ["20oz", "2LT", "6pk", "8pk", "10pk", "12pk", "18pk", "24pk", "32pk"],
    //     types: ["Original", "Diet", "Zero"]
    // }
]

const keurigDrPepper = [
    {
        brand: ["AShoc", "Sundrop", "Dr. Pepper", "7up", "A&W", "Canada Dry", "Crush", "Bai", "Deja Blue", "Hawaiian Punch", "RC Cola", "Diet Rite",
            "Schweppes", "Snapple", "Squirt", "Vernors"],
        variety: [],
        flavor: ["Cream Soda", "Orange", "Strawberry", "Strawberries and Cream"],
        size: []
    }]


const buffaloRock = [
    {
        brand: ["Buffalo Rock Ginger Ale"],
        variety: ["Original", "Diet"],
        flavor: "None",
        size: "12pk"
    },
    {
        brand: ["Grapico"],
        variety: ["Original, Diet"],
        flavor: "None",
        size: ["20oz", "2LT", "12pk"]
    },
    {
        brand: ["Sunfresh"],
        variety: ["Original, Diet"],
        flavor: "None",
        size: ["20oz", "2LT", "12pk"]
    }
]


const celsius = [
    {
        brand: ["Celsius Live Fit"],
        variety: ["Original Variety", "Fizz Free Variety", "Space Variety", "Vibe Variety"],
        flavor: ["Arctic Vibe", "Astro Vibe", "Blue Razz Lemonade", "Cosmic Vibe", "Cola", "Fantasy Vibe", "Fuji Apple Pear",
            "Galaxy Vibe", "Grape Rush", "Green Apple Cherry", "Kiwi Guava", "Lemon Lime", "Mango Passionfruit", "Oasis Vibe",
            "Orange", "Orangecicle", "Peach Mango", "Peach Vibe", "Raspberry Acai", "Raspberry Peach", "Strawberry Guava",
            "Strawberry Lemonade", "Tropical Vibe", "Watermelon", "Watermelon Lemon"],
        size: ["12oz", "4pk", "12pk"]
    },
    {
        brand: ["Celsius Essentials"],
        variety: "Original Variety",
        flavor: ["Blue Crush", "Cherry Limeade", "Dragonberry", "Fruit Burst", "Mango Tango"],
        size: ["16oz, 12pk"]
    }
]

const brandField = document.getElementById("brand");
const flavorField = document.getElementById("flavor");
const varietyField = document.getElementById("variety");
const sizeField = document.getElementById("size");
const submitBtn = document.querySelector(".submit")
const listTable = document.querySelector(".table");
const cases = document.getElementById("case");
const units = document.getElementById("unit");
// const deleteBtn = document.querySelectorAll(".deleteThis")
const resetBtn = document.querySelector(".reset")

submitBtn.onclick = () => addItem();
resetBtn.onclick = () => resetList();
// deleteBtn.onclick = () => deleteItem();


function createBrands(objects) {
    for (let object of objects) {
        const brandOption = document.createElement("option");
        brandOption.innerText = `${object.brand}`
        brandField.appendChild(brandOption);
    }
    function changeDropDowns(e) {
        console.log(e.target.value)
        if (e.target === "Pepsi") {
            console.log("pepsi")
            for (i = 0; i < object.flavor.length; i++) {
                const flavorOption = document.createElement("option");
                flavorOption.innerText = `${object.flavor[i]}`
                flavorField.appendChild(flavorOption);
            }
        }
    }

    brandField.onchange = (e) => changeDropDowns(e.target.value);


    // for (i = 0; i < objects.size.length; i++) {
    //     const sizeOption = document.createElement("option");
    //     sizeOption.innerText = `${objects.size[i]}`
    //     sizeField.appendChild(sizeOption);
    // }
    // for (i = 0; i < objects.variety.length; i++) {
    //     const varietyOption = document.createElement("option");
    //     varietyOption.innerText = `${objects.variety[i]}`
    //     varietyField.appendChild(varietyOption);
    // }
}

function chooseBrand(brand) {
    if (brand === "Celsius ") {

    }
}

function addItem() {
    const fillItem = document.createElement("div");
    fillItem.classList.add("todo");
    listTable.appendChild(fillItem);

    const listedItem = document.createElement("p");
    listedItem.classList.add("listItem");
    if (brandField.value === ""
        || flavorField.value === ""
        || varietyField.value === ""
        || sizeField.value === ""
        || (cases.value === "0" || cases.value === "") && (units.value === "0" || units.value === "")) {
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
        listItemText += ` ${cases.value} case`
    } else if (parseInt(cases.value) > 1) {
        listItemText += ` ${cases.value} cases`
    }
    if (parseInt(units.value) === 1) {
        listItemText += ` ${units.value} unit`
    } else if (parseInt(units.value) > 1) {
        listItemText += ` ${units.value} units`
    }
    listedItem.innerHTML = listItemText;
    fillItem.appendChild(listedItem);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteThis");
    deleteBtn.innerText = "X"
    fillItem.appendChild(deleteBtn);

    function deleteItem() {
        const parent = deleteBtn.parentNode;
        parent.remove();
    }

    deleteBtn.onclick = () => deleteItem();
}

function resetList() {
    listTable.innerHTML = ""
}


createBrands(pepsiCo)
createBrands(keurigDrPepper)
createBrands(buffaloRock)
createBrands(celsius)