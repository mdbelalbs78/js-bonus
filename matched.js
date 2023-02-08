const numbers = [45, 65, 23, 98, 19, 22];

// for(let i = 0; i< numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers){
//      console.log(number);
// }

const products = [{
        id: 1,
        name: 'xiami phone one night',
        price: 19000
    },
    {
        id: 2,
        name: 'iphone',
        price: 19000
    },
    {
        id: 3,
        name: 'mack book air',
        price: 119000
    },
    {
        id: 4,
        name: 'lenovo yoga laptop 2025',
        price: 19000
    },
    {
        id: 5,
        name: 'Dell inspiron laptop ',
        price: 19000
    },
    {
        id: 6,
        name: 'Samsung Phone note 7',
        price: 19000
    },
    {
        id: 7,
        name: 'walton Phone',
        price: 19000
    },
    {
        id: 8,
        name: 'Nokia old age gone',
        price: 19000
    },
    {
        id: 9,
        name: 'Phone one',
        price: 19000
    },
];

// for (const product of products) {
//     // console.log(product)
// }

function matchProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            console.log(product);
        }
    }
    return matched;
}

const resutl = matchProducts(products, 'iphone');
console.log(resutl);