## NC News Intro

## Prior Knowledge

- Be confident using axios to make requests
- Be able to use React lifecycle methods
- Understand how to create a controlled component

## Learning Objectives

- Be able to fix cross-origin resource sharing (CORS) issues
- Be comfortable using a separate file for functions making API requests
- Understand how to use the axios params object
- Understand how to build reusable React components
- Understand how to approach logged-in user functionality

## Axios Params

Sometimes the request you want to send may have many different combinations of queries based on user inputs. Instead of trying to programmatically build the query ourselves `axios` provides a way of passing in any possible number of queries and will build up the query string for you.

To pass any extra information to an axios get request, like a body or query, axios takes an optional second argument - a config options object.
Inside this object under the key of params is another object. The key value pairs of this params object declares all the queries that will be appended onto the url.

The following will evaluate to a url string of `data?ID=12345&all_data=true`

```js
axios.get('/data', {
  params: {
    ID: 12345,
    all_data: true,
  },
});
```

## Reusability of Components

Think about the scenario where you've made your `Articles` component. It currently gets the articles sorted by date. Then your user wants to see articles by a particular user. Do you make a separate component `UserArticles`?

['Thinking in React'](https://reactjs.org/docs/thinking-in-react.html) means you shouldn't have to. If the only thing that is going to change on your page is the data but the template displaying that data is going to look the same then we'll have to devise ways to not make dozens of components that largely look the same.

There is one main way to approach this: separate and reusable components.

Some useful questions to ask yourself are:

> Which bit of code would I copy and paste over into this new `UserArticle` Component?
> That code is what can be extracted away from the context of its Component into its own Component, and be made to simply accept data on props - no matter where it came from.

## CORS

You will come across a ['cross-origin resource sharing'](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (CORS) error message when you try to get data from your back-end API. This is because, by default, `express` blocks any requests made to it from another domain (at this point, probably `http://localhost:3000`).

To allow CORS on your back-end API for NC News:

````bash
npm install cors
In your `app.js` file, require in the package:

```js
const cors = require('cors');
````

In your `app.js` file, have your app use the `cors` middleware after all of your require statements:

```js
app.use(cors());
```

More info found on the [express documentation](https://expressjs.com/en/resources/middleware/cors.html).

## Logged-in user

Having a user be logged-in to your site is an important facet of its functionality. Why should someone anonymous be able to troll and post comments?

Think about where your app could store the details for a logged-in user and use them where some functionality might depend on the logged in user. E.g.

- Posting a comment: should the user have to retype their username?
- Deleting a comment: should the user be able to delete other user's comments?