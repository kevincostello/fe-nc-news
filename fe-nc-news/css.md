# CSS

## Prior Knowledge

- The contents of PRE-Section 3, including a basic understanding of CSS syntax and how to apply it using selectors in your HTML.
- A basic understanding of how React code is build from constructing different components together

## Learning Objectives

- how CSS is interpreted by the browser
- the basics of building CSS into your project
- an outline to solutions is modularising your CSS
- how to use CSS modules within a Create React App application

## Background

CSS was first proposed as a solution to separating the presentation of a document from its content (the realm of HTML) in 1994, a year before JavaScript. It has undergone several changes since then, including several key features falling under the `CSS3` umbrella, including flex and grid.

Several tools exist around CSS which we do not cover in the course, including pre-processors such as `SASS`, `LESS` and `Stylus` which allow you to write CSS with other syntaxes, allowing better code organisation and reusability.

## Notes

### Cascading Style Sheets

When a browser interprets CSS, it will look to assign styling to individual tags on a page depending on their attributes. Most commonly, styles are applied to tags in general, to prescribed classes, or sometimes to individual ids:

```css
/* to all divs */
div {
  display: flex;
  width: 100%;
}

/* to all tags given a class (called `className` in React) of 'my-class' */
.my-class {
  display: flex;
  width: 100%;
}

/* to all tags given an id of 'my-class' (but note that an id connotes the uniqueness of the tag) */
#my-class {
  display: flex;
  width: 100%;
}

/* to all divs with a class of 'my-class' */
div.my-class {
  display: flex;
  width: 100%;
}

/* to all div children of an element tagged 'my-class' (ancestral) */
.my-class div {
  display: flex;
  width: 100%;
}

/* to all *immediate* div children of an element tagged 'my-class' */
.my-class > div {
  display: flex;
  width: 100%;
}
```

It is possible for some of these classes to contradict each other - an element may receive styling based on its tag name, its class name, its id, its ancestry (parent elements), from browser defaults or other potential sources.

The 'cascading' in CSS implies that the latest definition will generally be the one that is applied, though sometimes different rules apply when styling as passed through ancestry. This can be a potential source of pain when debugging CSS - identifying which elements are having an effect and which are being overridden. Using the *elements* browser tool to see which properties are being applied can be very useful in this situation - you can even toggle properties or change their values to see the impact.

This cascading design can make attributing styles difficult, particularly when dealing with the modular, componentised style of a front end framework like React. By default, when Create React App builds your application, any imported CSS is combined into a single stylesheet. So even if you define several CSS files and organise them in your repository so they logically correspond with particular components, this will not necessarily produce what you expect when they are all combined. In this situation, CSS essentially becomes a 'global variable' for the whole application, but one that is defined (and potentially redefined) across multiple files.

### Naming conventions

In situations like these it is always a good idea to adopt a naming convention that can help you identify the application of a particular style. One widely adopted convention is **BEM**, or 'Block Element Modifier'. This seeks to define styles in terms of elements' position, responsibility and state. For example we might style a `button` (an _element_) based on its position within a `form` (a _block_) differently based on whether it was disabled (a _modifier_).

```jsx
<form className="order-form">
  <input type="text" className="input order-form__input" />
  <button className={`button order-form__button ${this.state.isFormValidated ? 'order-form__button--active' : 'order-form__button--inactive'}`}>Place my order!</button>
</form>
```

This helps to avoid tight coupling between your CSS elements that ancestry might cause, and ensures you have you right degree of specificity, making it supposedly easier to find and ascribe the relevant classes to each block. However it is reliant on a certain discipline to keep up to date, and can cause some considerable bulk in the codebase as demonstrated above. You can read more about BEM on [their website](http://getbem.com/).

### CSS in JS

There has been a strong trend towards incorporating CSS with the JavaScript that determines your code behaviour. Whilst this goes against many years received wisdom in front end design, React has essentially ripped up the rulebook in combining HTML and JavaScript, so CSS is in some ways a logical next step.

A clear benefit of declaring your CSS with JavaScript is the ability to use all of JavaScript's logic flow and variable assignment within your styles. Whereas CSS is limited to the prescribed values that the browser can interpret, a JavaScript object can conditionally or computationally prescribe these values:

```js
const isDarkModeActive = true;
const zoomFactor = 4;

const siteStyles = {
  background: isDarkmodeActive ? 'black' : 'white',
  fontSize: `${2 * zoomFactor}em`
}
```

There are different ways of applying this idea. A popular library is **jss** ([docs](https://cssinjs.org/?v=v10.0.0-alpha.21)), where styles are created separately from the component, then 'injected' into the component. If you want to base your styles on React state, then a good solution is **styled components** ([docs](https://www.styled-components.com/)), which will create parent styled elements that can wrap your components or content. Because they are React components, they can have props passed in like any other component, which can define the content of the CSS.

### CSS modules

Another modern way of approaching CSS is to treat it in the same 'componentised' way we split our React code. This is possible with **CSS modules** ([github repo / docs](https://github.com/css-modules/css-modules)), a slimline library that is now incorporated by default into `create-react-app` projects. As such, it take no configuration on our part to incorporate it into these projects.

Instead of importing CSS files directly, extend your file name with `.module` and import a value like you would a component:

```js
import styles from './App.module.css;
```

It's important that you use the `module` as part of your filename, as the configuration for React app will look for files named this way when it is built (for development using `react-scripts start` or for production using `react-scripts build`).

**CSS modules** allow you to write your CSS in the 'expected' way - it allows you to write CSS styles that are _local_ to the component into which they are imported. This removes the issue that **BEM** tries to solve. You can use - and re-use - class names for your styles that are appropriate to the component you are working with:

```css
/* SignIn.module.css */
.formLabel {
  font-size: 1em;
}

/* Register.module.css */
.formLabel {
  font-size: 1.2em;
}
```

```js
// SignIn.js
import React from 'react';
import styles from './SignIn.module.css';

class SignIn extends React.Component {
  render () {
    return <label className={styles.formLabel}>
      Username:
      <input />
    </label>
  }
  //etc...
}

// Register.js
import React from 'react';
import styles from './Register.module.css';

class Register extends React.Component {
  render () {
    return <label className={styles.formLabel}>
      Email:
      <input />
    </label>
  }
  //etc...
}
```

In this example, we have used the class name `formLabel` for both definitions - because that's the name that best describes what we are styling. Even though they share a name, they will only affect the component they have been imported into. This works because of _pre-processing_ during the build configuration. If you inspect the element in the browser, you will see that the actual class name of the element and the style is transformed to something like `.styles__formLabel--3gcRC`, so that when the browser interprets it, it is unique.

#### Composing styles

**CSS modules** offers one additional piece of functionality, commonly found in pre-processors like **SASS** and **Stylus** - the ability to compose styles. This prevents you from unnecessarily repeating common styles throughout your definitions:

```css
.theme {
  color: green;
  background: red;
}

.formLabel {
  composes: theme;
  fontSize: 1em;
}
```