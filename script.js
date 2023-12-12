const progressBar = document.querySelector('.circle-cont');
const progressVal = document.querySelector('span.value')

let input = document.getElementById('input');
let btn = document.querySelector('button.btn');

let initValue = 0;

let click = btn.addEventListener('click', () => {
    // console.log(input.value)
    let progress = setInterval(() => {
        initValue++
        progressVal.innerHTML = `${initValue}%`;
    
        progressBar.style.background = `conic-gradient(
            #4d5bf9 ${initValue*3.6}deg,
            #cadcff ${initValue*3.6}deg
        )`;
        
        if(input.value === ''){
            initValue = -1;
        };
        if(initValue == input.value){
            clearInterval(progress)
            initValue = 0
        };

        
    }, 10)
});

