
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

let userNameList = new Set()


userNameList.add(prompt('please enter your username'))
userNameList.add(prompt('please enter your username'))
userNameList.add(prompt('please enter your username'))
userNameList.add(prompt('please enter your username'))
userNameList.add(prompt('please enter your username'))

const runCode = ( )=> {
    for(let userName of userNameList){
        console.log(userName)
    } 
    console.log(userNameList.size)
}