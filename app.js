
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

let productsById = new Map()

productsById.set(1020, 'Milk')
productsById.set(1021, 'Bread')
productsById.set(1022, 'Banana')
productsById.set(1023, 'Cream')
productsById.set(1024, 'Chease')

const runCode = () => {

    for(let product of productsById.keys()){
        console.log(product)
    }
    for (let product of productsById.values()){
        console.log(product)
    }
    for(let[key, value] of productsById.entries()) {
        console.log(key,value)
    }
//     if (productsById.has (7)){
//           console.log('great')
//     }else{
//         alert('the product 7 doesnt exist')
//     }

//     if(productsById.has(3)){
//         console.log('great product')
//     }

}

//////////////////////////////////////
//------------ ex 4---------


// let carsIdList = new Map()

