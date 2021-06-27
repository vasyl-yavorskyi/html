const bestArticles = [
    '<h3>Completed projects</h3><p>For the time of our work, we have installed more than 10,000 wind-driven generators in 18 countries.</p>',
    '<h3>Vast experience</h3><p>Our team consist of engineers with 10-20 years of expirience. They know everything about green energy.</p>',
    '<h3>Suitable solutions</h3><p>We offer options with different capacities, depending on your needs, budget, and location.</p>',
    '<h3>Windmill installation</h3><p>We have extensive experience and can be proud of 10,000+ completed prohjects.</p>',
    '<h3>Power of any needs</h3><p>We offer wind turbines for 2 MW, 5 MW, 10 MW and more.We do a free calculation of the required capacity.</p>',
    '<h3>Home & business options</h3><p>We will help you choose windmills for home, office and even factories of any scale and current consumption.</p>',

];

let currentArticle = 0;

function showCurrentArticle() {
    const articleContainer = document.querySelector('.our-offer');
    articleContainer.innerHTML = bestArticles[currentArticle];
}

function next() {
    currentArticle++;
    if (currentArticle > bestArticles.length - 1) currentArticle = 0;
    showCurrentArticle();
}

setInterval(next, 2500);
showCurrentArticle();