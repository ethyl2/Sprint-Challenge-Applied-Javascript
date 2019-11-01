// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        const myArticles = Object.values(response.data.articles);
        myArticles.forEach(topicGroup => {
            //console.log("TopicGroup: " + topicGroup);
            topicGroup.forEach(article => {
                //console.log(article);
                cardsContainer.appendChild(createCard(article));
            });
        });
        
    })
    .catch( err => {
        console.log('Error message: ' + err);
    })

// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

//const create = (el) => document.createElement(el);

function createCard(cardObj) {
    let cardDiv = create('div');
    cardDiv.classList.add('card');

    let headlineDiv = create('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = cardObj.headline;

    let authorDiv = create('div');
    authorDiv.classList.add('author');

    let imgContainer = create('div');
    imgContainer.classList.add('img-container');

    let authorImg = create('img');
    authorImg.src = cardObj.authorPhoto;
    imgContainer.appendChild(authorImg);

    let authorSpan = create('span');
    authorSpan.textContent = `By ${cardObj.authorName}`;

    authorDiv.append(imgContainer, authorSpan);
    cardDiv.append(headlineDiv, authorDiv);

    return cardDiv;

}