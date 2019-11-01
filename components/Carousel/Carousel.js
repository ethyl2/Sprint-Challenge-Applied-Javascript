/* If You've gotten this far, you're on your own! Although we will 
give you some hints:
    1. You will need to write a function that creates the carousel 
    component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. 
    Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');
// const create = (el) => document.createElement(el);

function createCarousel() {
  const carouselDiv = create('div');
  //TODO: fix 'carousel' css to it will display
  //carouselDiv.classList.add('carousel');
  
  const leftBtnDiv = create('div');
  leftBtnDiv.classList.add('left-button');
  leftBtnDiv.textContent = '<';
  leftBtnDiv.addEventListener('click', () => {
    mountainsImg.style.display = 'none';
    computerImg.style.display = 'none';
    turntableImg.style.display = 'block';
  })

  const rightBtnDiv = create('div');
  rightBtnDiv.classList.add('right-button');
  rightBtnDiv.textContent = '>';
  rightBtnDiv.addEventListener('click', () => {
    mountainsImg.style.display = 'none';
    turntableImg.style.display = 'none';
    computerImg.style.display = 'block';
  })

  const mountainsImg = create('img');
  mountainsImg.classList.add('carousel-photo');
  mountainsImg.classList.add('initial');
  mountainsImg.src = './assets/carousel/mountains.jpeg';

  const computerImg = create('img');
  computerImg.classList.add('carousel-photo');
  computerImg.src = './assets/carousel/computer.jpeg';
  computerImg.style.display = 'none';

  const treesImg = create('img');
  treesImg.classList.add('carousel-photo');
  treesImg.src = './assets/carousel/trees.jpeg';
  treesImg.style.display = 'none';

  const turntableImg = create('img');
  turntableImg.classList.add('carousel-photo');
  turntableImg.src = './assets/carousel/turntable.jpeg';
  turntableImg.style.display = 'none';

  carouselDiv.append(leftBtnDiv, mountainsImg, computerImg, treesImg, turntableImg, rightBtnDiv);
  return carouselDiv;
}

let myCarousel = createCarousel();
carouselContainer.appendChild(myCarousel);
console.log(carouselContainer);
