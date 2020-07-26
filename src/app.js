// import data from './data';

const data = [
  {
    name: 'Cifrado Casar',
    image: 'https://unsplash.it/700/500?random',
    descripton: '.....',
    github: 'https://github.com/paula113/LIM012-fe-social-network',
    demo: 'paula113.github.io/lim012-fe-social-network/src/',
  },
  {
    name: 'Red Social',
    image: 'https://unsplash.it/700/500?random',
    descripton: '.....',
    github: 'https://github.com/paula113/LIM012-fe-social-network',
    demo: 'paula113.github.io/lim012-fe-social-network/src/',
  },
];

const main = document.getElementById('main_content');

const myDescription = 'Junior Front-End developer apasionada por el desarrollo de interfaces web. He desarrollado proyectos en puro JavaScript y React, utilizando scrum como framework de desarrollo. Mi objetivo es crear productos que resuelvan problemas potenciando su eficiencia y productividad.';
const myPic = 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708';
// List of Icons
const contactIcons = ['https://image.flaticon.com/icons/png/512/174/174855.png',
  'https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-3-512.png',
  'https://unsplash.it/700/500?random',
];

const skillsList = ['https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
];
// 'https://unsplash.it/700/500?random'

const description = `<p class="description">${myDescription}</p>`;
const sayHi = `
<h6>Hola, soy</h6>
<h1 class="title">Paula Paredes</h1>
`;

// menu


// Body
const perfil = (template) => {
  const section = document.createElement('section');
  section.innerHTML = template;
  return section;
};
const renderImage = (str, name) => {
  const img = document.createElement('img');
  img.className = name;
  img.src = str;
  return img;
};


// returns an iterable for promise all
const iterable = arr => arr.map(icon => renderImage(icon, 'icons'));
// appens all img to html
const renderIcons = (arr, section) => Promise.all(arr)
  .then(yes => yes.forEach(element => section.appendChild(element)));


const profile = document.createElement('div');
profile.setAttribute('id', 'Sobre mi');
profile.className = 'profile';

const contact = document.createElement('div');
contact.className = 'contact';

const skills = document.createElement('section');
skills.className = 'skills';

const skillsContainer = document.createElement('div');
skillsContainer.setAttribute('id', 'Habilidades');
skillsContainer.className = 'skillsContainer';

const projects = document.createElement('section');
projects.setAttribute('id', 'Proyectos');
projects.className = 'projects';

const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Proyectos';

const gallery = p => p.map((obj) => {
  const card = document.createElement('article');
  card.className = 'article';
  card.innerHTML = `
    <img class="p_img" src=${obj.image}/>
        <h4>${obj.name}</h4>
        <p class="caption">${obj.descripton}</p>
    <div class="contact">
    <a href=${obj.github}>
    <img class="icons" src="https://unsplash.it/700/500?random">
    </a>
    <a class="button" href=${obj.demo} target="_blank">DEMO</a>
    </div>
    `;
  return projects.appendChild(card);
});


const icons = iterable(contactIcons);
const skilsIscons = iterable(skillsList);

main.appendChild(perfil(sayHi));
main.appendChild(profile);
profile.appendChild(renderImage(myPic, 'myPic'));
profile.appendChild(contact);
renderIcons(icons, contact);
main.appendChild(perfil(description));
main.appendChild(skills);
skills.innerHTML = '<h1 class="title">Habilidades</h1>';
skills.appendChild(skillsContainer);
renderIcons(skilsIscons, skillsContainer);
main.appendChild(projects);
projects.appendChild(title);
gallery(data);
// projects.appendChild(gallery);
