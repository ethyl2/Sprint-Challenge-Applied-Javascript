# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

**1. What is the DOM?**

The DOM stands for Document Object Model. It’s a language-neutral object representation of the HTML elements of a web page, and an API (which is an application program interface -- a set of routines, protocols, and tools, used to specify how software components interact successfully with each other). It's created by the browser when a web page is loaded. It has the structure of a tree, with nodes and objects. It allows access to the parts of the page and the ability to change them.

**2. What is an event?**

An event is an action taken on an element of a web page, because of something a user or API does, or because something changes in an element. Some events are ‘click’, ‘mousedown’, ‘load’, and ‘touchstart.’ There's lots of them.

**3. What is an event listener?**

It is a callback function that is to be executed only when a specified event happens.

elementToWatch.addEventListener('event', listenerCallback);

.addEventListener() takes 2 required paramenters, the event type and the listener callback function that is called only when that event type happens on that element.

**4. Why would we convert a NodeList into an Array?**

A NodeList is not technically an Array. Converting it into an Array is necessary in order to use Array methods, which can be very helpful when dealing with elements in a NodeList. NodeLists have a .forEach(), but don't any of the others Array methods, such as .map().

**5. What is a component?**

A component is generally a smaller piece or bundle of code that is DRY (helps to eliminate repeating code) and is reusable. It can have everything it needs to function, packaged together -- an example would be a directory with subdirectories containing html, css, and scripts, all needed to make a specific element. A component can be used to build elements that have similar styles, structure and function. They are generally created to be used in combination with other parts, and can be reused in different projects.

### Git Set up

* [ ] Fork the project into your GitHub user account
* [ ] Clone the forked project into a directory on your machine
* [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [ ] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [ ] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

* [ ] Following the instructions in the `Header/index.js` file, create the Header component. 

* [ ] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [ ] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
