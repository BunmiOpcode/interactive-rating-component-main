
const circles = document.querySelectorAll('.circles');
const container = document.querySelector('.container');
const secContainer = document.querySelector('.sec-container');
const submitBtn = document.getElementById('submit');
const back = document.getElementById('back');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.circle');


function showSecCont(){
    secContainer.classList.remove('hidden');
    container.style.display = "none";
}

submitBtn.addEventListener('click',  showSecCont)

function  showCont(){
    secContainer.classList.add('hidden');
    container.style.display = "flex";
}

back.addEventListener('click', showCont)


rates.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML;
    })

    }
)