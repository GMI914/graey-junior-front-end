let test1 = [1, 2, 3, 4];

// console.log(...test1)
// console.log(1, 2, 3, 4)

// test1[0] = 5;
// test11[2] = 15;

// console.log(test1, test11);

// test1 = 'giorgi';

let test2 = 2;

test2 = 'nika';

const test3 = 3;

// test3 = 'mari';

let test4 = [
    1, 2, 'giorgi', 5.4,
    {
        name: 'giorgi',
        surname: 'saralidze',
        age: {
            number: 31,
            bday: [1, 2, 'giorgi', 5.4, [1, 2]]
        },
        'full name': 'giorgi saralidze'
    }
];

// test4.splice(2, 4)

let test5 = {
    name: 'giorgi',
    surname: 'saralidze',
    age: {
        number: 31,
        bday: [1, 2, 'giorgi', 5.4, [1, 2]]
    },
    'full name': 'giorgi saralidze',

    func: function (b) {
        this.age.number += b

        // console.log(this.age.number)

        return (a) => {
            console.log(a + b, this)
        }
    }
}

// const ans1 = test5.func(6)

// delete test5.func

// ans1(5)

const test6 = function (a, b) {
    console.log(a + b)
}

function test7(a, b) {
    console.log(a * b)
}

const test8 = (a, b) => {
    console.log(a / b)
}

// test6(5, 6)
// test7(5, 6)
// test8(10, 2)

let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]

console.log(arr1 = [...arr2, ...arr1, 10, 11, 12])

let obj1 = {
    name: 'giorgi',
    surname: 'saralidze',
    age: 17
}

let obj2 = {
    fullName: 'nata',
    surname: 'zenaishvili',
    age: 20
}

const person1 = { ...obj1, ...obj2, age: 18 }

const arr3 = arr1.map((el) => {
    return el*el
})

console.log(arr3)

// if (null == 0) {
// }

if ('0' === '0') {

}