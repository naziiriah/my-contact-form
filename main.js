const form = document.getElementById('form-control')
const nam = document.getElementById('name')


form.addEventListener('submit', verifyname())

function verifyname(){
    const nameValue = nam.input
     if(nameValue === ""){
        forError('Please fill in the void')
     }else{
         forSuccess('Success!!')
     }
   
}

function forError(message){
    const errrParent = nam.nextElementSibling
    errrParent.innerHTML = message


}
function forSuccess(message){
    const errrParent = nam.nextElementSibling
    errrParent.innerHTML = message
    const success = document.querySelector('.error1')
    success.style.color = 'blue'
    nam.style.borderBottom = 'blue 2px solid'
    
}
