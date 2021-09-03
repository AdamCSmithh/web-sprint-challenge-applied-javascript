import axios from "axios";

const Card = (article) => {
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorSpan = document.createElement('span');

  cardDiv.appendChild(headlineDiv, authorDiv);
  authorDiv.appendChild(imgContainer, authorSpan);
  imgContainer.appendChild(img);

  cardDiv.className = "card";
  headlineDiv.className = "headline";
  authorDiv.className = "author";
  imgContainer.className = "img-container";
  
  headlineDiv.textContent = article.headline
  img.setAttribute('src', article.authorPhoto);
  authorSpan.textContent = `By: ${ article.authorName }`;

  cardDiv.addEventListener('click', () => {
    console.log(article.headline);
  })

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return cardDiv;
}

const cardAppender = (selector) => {
  axios
  .get('http://localhost:5000/api/articles')
  .then(resp => {
    
    const bootstrap = resp.data.articles.bootstrap
    const javascript = resp.data.articles.javascript
    const jquery = resp.data.articles.jquery
    const node = resp.data.articles.node
    const technology = resp.data.articles.technology
    const articles = [...bootstrap,...javascript,...jquery,...node,...technology]
    const selected = document.querySelector(selector)

    articles.forEach(item => {
      selected.appendChild(Card(item))
    })
  })
  .catch(console.log("Sorry, it didn't work."));
  }


//HELP//
//I can't figure this part out. I've tried a few ways to get it but nothing seems to work other than breaking them down individually.


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
