# evaluate-news
##4th Project for FEND

** Gain experience with: **
* Setting up Webpack
* Webpack Loaders and Plugins
* Creating Layouts and Page Design
* Service Workers
* Using APIs
* NLP

Unfortunately, due to Aylien no longer supporting the Text API, I had to use the News API and instead have changed the project to 'Fetch News'. Although the News API has a field for sentiment, it comes through as `{ body: [Object], title: [Object] }`.

User enters a search topic and the API returns a list of 10 news articles on the topic.  I added date, source, and full article links to make it easier.

** To run this project: **
* Development Environment
  Build with `npm run build-dev`.  Runs on http://localhost:8080/

* Production Environment
  Build with `npm run build-prod`.  Runs on http://localhost:8081/

* Run server with `npm start`.

* Run tests with `npm test`.


** Made with the lovely help from: **
* [CSS Tricks](https://css-tricks.com/)
* [Google Developers](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)
* [MDN Web Docs](https://developer.mozilla.org/en-US/)
* [Stack Overflow](https://stackoverflow.com/)
* [w3schools](https://www.w3schools.com/default.asp)
* [Webpack](https://webpack.js.org/)
* and fellow student Derek T who figured out how to use the News API!
