/* =====================================================
   NEWS PAGE JAVASCRIPT
   ===================================================== */

// LOAD MORE BUTTON FUNCTIONALITY
// This handles clicking "Load More Articles" to show additional content

const loadMoreBtn = document.getElementById('loadMoreBtn');

// Sample data for additional articles (in real app, this comes from a backend/database)
const additionalArticles = [
  {
    title: 'Cloud Architecture Best Practices',
    excerpt: 'Building scalable and secure cloud infrastructure for enterprise applications.',
    category: 'Cloud Computing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    alt: 'Cloud Computing'
  },
  {
    title: 'Web Development Trends 2026',
    excerpt: 'Modern frameworks and tools shaping the future of web development.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=250&fit=crop',
    alt: 'Web Development'
  },
  {
    title: 'Robotics Revolution in Manufacturing',
    excerpt: 'How automation and robotics are transforming industrial processes.',
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1485579149c01123123a8e7416?w=400&h=250&fit=crop',
    alt: 'Robotics'
  }
];

let articlesLoaded = 0; // Track how many times "Load More" has been clicked

// Event listener: when user clicks "Load More Articles"
loadMoreBtn.addEventListener('click', function() {
  // Get the articles grid container where new articles will be added
  const articlesGrid = document.querySelector('.articles__grid');
  
  // Loop through the next batch of articles to display
  for (let i = 0; i < 3; i++) {
    // Calculate which article to display (cycles through the array)
    const articleIndex = (articlesLoaded * 3 + i) % additionalArticles.length;
    const article = additionalArticles[articleIndex];
    
    // Create a new article card HTML element
    const articleCard = createArticleCard(article);
    
    // Add the new card to the grid
    articlesGrid.appendChild(articleCard);
  }
  
  // Increment counter to track pagination
  articlesLoaded++;
  
  // Optional: hide "Load More" button after 3 clicks (stop infinite scroll)
  if (articlesLoaded >= 2) {
    loadMoreBtn.style.display = 'none';
  }
});

// HELPER FUNCTION: Create article card HTML
// This function builds the HTML structure for each article card dynamically
// Why? We use this when creating new articles on "Load More" click

function createArticleCard(articleData) {
  // Create the article container
  const article = document.createElement('article');
  article.className = 'article-card';
  
  // Build the complete HTML using template literals (cleaner than concatenation)
  article.innerHTML = `
    <div class="article-card__image-wrapper">
      <img src="${articleData.image}" alt="${articleData.alt}" class="article-card__image">
      <span class="article-card__category">${articleData.category}</span>
    </div>
    <div class="article-card__content">
      <h3 class="article-card__title">${articleData.title}</h3>
      <p class="article-card__excerpt">${articleData.excerpt}</p>
      <a href="#" class="article-card__read-more">Read Article →</a>
    </div>
  `;
  
  return article;
}

// CATEGORY FILTER FUNCTIONALITY (optional)
// This allows users to click categories and filter articles

const categoryLinks = document.querySelectorAll('.categories-list__link');

categoryLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Stop default link behavior
    
    const selectedCategory = this.getAttribute('data-category');
    
    // Log which category was clicked (for debugging)
    console.log('Filtered by:', selectedCategory);
    
    // In a real app, you'd:
    // 1. Send this category to your backend API
    // 2. Receive filtered articles back
    // 3. Update the articles grid with results
    
    // Example (placeholder):
    // filterArticlesByCategory(selectedCategory);
  });
});

// SMOOTH SCROLL EFFECT (bonus interactivity)
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
    
    In a real app, this would navigate to the article's full page
    window.location.href = this.href;
  });
});

// Automatically update the copyright year
const copyright = document.querySelector(".footer-copyright p");

if (copyright) {
    copyright.textContent =
        "© " + new Date().getFullYear() + " Presprint Plc. All Rights Reserved";
};
