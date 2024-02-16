import { comments } from "../data/data.js";

const main = document.querySelector('#main');
const second_main = document.querySelector('#second_main');
const some_text =  document.querySelector('#some_text');

const targetId = window.location.search.replace('?id=','')
const foundComment = comments.find((el) => el.id === Number(targetId))


if (foundComment ) {
    main.innerHTML = foundComment.name
    second_main.innerHTML = foundComment.email
    some_text.innerHTML = foundComment.body
} else {
    main.innerHTML = 'Такого нету';
    second_main.innerHTML = '';
    some_text.innerHTML = '';
}


