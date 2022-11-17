const btn1 = document.querySelector('.btn3')
const btn2 = document.querySelector('.btn4')
const display1 = document.querySelector('.shownon1')
const display2 = document.querySelector('.shownon2')
btn1.addEventListener('click', ()=>{
    display1.classList.toggle('hide');
    
})
btn2.addEventListener('click', ()=>{
    display2.classList.toggle('hide');
    
})
