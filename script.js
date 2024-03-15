const elForm = document.querySelector('.form');
const elName = document.querySelector('.name');
const elPassword = document.querySelector('.password');
const elPassword2 = document.querySelector('.password2');
const elBtn = document.querySelector('.btn');
// const elBtn2 = document.querySelector('.btn2');
const elText = document.querySelector('.text');
const elText1 = document.querySelector('.text1');
const elText2 = document.querySelector('.text2');
const elSpan = document.querySelector('.open')
const elOpen = document.querySelector('.open2')
// const elClose = document.querySelector('.open3')
// const elClose = document.querySelector('.open2')


elForm.addEventListener('submit', function (e) {
    e.preventDefault()

    if (elName.value.trim().length < 'aaa'.length) {
        elName.classList.add('false');
        elText.textContent = "Aka Ismingiz kamida 3talik bo'lishi kerak";
        elText.classList.add('danger')
    }
    else  {
        elName.classList.add('false');
        elText.textContent = "";
        elName.classList.add('true');
        elText.classList.remove('danger')

    }


    if(elPassword.value.trim().length < 'qwertyui'.length ) {

        elPassword.classList.add('false');
        elText1.textContent = "Aka paroliz kamida 8talik bo'lishi kerak";
        elText1.classList.add('danger')

    }


    else  {
        elPassword.classList.add('false');
        elText1.textContent = "";
        elPassword.classList.add('true');
        elText1.classList.remove('danger')

    }
    if(elPassword2.value != elPassword.value  ) {

        elPassword2.classList.add('false');
        // elPassword2.style.border = '3px solid #C3A8A3'
        elText2.textContent = "Aka tasdiqlagich paroliz birinchi parol bilan bir xil bo'lishi kerak";
        elText2.style.marginTop = '15px'
        elText2.style.marginLeft = '15px'
        elText2.classList.add('danger')

    }


    else  {
        elPassword2.classList.add('false');
        elText2.textContent = "";
        elPassword2.classList.add('true');
        elText2.classList.remove('danger')

    }
})

elSpan.addEventListener('click', function(e){
    e.preventDefault;
   elSpan.classList.toggle('none')
})
elOpen.addEventListener('click', function(e){
    e.preventDefault;
   elOpen.classList.toggle('none1')
})

elSpan.addEventListener('click', () =>{
    if (elPassword.type == 'text'){
        elPassword.type = 'password'} else elPassword.type = 'text'

})
elOpen.addEventListener('click', () =>{
    if (elPassword2.type == 'text'){
        elPassword2.type = 'password'}
        
        else elPassword2.type = 'text'

})