
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

let numbers = [20, 10, 25, 89, 56, 53, 91, 34, 27, 93, 23, 12, 9, 67, 85, 13, 46, 74, 96, 71]

const runCode = () => {

    // א
    numbers.forEach((number) => console.log(number))

    // ב
        let value
        value = numbers.find((number)=> number >10)
        console.log(value)

    // ג
    let value 
    value = numbers.find((number) => number>=50)
    console.log(value)

    // ד
    let value
    value = numbers.find((number) => { return number % 2 !== 0})
    console.log(value)

    // ה
    let value 
    value =  numbers.filter((number)=> number>50)
    console.log(value)

    // ו
    let value
    value = numbers.findIndex(number => number >50)
    console.log(value)

    // ז
    let evenNumbers = []
    evenNumbers = numbers.map(number => number % 2 === 0)
    console.log(evenNumbers)

    // ח
    let value
    value= numbers.reduce((prev, item)=> {
         if(prev<item){
             return item
         }else{
             return prev
         }
    },0)
    console.log(value)

    // ט
    let value
    value = numbers.reduce((prev, item)=>{
        if (prev> item){
            return item
        } else {
            return prev
        }

    })
    console.log(value)
}