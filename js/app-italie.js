/* ##### FOOD ##### */

let firstmenu = document.getElementById('firstmenu');
let secondmenu = document.getElementById('secondmenu');
let thirdmenu = document.getElementById('thirdmenu');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    firstmenu.style.top = value * 0.03 + 'px';
    secondmenu.style.bottom = value * 0.07 + 'px';
    thirdmenu.style.top =  value * 0.02 + 'px';
})

/* ##### END FOOD ##### */

/* ##### Cities ##### */

const content = document.querySelectorAll('.italie-country');
const tab = document.querySelectorAll('.italie-link');
const slider = document.querySelector('.italie-countries-slider');

function hideTabContent() {
  content.forEach(item => {
    item.style.display = 'none';
  });
  tab.forEach(item => {
    item.classList.remove('italie-active');
  });
}

function showTabContent(i = 0) {
  content[i].style.display = 'grid';
  tab[i].classList.add('italie-active');
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