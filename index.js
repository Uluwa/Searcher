import { comments } from "./data/data.js";
import { searchComments, renderCards, renderEmailOptions} from "./utils.js";

const commentsContainer = document.querySelector('#comments-container');
const input = document.querySelector('#input');
const select = document.querySelector('#select-email');
const clearButton = document.querySelector('#clearButton');

renderEmailOptions(comments,select);

renderCards(comments,commentsContainer)

input.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  const searchedComments = searchComments(comments, inputValue);
  renderCards(searchedComments,commentsContainer);
  renderEmailOptions(searchedComments,select);
} ) 

select.addEventListener('change', (event) => {
  input.value = '';
  const selectEmail = event.target.value;
  if (selectEmail === 'Select your e-mail'){
    renderCards(comments,commentsContainer)
    renderEmailOptions(comments,select);
  } else {
  const searchedComments = searchComments(comments,selectEmail);
  renderCards(searchedComments,commentsContainer);
  }
})

clearButton.addEventListener('click', () => {
  input.value = '';
  renderCards(comments,commentsContainer);
  renderEmailOptions(comments,select); 
})