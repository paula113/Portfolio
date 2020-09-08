// import data from './data';

const data = [
  {
    name: 'Cifrado Casar',
    image: 'https://github.com/paula113/LIM012-cipher/blob/gh-pages/imagenes/Screen%20Shot%202020-07-20%20at%206.35.18%20pm.png?raw=true',
    descripton: 'Este proyecto fue enfocado para ayudar a los clientes del banco generando contraseñas con palabras fáciles de recordar. Desarrollado con la técnica del desplazamiento César.',
    github: 'https://github.com/paula113/LIM012-fe-social-network',
    demo: 'https://paula113.github.io/lim012-fe-social-network/src/',
  },
  {
    name: 'Red Social',
    image: 'https://github.com/paula113/Portfolio/blob/master/images/Screen%20Shot%202020-07-31%20at%201.12.59%20pm.png?raw=true',
    descripton: 'Esta plataforma interactiva permitirá a nuestro target usuario registrarse con su correo electrónico o por su cuenta de gmail. Los usuarios de EducaChat podrán compartir conocimientos a través de publicaciones, también les permitirá compartir imágenes. Podrán editar, borrar y configurar la privacidad de su publicación.',
    github: 'https://github.com/paula113/LIM012-fe-social-network',
    demo: 'https://paula113.github.io/lim012-fe-social-network/src/',
  },
  {
    name: 'md-Links',
    image: 'https://github.com/paula113/LIM012-fe-md-links/blob/master/img/--vaidate.png?raw=true',
    descripton: 'Md-links está enfocada a validar links de un archivo markdown. Mediante peticiones HTTP al servidor. Validando sí, los links en el archivo existen y también incluye la opción \'stats\' que brinda las estadísticas de los links encontrados como: totalde link, links únicos y links rotos.',
    github: 'https://github.com/paula113/LIM012-fe-md-links',
    demo: 'https://github.com/paula113/LIM012-fe-md-links',
  },
  {
    name: 'BQ-API',
    image: 'https://github.com/paula113/LIM012-fe-burger-queen-api/blob/dev/images/auth/get.png?raw=true',
    descripton: 'Una API nos permite interactuar con los datos de una aplicacion, para este proyecto se nos requerio desarrollar una para un restaurante. Para desarrollar la API rest utilizamos Nodejs y Express, lo complementamos con un motor de base de datos mysql. Finalmente, para automatizar el despliegue de aplicaciones dentro de contenedores de software usamos docker. ',
    github: 'https://github.com/paula113/LIM012-fe-burger-queen-api',
    demo: 'http://134.122.82.187:8000',
  },
  // {
  //   name: 'BQ-API Client',
  //   image: 'https://unsplash.it/700/500?random',
  //   descripton: 'En este proyecto tiene como objetivo desarrollar una web progressive app utilizando React. Esta interfáz es la integracion con la API previamente desarrollada, según la solicitud de nuestra clienta ',
  //   github: 'https://github.com/paula113/LIM012-fe-burger-queen-api-client/tree/dev',
  //   demo: '',
  // },
];

const main = document.getElementById('main_content');

const myDescription = 'Front-End developer apasionada por el desarrollo de interfaces web. He desarrollado proyectos en puro JavaScript y React, utilizando scrum como framework de desarrollo. Mi objetivo es crear productos que resuelvan problemas potenciando su eficiencia y productividad.';
const myPic = 'https://github.com/paula113/Portfolio/blob/master/images/pic0012.jpeg?raw=true';
// List of Icons
const contactIcons = ['https://raw.githubusercontent.com/paula113/Portfolio/master/images/linkedIn.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/mail.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/gitHub.svg',
];

const skillsList = ['https://raw.githubusercontent.com/paula113/Portfolio/master/images/reactSvg.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/css-Svg.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/sass-Svg.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/node-Svg.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/Screen%20Shot%202020-07-31%20at%201.01.16%20pm.png',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/html-Svg.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/firebase-Svg.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/sql-Svg.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/docker-color.svg',
  'https://raw.githubusercontent.com/paula113/Portfolio/master/images/figma-title.svg',
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
  const div = document.createElement('div');
  const a = document.createElement('a');
  const popupText = document.createElement('span');
  popupText.textContent = 'paulapierina96@gmail.com';
  popupText.className = 'popupText';
  img.className = name;
  switch (str) {
    case contactIcons[0]:
      img.src = str;
      img.setAttribute('id', 'linkedIn');
      a.appendChild(img);
      a.setAttribute('href', 'https://www.linkedin.com/in/paula-p-18a227196/');
      return a;
    case contactIcons[1]:
      img.src = str;
      img.setAttribute('id', 'email');
      div.classList.add('popup');
      div.appendChild(img);
      div.appendChild(popupText);
      div.addEventListener('click', () => {
        console.log('hola');
        popupText.classList.toggle('show');
      });
      return div;
    case contactIcons[2]:
      img.src = str;
      img.setAttribute('id', 'github');
      a.appendChild(img);
      a.setAttribute('href', 'https://github.com/paula113');
      return a;
    default:
      img.src = str;
      break;
  }
  return img;
};


const profile = document.createElement('section');
profile.setAttribute('id', 'Sobre mi');
profile.className = 'profile';

const contact = document.createElement('div');
contact.className = 'contact';

const skills = document.createElement('section');
skills.setAttribute('id', 'Habilidades');
skills.className = 'skills';

const wrapper = document.createElement('div');
wrapper.className = 'skillsWrapper';

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
    <img class="icon" src="https://raw.githubusercontent.com/paula113/Portfolio/master/images/gitHub.svg">
    </a>
    <a class="button" href=${obj.demo} target="_blank">Demo</a>
    </div>
    `;
  return projects.appendChild(card);
});

// const collaboration = 'https://github.com/paula113/Portfolio/blob/master/images/collap.svg';

// returns an iterable for promise all
const iterable = (arr, name, arrId) => arr.map(icon => renderImage(icon, name, arrId));
// appens all img to html
const renderIcons = (arr, section) => Promise.all(arr)
  .then(yes => yes.forEach(element => section.appendChild(element)));

// const clssName = !!'icons';

const icons = iterable(contactIcons, 'icons');
const skilsIscons = iterable(skillsList, 'skillsIcons');


main.appendChild(profile);
profile.appendChild(perfil(sayHi, 'sayHi'));
profile.appendChild(renderImage(myPic, 'myPic'));
profile.appendChild(contact);
renderIcons(icons, contact);
profile.appendChild(perfil(description, 'descDiv'));
main.appendChild(renderImage('https://github.com/paula113/Portfolio/blob/master/images/collabs.png?raw=true', 'collabs'));
main.appendChild(skills);
skills.innerHTML = '<h1 class="title">Habilidades</h1>';
skills.appendChild(wrapper);
wrapper.appendChild(renderImage('https://github.com/paula113/Portfolio/blob/master/images/web_scan.png?raw=true', 'webScan'));

wrapper.appendChild(skillsContainer);
// skills.appendChild(skillsContainer);
renderIcons(skilsIscons, skillsContainer);
main.appendChild(projects);
skills.appendChild(title);
gallery(data);

