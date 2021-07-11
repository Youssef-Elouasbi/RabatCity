const Images = document.querySelectorAll('.grid img');
const box = document.querySelector('.box');
const imageBox = document.querySelector('.box img');
const btn = document.querySelector('.box button');
const btnUp = document.querySelector('.btnUp');



box.addEventListener('mouseenter', function(e){
    btn.classList.remove('remove');
})
box.addEventListener('mouseleave', function(){
    btn.classList.add('remove');
})
box.addEventListener('click', function(e){
    btn.classList.toggle('remove');
})

Images.forEach(function(img){
    img.addEventListener('click', open)
});

btn.addEventListener('click', close);

function open(e){
    box.classList.remove('remove');
    const src = e.currentTarget.src;
    imageBox.src = src;
    Images.forEach(function(img){
        img.style.filter = 'grayscale(60%) blur(4px)';
        img.addEventListener('mouseenter', function(){
            img.style.filter = 'grayscale(0%) blur(0px)';
        })
        img.addEventListener('mouseleave', function(){
            img.style.filter = 'grayscale(60%) blur(4px)';
        })
    });
}

function close(){
    box.classList.add('remove');
    Images.forEach(function(img){
        img.style.filter = 'grayscale(60%) blur(0px)';
        img.addEventListener('mouseenter', function(){
            img.style.filter = 'grayscale(0%) blur(0px)';
        })
        img.addEventListener('mouseleave', function(){
            img.style.filter = 'grayscale(60%) blur(0px)';
        })
    });
}



window.onload = function(){
    if(window.pageYOffset >= 72) btnUp.classList.remove('remove');
    else btnUp.classList.add('remove');
    setTimeout(arguments.callee, 1);
}