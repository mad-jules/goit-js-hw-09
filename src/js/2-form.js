// let formData = { email: '', message: '' };

// const fbForm = document.querySelector('.feedback-form');

// const onFormElementInput = event => {
//   console.dir(event.target);
//   const value = event.target.value;
//   const name = event.target.name;

//   // if (name === 'email') {
//   //   formData.email = value;
//   // } else {
//   //   formData.message = value;
//   // }
//   // console.log(name);
//   // console.log(typeof name);

//   // console.log('key');
//   // console.log(typeof 'key');
//   formData[name] = value;
//   // formData['key'] = formData.key/
//   //   console.log({ [name]: value });
//   //   formData = { [name]: value };
//   console.log(formData);
//   //   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// };

// fbForm.addEventListener('input', onFormElementInput);
let formData = { email: '', message: '' };

const formEl = document.querySelector('.feedback-form');

const onInputChange = event => {
  const name = event.target.name;
  const value = event.target.value;
  formData[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

formEl.addEventListener('input', onInputChange);
