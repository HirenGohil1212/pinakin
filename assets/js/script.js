
/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 


// Gallery Filtering and Lightbox
document.addEventListener('DOMContentLoaded', function() {
  const filterItems = document.querySelectorAll('.filter-item');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeLightbox = document.querySelector('.close-lightbox');

  // Filter Gallery Items
  filterItems.forEach(item => {
      item.addEventListener('click', function() {
          // Update active filter
          filterItems.forEach(item => item.classList.remove('active'));
          this.classList.add('active');

          // Filter gallery
          const filterValue = this.getAttribute('data-filter');
          
          galleryItems.forEach(item => {
              if (filterValue === 'all' || item.classList.contains(filterValue)) {
                  item.style.display = 'block';
                  setTimeout(() => item.style.opacity = '1', 50);
              } else {
                  item.style.opacity = '0';
                  setTimeout(() => item.style.display = 'none', 300);
              }
          });
      });
  });

  // Lightbox Functionality
  galleryItems.forEach(item => {
      item.addEventListener('click', function() {
          const imgSrc = this.querySelector('img').src;
          lightboxImg.src = imgSrc;
          lightbox.classList.add('show');
      });
  });

  // Close Lightbox
  closeLightbox.addEventListener('click', () => {
      lightbox.classList.remove('show');
  });

  // Close Lightbox on Outside Click
  lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
          lightbox.classList.remove('show');
      }
  });

  // Add Animation to Gallery Items
  galleryItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
  });
});


