// import data from './data';

const data = [
  {
    name: 'Cifrado Casar',
    image: 'https://unsplash.it/700/500?random',
    descripton: 'Este proyecto fue enfocado para ayudar a los clientes del banco generando contraseñas con palabras fáciles de recordar. Desarrollado con la técnica del desplazamiento César.',
    github: 'https://github.com/paula113/LIM012-fe-social-network',
    demo: 'https://paula113.github.io/lim012-fe-social-network/src/',
  },
  {
    name: 'Red Social',
    image: 'https://github.com/paula113/Portfolio/blob/master/images/Screen%20Shot%202020-07-31%20at%201.12.59%20pm.png?raw=true',
    // descripton: 'Esta plataforma interactiva permitirá a nuestro target usuario registrarse con su correo electrónico o por su cuenta de gmail. Los usuarios de EducaChat podrán compartir conocimientos a través de publicaciones, también les permitirá compartir imágenes. Podrán editar, borrar y configurar la privacidad de su publicación.',
    github: 'https://github.com/paula113/LIM012-fe-social-network',
    demo: 'https://paula113.github.io/lim012-fe-social-network/src/',
  },
  {
    name: 'md-Links',
    image: 'https://github.com/paula113/LIM012-fe-md-links/blob/master/img/--vaidate.png?raw=true',
    // descripton: 'Este proyecto fue enfocado para ayudar a los clientes del banco generando contraseñas con palabras fáciles de recordar. Desarrollado con la técnica del desplazamiento César.',
    github: 'https://github.com/paula113/LIM012-fe-md-links',
    demo: 'https://github.com/paula113/LIM012-fe-md-links',
  },
  {
    name: 'BQ-API',
    image: 'https://unsplash.it/700/500?random',
    github: 'https://github.com/paula113/LIM012-fe-social-network',
    demo: 'https://paula113.github.io/lim012-fe-social-network/src/',
  },
  {
    name: 'BQ-API Client',
    image: 'https://unsplash.it/700/500?random',
    // descripton: 'Este proyecto fue enfocado para ayudar a los clientes del banco generando contraseñas con palabras fáciles de recordar. Desarrollado con la técnica del desplazamiento César.',
    github: 'https://github.com/paula113/LIM012-fe-social-network',
    demo: 'https://paula113.github.io/lim012-fe-social-network/src/',
  },
  
];

const main = document.getElementById('main_content');

const myDescription = 'Junior Front-End developer apasionada por el desarrollo de interfaces web. He desarrollado proyectos en puro JavaScript y React, utilizando scrum como framework de desarrollo. Mi objetivo es crear productos que resuelvan problemas potenciando su eficiencia y productividad.';
const myPic = 'https://github.com/paula113/Portfolio/blob/master/images/pic0012.jpeg?raw=true';
// List of Icons
const contactIcons = ['https://raw.githubusercontent.com/paula113/Portfolio/master/images/linkedIn.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/mail.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/gitHub.svg',
];

const skillsList = ['https://raw.githubusercontent.com/paula113/Portfolio/master/images/reactSvg.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/css-Svg.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/node-Svg.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/Screen%20Shot%202020-07-31%20at%201.01.16%20pm.png',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/html-Svg.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/firebase-Svg.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/sql-Svg.svg',
];
// 'https://unsplash.it/700/500?random'

const description = `<p class="description">${myDescription}</p>`;
const sayHi = `
<h6>Hola, soy</h6>
<h1 class="title">Paula Paredes</h1>
`;

// Body
const perfil = (template, name) => {
  const section = document.createElement('div');
  section.className = name;
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
const iterable = (arr, name) => arr.map(icon => renderImage(icon, name));
// appens all img to html
const renderIcons = (arr, section) => Promise.all(arr)
  .then(yes => yes.forEach(element => section.appendChild(element)));


const profile = document.createElement('section');
profile.setAttribute('id', 'Sobre mi');
profile.className = 'profile';

const contact = document.createElement('div');
contact.className = 'contact';

const skills = document.createElement('section');
skills.setAttribute('id', 'Habilidades');
skills.className = 'skills';

const skillsContainer = document.createElement('div');
skillsContainer.className = 'skillsContainer';

const projects = document.createElement('section');
projects.setAttribute('id', 'Proyectos');
projects.className = 'projects';

const title = document.createElement('h1');
title.className = 'title ps';
title.textContent = 'Proyectos';

const gallery = p => p.map((obj) => {
  const card = document.createElement('article');
  card.className = 'article';
  card.innerHTML = `
    <img class="p_img" src=${obj.image}/>
        <h4>${obj.name}</h4>
        <p class="caption">${obj.descripton}</p>
    <div class="see_pro">
    <a href=${obj.github}>
    <img class="icons" src="https://raw.githubusercontent.com/paula113/Portfolio/master/images/gitHub.svg">
    </a>
    <a class="button" href=${obj.demo} target="_blank">Demo</a>
    </div>
    `;
  return projects.appendChild(card);
});

// const collaboration = 'https://github.com/paula113/Portfolio/blob/master/images/collap.svg';


const icons = iterable(contactIcons, 'icons');
const skilsIscons = iterable(skillsList, 'skillsIcons');

main.appendChild(profile);
profile.appendChild(perfil(sayHi, 'sayHi'));
profile.appendChild(renderImage(myPic, 'myPic'));
profile.appendChild(contact);
renderIcons(icons, contact);
profile.appendChild(perfil(description, 'descDiv'));
// main.appendChild(collaboration);
main.appendChild(skills);
skills.innerHTML = '<h1 class="title">Habilidades</h1>';
skills.appendChild(skillsContainer);
skills.appendChild(renderImage('https://github.com/paula113/Portfolio/blob/master/images/collabs.png', 'webScan'));
renderIcons(skilsIscons, skillsContainer);
main.appendChild(projects);
skills.appendChild(title);
gallery(data);
