
import { throttle } from 'lodash';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input[name="email"]');
const messageRef = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

formRef.addEventListener(
  'input',
  throttle(e => {
    const objectToSave = { email: emailRef.value, message: messageRef.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
  }, 500)
);

formRef.addEventListener('submit', e => {
  e.preventDefault();
  console.log({ email: emailRef.value, message: messageRef.value });
  formRef.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
  emailRef.value = storageData.email;
  messageRef.value = storageData.message;
}