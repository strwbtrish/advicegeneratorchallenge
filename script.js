'use strict';

const nextBtn = document.querySelector('.nextBtn'),
      title = document.querySelector('.title'),
      adviceNo = document.querySelector('.advice-no'),
      message = document.querySelector('.message');


nextBtn.addEventListener('click', () => {
   advice();
})

const advice = async function () {
 try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    const {advice, id} = data.slip;
    
    adviceNo.textContent = `#${id}`;
    message.textContent = `${advice}`;


 }

 catch (err){
    console.error(err);
 }
   
}

window.addEventListener('load', advice)