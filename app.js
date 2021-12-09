
//////////////////////////////
//------------- ex1-------------

// let emailGroup = new Set()

// emailGroup.add('ronen@mail.com')
// emailGroup.add('malka@mail.com')
// emailGroup.add('adi@mail.com')
// emailGroup.add('darian@mail.com')
// emailGroup.add('moti@mail.com')

//  const runCode = ()=> {
//     for (let email of emailGroup){
//         console.log(email)
//     }
//     if (emailGroup.has('moishe@gmail.com')){
//         console.log('great')
//     }else {
//         console.log('there is no such email in email group')
//     }

//  }

//////////////////////////////////////////
//-------------ex2---------------

// let userNameList = new Set()


// userNameList.add(prompt('please enter your username'))
// userNameList.add(prompt('please enter your username'))
// userNameList.add(prompt('please enter your username'))
// userNameList.add(prompt('please enter your username'))
// userNameList.add(prompt('please enter your username'))

// const runCode = ( )=> {
//     for(let userName of userNameList){
//         console.log(userName)
//     } 
//     console.log(userNameList.size)
// }

/////////////////////////////////////
//----------ex 3------------

// let productsById = new Map()

// productsById.set(1020, 'Milk')
// productsById.set(1021, 'Bread')
// productsById.set(1022, 'Banana')
// productsById.set(1023, 'Cream')
// productsById.set(1024, 'Chease')

// const runCode = () => {

//     for(let product of productsById.keys()){
//         console.log(product)
//     }
//     for (let product of productsById.values()){
//         console.log(product)
//     }
//     for(let[key, value] of productsById.entries()) {
//         console.log(key,value)
//     }
//     if (productsById.has (7)){
//           console.log('great')
//     }else{
//         alert('the product 7 doesnt exist')
//     }

//     if(productsById.has(3)){
//         console.log('great product')
//     }

// }

//////////////////////////////////////
//------------ ex 4---------


// let carsIdList = new Map()

// let car = {
//     carId: 1098,
//     manufactory: "Mazda",
//     molel: "3",
//     year: 2011
// }

//////////////////////////////////
//-----arrays----------
//----ex 1 ------

// let numbers = [20, 10, 25, 89, 56, 53, 91, 34, 27, 93, 23, 12, 9, 67, 85, 13, 46, 74, 96, 71]

// const runCode = () => {

//     // א
//     numbers.forEach((number) => console.log(number))

//     // ב
//         let value
//         value = numbers.find((number)=> number >10)
//         console.log(value)

//     // ג
//     let value 
//     value = numbers.find((number) => number>=50)
//     console.log(value)

//     // ד
//     let value
//     value = numbers.find((number) => { return number % 2 !== 0})
//     console.log(value)

//     // ה
//     let value 
//     value =  numbers.filter((number)=> number>50)
//     console.log(value)

//     // ו
//     let value
//     value = numbers.findIndex(number => number >50)
//     console.log(value)

//     // ז
//     let evenNumbers = []
//     evenNumbers = numbers.map(number => number % 2 === 0)
//     console.log(evenNumbers)

//     // ח
//     let value
//     value= numbers.reduce((prev, item)=> {
//          if(prev<item){
//              return item
//          }else{
//              return prev
//          }
//     },0)
//     console.log(value)

//     // ט
//     let value
//     value = numbers.reduce((prev, item)=>{
//         if (prev> item){
//             return item
//         } else {
//             return prev
//         }

//     })
//     console.log(value)
// }

////////////////////////////////
//-------- ex 2 --------------

// let pointPositionList=[]
// let pointPositionList = [
//     { x: 25, y: 40 },
//     { x: 83, y: 30 },
//     { x: 7, y: 14 },
//     { x: 26, y: 88 },
//     { x: 2, y: 38 },
//     { x: 53, y: 89 },
//     { x: 29, y: 52 },
//     { x: 38, y: 94 },
//     { x: 77, y: 79 },
//     { x: 54, y: 90 },
//     { x: 19, y: 85 },
//     { x: 1, y: 91 },
//     { x: 63, y: 48 },
//     { x: 100, y: 38 },
//     { x: 70, y: 52 },
//     { x: 6, y: 18 },
//     { x: 48, y: 99 },
//     { x: 41, y: 20 },
//     { x: 97, y: 74 },
//     { x: 73, y: 95 }]

// const getRandomNumber = (min, max) => {

//     let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
//     return randomNumber
// }
// const runCode = () => {


//     for (let i = 0; i < 20; i++) {
//         let xPosition = getRandomNumber(1, 100)
//         let yPosition = getRandomNumber(1, 100)
//         let position = {
//             x: xPosition,
//             y: yPosition
//         }
//         pointPositionList.push(position)

//     }

//     console.log(pointPositionList)


//     א
//     let alef = pointPositionList.forEach(object =>console.log(object))
//     console.log(alef)

//     ב

//     let bet = pointPositionList.find(position => position.x >position.y)
//     console.log(bet)

//     ג
//      let gimel = pointPositionList.find(position => position.y>50)
//      console.log(gimel)

//     ד
//     let dalet = pointPositionList.filter(position => position.x %2===0)
//     console.log(dalet)

//     ה
//     let hey = pointPositionList.filter( position => position.y>50)
//     console.log(hey)

//     ו
//     let vav = pointPositionList.findIndex(position => position.x >50)
//     console.log(vav)

//     ז
//     let zayn = pointPositionList.map(position => position)
//     console.log(zayn)

//     ח
//     let chet = pointPositionList.reduce((prev, position)=>{
//         if(prev>position.x){
//             return position.x
//         }else {
//             return prev
//         }
//     })
//     console.log(chet)
// }


/////////////////////////////////////
//----------ex 3---------------

let pizzaList = []
let pizzaList = [
    { diameter: 4, slice: 7, adding: 3, price: 76 },
    { diameter: 41, slice: 5, adding: 4, price: 84 },
    { diameter: 2, slice: 1, adding: 3, price: 100 },
    { diameter: 46, slice: 5, adding: 2, price: 98 },
    { diameter: 29, slice: 8, adding: 3, price: 67 },
    { diameter: 29, slice: 6, adding: 2, price: 95 },
    { diameter: 10, slice: 5, adding: 3, price: 51 },
    { diameter: 42, slice: 3, adding: 2, price: 64 },
    { diameter: 25, slice: 4, adding: 4, price: 50 },
    { diameter: 7, slice: 3, adding: 4, price: 86 },
    { diameter: 13, slice: 4, adding: 2, price: 25 },
    { diameter: 50, slice: 3, adding: 1, price: 52 },
    { diameter: 8, slice: 6, adding: 1, price: 69 },
    { diameter: 3, slice: 5, adding: 4, price: 70 },
    { diameter: 21, slice: 4, adding: 4, price: 80 },
    { diameter: 50, slice: 7, adding: 1, price: 82 },
    { diameter: 19, slice: 1, adding: 3, price: 96 },
    { diameter: 50, slice: 8, adding: 3, price: 58 },
    { diameter: 0, slice: 4, adding: 0, price: 61 },
    { diameter: 6, slice: 3, adding: 3, price: 73 }
]

const getRandomNumber = (min, max) => {

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNumber
}
const runCode = () => {

    for (let i = 0; i < 20; i++) {

        let pizza = {
            diameter :getRandomNumber(0,50),
            slice : getRandomNumber(1,8),
            adding: getRandomNumber(0,4),
            price: getRandomNumber(25,100)
        }
        pizzaList.push(pizza)
    }
    console.log(pizzaList)

    א
    let alef =pizzaList.forEach (pizza=>console.log(pizza))
    console.log(alef)

    ב
    let bet = pizzaList.find(pizza => pizza.adding===0)
    console.log(bet)

    ג
    let gimel = pizzaList.find(pizza => pizza.price <30)
    console.log(gimel)

    ד
    let daled = pizzaList.filter(pizza => pizza.diameter <=20)
    console.log(daled)

    ה
    let hey = pizzaList.filter(pizza => pizza.price >= 80)
    console.log(hey)

    ו
    let vav = pizzaList.filter(pizza => pizza.adding===0)
    console.log(vav)

    ז
    let zayn = pizzaList.findIndex(pizza => pizza.slice===6)
    console.log(zayn)

    ח
    let chet = pizzaList.map(pizza => pizza.diameter*2)
    console.log(chet)
    
    ט

    י
    let yod = pizzaList.reduce((total, pizza)=> total+pizza.price,0) 
    console.log(yod)

    יא
    let yodAlef = pizzaList.reduce( (prev,pizza) =>{
        if ( prev<pizza.price){
            return pizza.price
        }else{
            return prev
        }
    },0)
    console.log(yodAlef)
}





