const slide = document.querySelector('.slide');
const slideImages = document.querySelectorAll('.slide img');

//button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const btnUp = document.querySelector('.btnUp');

// counter
let counter = 1;
let size = slideImages[0].clientWidth;


slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//button Listeners

nextBtn.addEventListener('click', ()=>{
    if(counter >= slideImages.length - 1) return;
    size = slideImages[0].clientWidth;
    slide.style.transition = 'transform 600ms ease-in-out';
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    size = slideImages[0].clientWidth;
    slide.style.transition = 'transform 600ms ease-in-out';
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})


slide.addEventListener('transitionend', function(){
    size = slideImages[0].clientWidth;
    if(slideImages[counter].id === 'lastClone'){
        slide.style.transition = 'none';
        counter = slideImages.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if(slideImages[counter].id === 'firstClone'){
        slide.style.transition = 'none';
        counter = slideImages.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
})

window.onload = function slider(){
    if(document.body.clientWidth <= 1024){
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        if(counter >= slideImages.length - 1) return;
        size = slideImages[0].clientWidth;
        slide.style.transition = 'transform 600ms ease-in-out';
        counter++;
        slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        //size = slideImages[0].clientWidth;

        if(slideImages[counter].id === 'firstClone'){
        slide.style.transition = 'transform 600ms ease-in-out';;
        counter = slideImages.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        }
        setTimeout(arguments.callee, 3700);
    }
    else {
        if(counter >= slideImages.length - 1) return;
        size = slideImages[0].clientWidth;
        slide.style.transition = 'transform 600ms ease-in-out';
        counter++;
        slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        //size = slideImages[0].clientWidth;

        if(slideImages[counter].id === 'firstClone'){
        slide.style.transition = 'transform 600ms ease-in-out';;
        counter = slideImages.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        }
        setTimeout(arguments.callee, 3700);
    }
}

function moveUp(){
    if(window.pageYOffset >= 72) btnUp.classList.remove('remove');
    else btnUp.classList.add('remove');
    setTimeout(arguments.callee, 1);
}
moveUp();
