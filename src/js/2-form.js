const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');

loadFormData();

feedbackForm.addEventListener('input', handleInput);

feedbackForm.addEventListener('submit', handleSubmit);

function handleInput(evt) {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return;

  formData = JSON.parse(savedData);
  for (const [name, value] of Object.entries(formData)) {
    if (feedbackForm.elements[name]) {
      feedbackForm.elements[name].value = value;
    }
  }
}

function handleSubmit(evt) {
  evt.preventDefault();

  const email = feedbackForm.elements.email.value.trim();
  const message = feedbackForm.elements.message.value.trim();

  if (!email || !message) {
    alert('Please fill in both fields');
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  feedbackForm.reset();
}