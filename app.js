const inputForm = document.querySelector("#inputForm");
const inputs = {
    companyField: inputForm.elements.parentCompany,
    brandField: inputForm.elements.brand,
    flavorField: inputForm.elements.flavor,
    varietyField: inputForm.elements.variety,
    sizeField: inputForm.elements.size,
    cases: inputForm.elements.cases,
    units: inputForm.elements.units,
    submitBtn: inputForm.elements.add,
    resetBtn: inputForm.elements.reset
};

const listTable = document.querySelector(".table");

const eventListeners = [
    inputForm.addEventListener("submit", function (e) {
        e.preventDefault();
    }),
    window.addEventListener("click", function (e) {
        e.target.focus();
    }),
    inputs.submitBtn.addEventListener("click", function () {
        addItem();
    }),
    inputs.cases.addEventListener("click", () => emptyField(inputs.cases)),
    inputs.units.addEventListener("click", () => emptyField(inputs.units)),
    inputs.companyField.addEventListener("change", function () {
        createBrands(inputs.companyField.value);
    }),
    inputs.brandField.addEventListener("change", function () {
        createInputFields(inputs.companyField.value);
    }),
    inputs.resetBtn.addEventListener("click", () => {
        resetList();
    })
];

function createBrands(parentCompany) {
    if (inputs.brandField.value !== "") {
        removeChildren();
    }

    let brandFieldChildren = inputs.brandField.children.length;
    for (let i = 1; i < brandFieldChildren; ++i) {
        inputs.brandField.removeChild(inputs.brandField.lastChild);
    }

    if (parentCompany === "Buffalo Rock") {
        createBrandFields(buffaloRock);
    } else if (parentCompany === "Celsius") {
        createBrandFields(celsius);
    } else if (parentCompany === "Lipton Teas") {
        createBrandFields(lipton);
    } else if (parentCompany === "Keurig Dr. Pepper") {
        createBrandFields(keurigDrPepper);
    } else if (parentCompany === "Pepsi Co") {
        createBrandFields(pepsiCo);
    }
    inputToggles();
}

function createBrandFields(parentCompany) {

    for (let brandObj of parentCompany) {
        const brandOption = document.createElement("option");
        brandOption.innerText = `${brandObj.brand}`;
        inputs.brandField.append(brandOption);
    }
}

function createInputFields(parentCompany) {

    if (parentCompany === "Buffalo Rock") {
        createFields(buffaloRock);
    } else if (parentCompany === "Celsius") {
        createFields(celsius);
    } else if (parentCompany === "Lipton Teas") {
        createFields(lipton);
    } else if (parentCompany === "Keurig Dr. Pepper") {
        createFields(keurigDrPepper);
    } else if (parentCompany === "Pepsi Co") {
        createFields(pepsiCo);
    }

    inputToggles();

    function createOptions(inputField, string) {
        const inputOption = document.createElement("option");
        // Uses the passed through option/string from the array in the calling function to 
        // Print the string's text into the element.
        inputOption.innerText = `${string}`;
        inputField.append(inputOption);
    }

    function createFieldsLoop(fieldArray, brandObject) {
        // Loops over the passed through array
        for (const fieldOption of fieldArray) {
            // Uses the passed through array and brand object from the calling function to check
            // if the array matches the selected option and then passes through the array strings
            // The if logic is to determine which field's array is being iterated.
            if (fieldArray === brandObject.variety) {
                createOptions(inputs.varietyField, fieldOption);
            } else if (fieldArray === brandObject.flavor) {
                createOptions(inputs.flavorField, fieldOption);
            } else {
                createOptions(inputs.sizeField, fieldOption);
            }
        }
    }

    function selectFirstOption(string) {
        //Selects all of the input key passed through to return as a nodelist
        const inputArray = document.querySelectorAll(`#${string} option`);
        //Selects the second option in a given inpout using the index from the nodelist that returns from querySelectorAll
        inputArray[1].setAttribute("selected", "");
    }

    function createFields(company) {
        removeChildren();
        for (const brandObject of company) {
            if (inputs.brandField.value === brandObject.brand) {
                // Checks to see if the looped over brand object is the same as the one selected in the input
                for (let brand in brandObject) {
                    if (brandObject[brand] === brandObject.brand) {
                        //  Used to filter out the brand key value pairs so only the other three inputs are accessed
                        continue;
                    }
                    console.log(brandObject[brand])
                    // Sends the variety/flavor/size fields through via a loop so only one function call is required
                    createFieldsLoop(brandObject[brand], brandObject);
                    selectFirstOption(brand);
                }
            }
        }
    }
}

function addItem() {
    const fillItem = document.createElement("div");
    fillItem.classList.add("todo");
    listTable.append(fillItem);

    const listedItem = document.createElement("p");
    listedItem.classList.add("listItem");
    fillItem.append(listedItem);
    if (inputs.brandField.value === ""
        || inputs.flavorField.value === ""
        || inputs.varietyField.value === ""
        || inputs.sizeField.value === ""
        || (inputs.cases.value === "0" || inputs.cases.value === "")
        && (inputs.units.value === "0" || inputs.units.value === "")) {
        const parent = listedItem.parentNode;
        return parent.remove();
    }
    let listItemText = `<b>${inputs.brandField.value} `;
    let listItemCounts = "";
    if (inputs.varietyField.value != "Original") {
        listItemText += `${inputs.varietyField.value} `;
    }
    if (inputs.flavorField.value !== "None") {
        listItemText += `${inputs.flavorField.value} `;
    }
    listItemText += `${inputs.sizeField.value}</b> needs `;
    if (parseInt(inputs.cases.value) === 1) {
        listItemCounts += `${inputs.cases.value} case`;
    } else if (parseInt(inputs.cases.value) > 1) {
        listItemCounts += `${inputs.cases.value} cases`;
    }
    if (inputs.cases.value && inputs.units.value !== "") {
        listItemCounts += ` and`;
    }
    if (parseInt(inputs.units.value) === 1) {
        listItemCounts += ` ${inputs.units.value} unit`;
    } else if (parseInt(inputs.units.value) > 1) {
        listItemCounts += ` ${inputs.units.value} units`;
    }
    listedItem.innerHTML = listItemText + listItemCounts;

    function createNotification() {
        const feedback = document.createElement("p");
        feedback.classList.add("feedback");
        feedback.innerHTML = `${listItemText.slice(0, -6)} added to list.`;
        document.body.append(feedback);
        setTimeout(() => {
            feedback.style.opacity = "1";
            setTimeout(() => {
                setTimeout(() => feedback.remove(), 500);
                feedback.style.opacity = "0";
            }, 1250);
        }, 100);
    }

    const buttonGroup = document.createElement("span");
    buttonGroup.classList.add("buttonGroup");
    fillItem.append(buttonGroup);

    const editBtn = document.createElement("button");
    editBtn.classList.add("editThis");
    editBtn.innerHTML = "&#9998";
    buttonGroup.append(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteThis");
    deleteBtn.innerHTML = "&#10060";
    buttonGroup.append(deleteBtn);

    editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const editBox = document.createElement("input");
        editBox.classList.add("editBox");
        editBox.name = "editBox";
        editBox.type = "text";
        editBox.placeholder = listItemCounts;
        listedItem.innerHTML = listItemText;
        listedItem.append(editBox);
        editBox.focus();
        editBox.addEventListener("blur", function () {
            if (this.value === "") {
                listedItem.innerHTML = listItemText + listItemCounts;
            } else {
                listedItem.innerHTML = listItemText + this.value;
            }
        });
        editBox.addEventListener("change", function () {
            listedItem.innerHTML = listItemText + this.value;
        });
    });

    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        fillItem.style.opacity = "0";
        setTimeout(() => {
            fillItem.remove();
        }, 500);
    });
    createNotification();
    emptyFillFields();
}

function inputToggles() {
    if (inputs.companyField.value != "") {
        inputs.brandField.removeAttribute("disabled");
    } else if (inputs.companyField.value === "") {
        inputs.brandField.setAttribute("disabled", "");
    }

    if (inputs.brandField.value != "") {
        // If the brand field input has a brand selected this will loop through the inputs and remove
        // the disabled attribute to enable them.
        for (let key in inputs) {
            inputs[key].removeAttribute("disabled");
        }
    } else if (inputs.brandField.value === "") {
        // Destructures the inputs object to pull out the key value pairs I really
        // want to access.
        const { companyField, brandField, ...remainingInputs } = inputs
        for (let key in remainingInputs) {
            // Does the opposite of above. Adds disabled attribute to the input fields
            // if the brand is left unselected
            remainingInputs[key].setAttribute("disabled", "")
        }
    }
}

function emptyField(element) {
    element.value = "";
}

function resetList() {
    listTable.innerHTML = "";
    emptyFillFields();
}

function removeChildren() {

    for (let key in inputs) {
        // Loop through the inputs object to filter out the inputs that AREN'T
        //  flavorField, varietyField, and sizeField
        if (inputs[key] !== inputs.varietyField &&
            inputs[key] !== inputs.flavorField &&
            inputs[key] !== inputs.sizeField) {
            continue;
        }
        const inputFieldLength = inputs[key].children.length;
        removeKidsLoop(inputFieldLength, inputs[key]);
    }

    function removeKidsLoop(children, field) {
        //Removes all but the very first option in the select fields to return it to normal
        for (let i = 1; i < children; ++i) {
            field.removeChild(field.lastChild);
        }
    }
}

function emptyFillFields() {
    inputs.cases.value = "";
    inputs.units.value = "";
}