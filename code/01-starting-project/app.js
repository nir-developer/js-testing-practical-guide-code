<<<<<<< HEAD
import { generateReportData, storeData } from './src/data.js';
import log from './src/util/logger.js';

const data = generateReportData(log);
storeData(data);
=======
import { extractPostData, savePost } from './posts/posts.js';

const formElement = document.querySelector('form');

export async function submitFormHandler(event) {
  event.preventDefault();

  const formData = new FormData(formElement);
  try {
    const postData = extractPostData(formData);
    await savePost(postData);
  } catch (error) {
    showError(error.message);
  }
}

formElement.addEventListener('submit', submitFormHandler);
>>>>>>> c3622121a8cc2c4d499760155ad30a0e4425b37a
