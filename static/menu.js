const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: '/static/images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: '/static/images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: '/static/images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: '/static/images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: '/static/images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: '/static/images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: '/static/images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: '/static/images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: '/static/images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'steak',
    category: 'dinner',
    price: 40.99,
    img: '/static/images/item-10.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]

document.addEventListener('DOMContentLoaded', function () {
const section = document.querySelector('.section-center');
const buttonContainer = document.querySelector('.btn-container');


  const categories = new Set();
  categories.add('all');
  menu.forEach((menu) => {
     categories.add(menu.category)
  })
  const mainCategories = Array.from(categories) 

  categoryList(mainCategories); 

  const filterBtn = document.querySelectorAll('.filter-btn');
  menuList(menu);
  filterBtn.forEach(function(btn) {
    btn.onclick = function (){
       const category = this.dataset.id;
       const menuCategory = menu.filter( function(menuItem) {
        if (category === menuItem.category){
            return menuItem
          }
       });
       if (category === 'all'){
          menuList(menu);
        }
        else{
          menuList(menuCategory);
        }

    }
  })



function menuList(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return `<article class="menu-item">
                <img src="${item.img}" class="photo" alt="meal"/>
                <div class="item-info">
                  <header>
                    <h4 class="head">${item.title}</h4>

                    <h4 class="price">${item.price}</h4>
                  </header>
                  <p class="item-text">${item.desc}</p>
                </div> `
  })
  displayMenu = displayMenu.join('');
  section.innerHTML = displayMenu;
}

function categoryList(categoryMenu) {
   let displayMenu = categoryMenu.map((item)=>{
    return `<button class="filter-btn" data-id='${item}' type="button">${item}</button>`
  })
  
  displayMenu = displayMenu.join('');
  buttonContainer.innerHTML = displayMenu
  
}
})



