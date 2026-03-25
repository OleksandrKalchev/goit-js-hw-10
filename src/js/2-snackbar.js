import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const delay = e.target.elements.delay.value;
  const state = e.target.elements.state.value;

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        res(delay);
      } else {
        rej(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        messageColor: 'white',
        color: 'green',
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        messageColor: 'white',
        color: 'red',
        position: 'topRight',
      });
    });
});
