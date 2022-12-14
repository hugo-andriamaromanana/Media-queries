/* ##### FOOD ##### */

let firstmenu = document.getElementById('firstmenu');
let secondmenu = document.getElementById('secondmenu');
let thirdmenu = document.getElementById('thirdmenu');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    firstmenu.style.top = value * 0.03 + 'px';
    secondmenu.style.bottom = value * 0.02 + 'px';
    thirdmenu.style.top =  value * 0.04 + 'px';
})

/* ##### END FOOD ##### */

/* ##### Cities ##### */

const content = document.querySelectorAll('.finland-country');
const tab = document.querySelectorAll('.finland-link');
const slider = document.querySelector('.finland-countries-slider');

function hideTabContent() {
  content.forEach(item => {
    item.style.display = 'none';
  });
  tab.forEach(item => {
    item.classList.remove('finland-active');
  });
}

function showTabContent(i = 0) {
  content[i].style.display = 'grid';
  tab[i].classList.add('finland-active');
}


hideTabContent();
showTabContent();

slider.addEventListener("click", (e) => {
  const target = e.target
  if (target) {
     tab.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
  }
})

/* ##### END Cities ##### */

/* ##### AMBASSADE ##### */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* ##### END AMBASSADE ##### */