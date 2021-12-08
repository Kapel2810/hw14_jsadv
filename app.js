 
//////////////////////////////
//------------- ex1-------------

let emailGroup = new Set()

emailGroup.add('ronen@mail.com')
emailGroup.add('malka@mail.com')
emailGroup.add('adi@mail.com')
emailGroup.add('darian@mail.com')
emailGroup.add('moti@mail.com')

 const runCode = ()=> {
    for (let email of emailGroup){
        console.log(email)
    }
    if (emailGroup.has('moishe@gmail.com')){
        console.log('great')
    }else {
        console.log('there is no such email in email group')
    }

 }