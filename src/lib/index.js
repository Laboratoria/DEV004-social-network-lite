// aqui exportaras las funciones que necesites

import { createPost, deletePost, editPost, getPosts, init, login, register } from "./services";

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

init();
register('ssinuco@gmail.com', '123456');
login('ssinuco@gmail.com', '123456');
const id1 = createPost('Hola mundo', 'ssinuco@gmail.com');
const id2 = createPost('Hola mundo 2', 'ssinuco@gmail.com');
setTimeout(() => {
  deletePost(id1);
}, 30000);
setTimeout(() => {
  editPost(id2, 'Hola mundo 2 editado');
}, 60000);
const posts = getPosts();
console.log(posts);


