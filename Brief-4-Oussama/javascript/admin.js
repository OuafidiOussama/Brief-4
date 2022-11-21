const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const more= document.querySelector('.more')
const display1 = document.querySelector('.shownon1')
const display2 = document.querySelector('.shownon2')
const close_more = document.querySelector('.close-btn-more')
btn2.addEventListener('click', ()=>{
    more.classList.remove('hide')
    page.classList.add('blur')
    
})
close_more.addEventListener('click', ()=> {
    more.classList.add('hide')
    page.classList.remove('blur')

})
btn3.addEventListener('click', ()=>{
    display1.classList.toggle('hide');
    
})
btn4.addEventListener('click', ()=>{
    display2.classList.toggle('hide');
    
})