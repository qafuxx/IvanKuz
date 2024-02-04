const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');
const pdesign = document.querySelector('.product_designer');
const ldesign = document.querySelector('.design_lead');
const edesign = document.querySelector('.design_expert');
const lang = document.querySelector('.language');

link.forEach((el) => {
   el.addEventListener('click', () => {
      langEl.querySelector('.active').classList.remove('active');
      el.classList.add('active');

      const attr = el.getAttribute('language');

      titleEl.textContent = data[attr].title;
      descrEl.textContent = data[attr].description;
      pdesign.textContent = data[attr].product_designer;
      ldesign.textContent = data[attr].design_lead;
      edesign.textContent = data[attr].design_expert;
      lang.textContent = data[attr].language;
   });
});

var data = {
   english: {
      language: 'Language',
      product_designer: 'Product designer',
      design_lead: 'Design lead',
      design_expert: 'Design system expert',
      title: 'Ivan Kuznetsov',
      description:
         'I’m a product designer working at the intersection of prototyping, visuals, systems. I’m currently at Severstal, making the world a little bit better for creators.',
   },
   russia: {
      language: 'Язык',
      product_designer: 'Продуктовый дизайнер',
      design_lead: 'Ведущий дизайнер',
      design_expert: 'Эксперт системы проектирования',
      title: 'Иван Кузнецов',
      description:
         'Я дизайнер продуктов, работаю на стыке прототипирования, визуальных эффектов и систем. Сейчас я работаю в «Северстали», делаю мир немного лучше для авторов.',
   },
};
