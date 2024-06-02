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
        this.blur();
    }),
    window.addEventListener("click", function (e) {
        e.target.focus();
    }),
    inputs.submitBtn.addEventListener("click", function () {
        addItem();
        this.blur();
    }),
    inputs.cases.addEventListener("click", () => emptyField(inputs.cases)),
    inputs.units.addEventListener("click", () => emptyField(inputs.units)),
    inputs.companyField.addEventListener("change", function () {
        createBrands(inputs.companyField.value);
        this.blur();
    }),
    inputs.brandField.addEventListener("change", function () {
        createInputFields(inputs.companyField.value)
        this.blur();
    }),
    inputs.varietyField.addEventListener("change", function () {
        this.blur();
    }),
    inputs.flavorField.addEventListener("change", function () {
        this.blur();
    }),
    inputs.sizeField.addEventListener("change", function () {
        this.blur();
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

    for (let brand of parentCompany) {
        const brandOption = document.createElement("option");
        brandOption.innerText = `${brand.brand}`;
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

    function createSubFields(object, property) {
        const inputOption = document.createElement("option");
        inputOption.innerText = `${property}`;
        object.append(inputOption);
    }

    function createFieldsLoop(object, brandObject) {
        for (const obj of object) {
            if (object === brandObject.variety) {
                createSubFields(inputs.varietyField, obj);
            } else if (object === brandObject.flavor) {
                createSubFields(inputs.flavorField, obj);
            } else {
                createSubFields(inputs.sizeField, obj);
            }
        }
    }

    function selectFirstOption(string) {
        const inputArray = document.querySelectorAll(`#${string} option`);
        inputArray[1].setAttribute("selected", "");
    }

    function createFields(company) {
        removeChildren();
        for (const brandObject of company) {
            if (inputs.brandField.value === brandObject.brand) {
                for (let brand in brandObject) {
                    if (brandObject[brand] === brandObject.brand) {
                        continue;
                    }
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
        editBox.classList.add("editBox")
        editBox.name = "editBox";
        editBox.type = "text";
        editBox.placeholder = listItemCounts;
        listedItem.innerHTML = listItemText;
        listedItem.append(editBox);
        editBox.focus();
        editBox.addEventListener("blur", function () {
            console.log(this.value)
            console.log(typeof(this.value))
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
    emptyFillFields();
}

function inputToggles() {
    if (inputs.companyField.value != "") {
        inputs.brandField.removeAttribute("disabled");
    } else if (inputs.companyField.value === "") {
        inputs.brandField.setAttribute("disabled", "");
    }

    if (inputs.brandField.value != "") {
        for (let prop in inputs) {
            inputs[prop].removeAttribute("disabled");
        }
    } else if (inputs.brandField.value === "") {
        const { companyField, brandField, ...remainingInputs } = inputs
        for (let prop in remainingInputs) {
            remainingInputs[prop].setAttribute("disabled", "")
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

    for (let input in inputs) {
        if (inputs[input] !== inputs.varietyField && inputs[input]
            !== inputs.flavorField && inputs[input]
            !== inputs.sizeField) {
            continue;
        }
        const inputFieldLength = inputs[input].children.length;
        removeKidsLoop(inputFieldLength, inputs[input]);
    }

    function removeKidsLoop(children, field) {
        for (let i = 1; i < children; ++i) {
            field.removeChild(field.lastChild);
        }
    }
}

function emptyFillFields() {
    inputs.cases.value = "";
    inputs.units.value = "";
}