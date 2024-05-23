const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');
const back = document.getElementById('back-arrow');
const next = document.getElementById('next-arrow');

let initialValue = 0;

next.addEventListener('click', () => {
    initialValue++;
    console.log(initialValue)

    if(initialValue > img.length - 1){
        initialValue = 0;
    }

    imgs.style.transform = `translateX(${-initialValue * 400}px)`
})

back.addEventListener('click', () => {
    initialValue--;
    console.log(initialValue)

    if(initialValue < 0){
        initialValue = img.length - 1;
    }

    imgs.style.transform = `translateX(${-initialValue * 400}px)`
})