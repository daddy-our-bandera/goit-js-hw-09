import Notiflix, { Notify } from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        
      } else {
        reject({ position, delay });
      }
    }, delay);
  }) ;
};


function onFormSubmit(evt) {
  evt.preventDefault();

  const formEl = evt.currentTarget.elements;
  const delayStep = Number(formEl.step.value);
  let delay = Number(formEl.delay.value) ;
  const amount = Number(formEl.amount.value);

  delay -= delayStep;
  
  for (let i  = 1; i  <= amount; i += 1) {
      delay += delayStep
    createPromise(i,delay)
    .then(({ position, delay }) => {
      Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
    
  }
};
