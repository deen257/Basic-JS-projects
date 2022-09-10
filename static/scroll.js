document.addEventListener('DOMContentLoaded', function () {
// setting the date dynamically 
  const date = document.querySelector('.date');
  date.innerHTML = new Date().getFullYear();

// close link 
const link= document.querySelector('.links')
const linksContainer = document.querySelector('.links-container');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect();

  const linksHeight = link.getBoundingClientRect().height;


  if (containerHeight.height === 0){
    linksContainer.style.height= `${linksHeight}px`;

  }
  else{
    linksContainer.style.height= 0;
  }
});
// navbar fix
const navbar = document.getElementById('nav');
const topLink =document.querySelector('.top-link');
window.addEventListener('scroll', function(){
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  
  if (scrollHeight > navHeight){
    navbar.classList.add('fixed-nav');
  }
  else{
    navbar.classList.remove('fixed-nav');

  }

  if(scrollHeight > 500){
    topLink.classList.add('show-link');
  }
  else{
    topLink.classList.remove('show-link');
  }
})

//select links

const scrollinks = document.querySelectorAll('.scroll-link');

scrollinks.forEach(function(link){
  link.addEventListener('click', (e) => {
    e.preventDefault();
    //nav to spective target
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');

    let postion = element.offsetTop - navHeight;
    if(!fixedNav){
      postion = postion - navHeight ;
    }

    if(navHeight > 82){
      postion = postion + containerHeight;
    }
    
  
    window.scrollTo({
      left: 0,
      top: postion
    });
    linksContainer.style.height= 0;

  })
})
  

})
