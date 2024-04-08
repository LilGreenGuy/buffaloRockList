const pepsiCo =
{
    brand: ['Aquafina', 'Gatorade', 'Lifewater', 'Lipton', 'Mountain Dew', 'Mug', 'Pepsi', 'Propel', 'Rockstar', 'SoBe', 'Starry'],
    flavor: ['None', 'Baja', 'Code Red', 'Fruit Splash', 'Livewire', 'Voltage', 'Wild Cherry',],
    variety: ['Original', 'Diet', 'Zero'],
    size: ['20oz', '2LT', '6pk-10oz', '6pk-16oz', '8pk', '10pk', '12pk', '18pk', '24pk', '32pk']
}
// {
//     brand: ['Gatorade'],
//     flavors: ['Cool Blue', 'Cucumber Lime', 'Fruit Punch', 'Glacier Cherry', 'Glacier Freeze', 'Grape', 'Lemon Lime', 'Orange'],
//     sizes: ['20oz', '28oz', '128oz', '6pk', '8pk', '12pk', '18pk'],
//     types: ['Original', 'Zero']
// },
// {
//     brand: ['Pepsi', 'Mountain Dew', 'Starry', 'Gatorade', 'Aquafina', 'Propel', 'Lipton', 'Mug', 'Lifewater', 'Rockstar', 'SoBe'],
//     flavors: ['Baja', 'Code Red', 'Livewire', 'Voltage', 'Wild Cherry',],
//     sizes: ['20oz', '2LT', '6pk', '8pk', '10pk', '12pk', '18pk', '24pk', '32pk'],
//     types: ['Original', 'Diet', 'Zero']
// }


const keurigDrPepper = [
    {
        brand: ['AShoc', 'Sundrop', 'Dr. Pepper', '7up', 'A&W', 'Canada Dry', 'Crush', 'Bai', 'Deja Blue', 'Hawaiian Punch', 'RC Cola', 'Diet Rite',
            'Schweppes', 'Snapple', 'Squirt', 'Vernors'],
        flavor: ['Cream Soda', 'Orange', 'Strawberry', 'Strawberries and Cream'],
        size: ['20oz', '2LT', '6pk', '8pk', '10pk', '12pk', '18pk', '24pk', '32pk'],
        variety: ['Original', 'Diet', 'Zero']
    }
]

const buffaloRock =
{
    brand: ['Buffalo Rock Ginger Ale', 'Dr Wham', 'Grapico', 'Sunfresh'],
    sizes: ['20oz', '2LT', '6pk', '8pk', '10pk', '12pk', '18pk', '24pk', '32pk'],
    Variety: ['Original', 'Diet', 'Zero']
}


const celsius =
{
    brand: 'Celsius',
    flavors: ['Arctic Vibe', 'Astro Vibe', 'Blue Crush', 'Blue Razz Lemonade', 'Cherry Limeade', 'Cosmic Vibe', 'Cola', 'Dragonberry', 'Fantasy Vibe',
        'Fruit Burst', 'Fuji Apple Pear', 'Galaxy Vibe', 'Grape Rush', 'Green Apple Cherry', 'Kiwi Guava', 'Lemon Lime', 'Mango Passionfruit', 'Mango Tango',
        'Oasis Vibe', 'Orange', 'Orangecicle', 'Peach Mango', 'Peach Vibe', 'Raspberry Acai', 'Raspberry Peach', 'Strawberry Guava', 'Strawberry Lemonade',
        'Tropical Vibe', 'Watermelon'],
    sizes: ['12oz', '16oz', '4pk', '12pk'],
    types: ['Essentials', 'Live Fit']
}
const brandField = document.getElementById('brand');
const flavorField = document.getElementById('flavor');
const varietyField = document.getElementById('variety');
const sizeField = document.getElementById('size');
const submitBtn = document.querySelector('.submit')
const listTable = document.querySelector('.table');
const cases = document.getElementById('case');
const units = document.getElementById('unit');

submitBtn.onclick = () => addItem();

function createBrands(objects) {
    for (i = 0; i < objects.brand.length; i++) {
        const brandOption = document.createElement('option');
        brandOption.innerText = `${objects.brand[i]}`
        brandField.appendChild(brandOption);
    }
    for (i = 0; i < objects.flavor.length; i++) {
        const flavorOption = document.createElement('option');
        flavorOption.innerText = `${objects.flavor[i]}`
        flavorField.appendChild(flavorOption);
    }
    for (i = 0; i < objects.size.length; i++) {
        const sizeOption = document.createElement('option');
        sizeOption.innerText = `${objects.size[i]}`
        sizeField.appendChild(sizeOption);
    }
    for (i = 0; i < objects.variety.length; i++) {
        const varietyOption = document.createElement('option');
        varietyOption.innerText = `${objects.variety[i]}`
        varietyField.appendChild(varietyOption);
    }
}

function addItem() {
    const fillItem = document.createElement('div');
    fillItem.classList.add('todo');
    listTable.appendChild(fillItem)

    const listedItem = document.createElement('p');
    listedItem.classList.add('listItem');
    listedItem.innerText = `${brandField.value} ${flavorField.value} ${varietyField.value} ${sizeField.value} needs ${cases.value} cases and ${units.value} units`
    fillItem.appendChild(listedItem);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteThis');
    fillItem.appendChild(deleteBtn);
}

createBrands(pepsiCo)