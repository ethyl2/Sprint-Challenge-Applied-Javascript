// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: 
// https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
const topicsDiv = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        //console.log(response);
        //console.log(response.data);

        // Iterate over the topics creating a new Tab component and add it to the DOM
        // under the .topics element.
        response.data.topics.forEach(topic => {
            console.log(topic);
            topicsDiv.appendChild(createTab(topic));
        });
    })
    .catch(err => {
        console.log("Error message: ", err);
    });

//const create = el => document.createElement(el);

//  The tab component should look like this:
//    <div class="tab">topic here</div>

function createTab(topic) {
    let topicDiv = create('div');
    topicDiv.classList.add('tab');
    topicDiv.textContent = topic;
    return topicDiv;
}
