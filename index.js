
const circles = document.querySelectorAll('.circles');
const container = document.querySelector('.container');
const secContainer = document.querySelector('.sec-container');
const submitBtn = document.getElementById('submit');
const back = document.getElementById('back');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.circle');


function showSecContainer(){
    secContainer.classList.remove('hidden');
    container.style.display = "none";
}

submitBtn.addEventListener('click',  showSecContainer)

function  showContainer(){
    secContainer.classList.add('hidden');
    container.style.display = "flex";
    window.location.reload();
}

back.addEventListener('click', showContainer)


rates.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML;
    })

    }
)