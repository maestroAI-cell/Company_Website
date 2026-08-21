// Header menu button functionality
const menuButton = document.querySelector('.header__menu-btn');

const nav = document.querySelector('.header__nav');

menuButton.addEventListener('click', function() {
    nav.classList.toggle('active');
});
// LOAD MORE BUTTON FUNCTIONALITY
// This handles clicking "Load More Articles" to show additional content

const loadMoreBtn = document.getElementById('loadMoreBtn');

// Sample data for additional articles (in real app, this comes from a backend/database)
const additionalArticles = [
  {
    title: 'Cloud Architecture Best Practices',
    excerpt: 'Building scalable and secure cloud infrastructure for enterprise applications.',
    category: 'Cloud Computing',
    image: "./Images/IMG-20260821-WA0022.jpg",
    alt: 'Cloud Computing'
  },
  {
    title: 'Web Development Trends 2026',
    excerpt: 'Modern frameworks and tools shaping the future of web development.',
    category: 'Web Development',
    image: "./Images/IMG-20260821-WA0021.jpg",
    alt: 'Web Development'
  },
  {
    title: 'Heavy Machinery in Manufacturing',
    excerpt: 'How heavy-duty machines are transforming industrial processes.',
    category: 'Robotics',
    image: "./Images/IMG-20260821-WA0022.jpg",
    alt: 'Robotics'
  }
];

let articlesLoaded = 0; // Track how many times "Load More" has been clicked

// Event listener: when user clicks "Load More Articles"

loadMoreBtn.addEventListener('click', function() {

  if (loadMoreBtn.textContent === 'Load More') {
    // Load more articles
    
    articlesLoaded++

  if (articlesLoaded >= 4) {
    loadMoreBtn.textContent = 'Load Less';

  } else {

    // Remove the extra articles. 

    article.innerHTML = '';

    articlesLoaded = 1;
    loadMoreBtn.textContent = 'Load More'
  }
  }

})

// This function builds the HTML structure for each article card 


function createArticleCard(articleData) {
  // Create the article container
  const article = document.createElement('article');
  article.className = 'article-card';
  
  // Build the complete HTML using template literals 
  article.innerHTML = `
    <div class="article-card__image-wrapper">
      <img src="${articleData.image}" alt="${articleData.alt}" class="article-card__image">
    </div>
    
    <div class="article-card__content">
      <h3 class="article-card__title">${articleData.title}</h3>
      <p class="article-card__excerpt">${articleData.excerpt}</p>
      <a href="#" class="article-card__read-more">Read Article </a>
    </div>
  `;
  
  return article;
}

// CATEGORY FILTER (optional)
// This allows users to click categories and filter articles

const categoryLinks = document.querySelectorAll('.categories-list__link');

categoryLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Stop default link behavior
    
    const selectedCategory = this.getAttribute('data-category');
    
    // Log which category was clicked (for debugging)
    console.log('Filtered by:', selectedCategory);
    
    // filterArticlesByCategory(selectedCategory);
  });
});

// SMOOTH SCROLL EFFECT 
// When user clicks a "Read Article" link, smooth scroll to top
const readMoreLinks = document.querySelectorAll('.article-card__read-more, .featured-news__cta');

readMoreLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Smooth scroll to page top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // this would navigate to the article's full page
    // window.location.href = this.href;
  });
});

// Automatically update the copyright year
const copyright = document.querySelector(".footer-copyright p");

if (copyright) {
    copyright.textContent =
        "© " + new Date().getFullYear() + " Presprint Plc. All Rights Reserved";
};
