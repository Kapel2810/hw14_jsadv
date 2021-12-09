
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

let pointPositionList = [
    { x: 25, y: 40 },
    { x: 83, y: 30 },
    { x: 7, y: 14 },
    { x: 26, y: 88 },
    { x: 2, y: 38 },
    { x: 53, y: 89 },
    { x: 29, y: 52 },
    { x: 38, y: 94 },
    { x: 77, y: 79 },
    { x: 54, y: 90 },
    { x: 19, y: 85 },
    { x: 1, y: 91 },
    { x: 63, y: 48 },
    { x: 100, y: 38 },
    { x: 70, y: 52 },
    { x: 6, y: 18 },
    { x: 48, y: 99 },
    { x: 41, y: 20 },
    { x: 97, y: 74 },
    { x: 73, y: 95 }]

const getRandomNumber = (min, max) => {

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNumber
}
const runCode = () => {


    for (let i = 0; i < 20; i++) {
        let xPosition = getRandomNumber(1, 100)
        let yPosition = getRandomNumber(1, 100)
        let position = {
            x: xPosition,
            y: yPosition
        }
        pointPositionList.push(position)

    }

    console.log(pointPositionList)


    א
    let alef = pointPositionList.forEach(object =>console.log(object))
    console.log(alef)

    ב

    let bet = pointPositionList.find(position => position.x >position.y)
    console.log(bet)

    ג
     let gimel = pointPositionList.find(position => position.y>50)
     console.log(gimel)

    ד
    let dalet = pointPositionList.filter(position => position.x %2===0)
    console.log(dalet)

    ה
    let hey = pointPositionList.filter( position => position.y>50)
    console.log(hey)

    ו
    let vav = pointPositionList.findIndex(position => position.x >50)
    console.log(vav)

    ז
    let zayn = pointPositionList.map(position => position)
    console.log(zayn)

    ח
    let chet = pointPositionList.reduce((prev, position)=>{
        if(prev>position.x){
            return position.x
        }else {
            return prev
        }
    })
    console.log(chet)
}






