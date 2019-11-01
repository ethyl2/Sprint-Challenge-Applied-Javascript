// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector('.header-container');

const create= el => document.createElement(el);

function Header() {
    let headerDiv = create('div');
    headerDiv.classList.add('header');

    let dateSpan = create('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = "MARCH 28, 2019";

    let headerH1 = create('h1');
    headerH1.textContent = "Lambda Times";

    let tempSpan = create('span');
    tempSpan.classList.add('temp');
    tempSpan.textContent = '98°';

    headerDiv.append(dateSpan, headerH1, tempSpan);
    return headerDiv;
}

headerContainer.appendChild(Header());