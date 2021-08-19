# Frontend Mentor - Huddle landing page with curved sections solution

This is a solution to the [Huddle landing page with curved sections challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Git repository](https://github.com/KristaCalleja/curved-landing-page)
- Live Site URL: [Live site](https://kristacalleja.github.io/curved-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS custom properties
- Flexbox
- Vanilla JavaScript

### What I learned

It was totally unnecessary for me to use JavaScript for the creation of the pseudo-elements in this project (albeit it would have created a lot of repeated code in CSS file), however, since this is a practice project I wanted to make use of my JS knowledge and put it to use. Hence, I made a lot of discoveries. The main ones being:
- the nature of pseudo-elements and how these are not part of the DOM and hence cannot be read and manipulated like traditional elements;
- I toyed with the idea of creating the pseudo-elements upfront and then applying a specific styling class through JS. This would have required the use of `.getComputedStyle()` method, which however turns out to be read-only and therefore not applicable to my case;
- I therefore discovered that I could access my document stylesheet and add my rules through it. 

```js
document.styleSheets[1].addRule('footer::before', `content:url('${imageArray[0].src}');`);
```

__UPDATE__
Ultimately, I had to remove the `.src` on the iteration, since this was not used once I changed to array literal notation (see more below).

As you can see, I saved all the images in an array and iterated over each one and rendering them through interpolation.

The creation of an array for images wasn't as straightforward either. To access the image in root you need to set the source through `imageArray[8].src`. __See above__

Of course, I also needed to make sure that the page remained responsive, therefore I used if statements to check the window for size and render the correct image if it matches.

```js
// Set media query
var x = window.matchMedia('(min-width: 900px)');
```

__UPDATE__

Upon testing in Chrome, the `.matchMedia` method was not compatible. It was recommended to use the `userAgentData` read-only property which returns a boolean as to whether the user is accessing from desktop or mobile. Although the docs state that this is not fully compatible with all browsers as it is still experimental, it worked on both Firefox and Chrome on my machine.

The aim of applying JS for this relatively simple task was inspired from the desire to write less CSS code (for fun, because I do enjoy it!). It  turns out I had to write just as much JS code, however it was easily done with the Visual Studio Code plugin Text Pastry and ample use of multi-carret selection.

### Continued development

Of course, this is a work in progress and still needs some tweaking. I also need to check all accessibility rules. Meanwhile, I'm curious to know how feasible it is to use JS for style rendering, especially pseudo-elements.

### Useful resources

- [Accessing Pseudo-elements through JS](https://medium.com/how-tos-for-coders/https-medium-com-kaushalshah1307-get-pseudo-elements-using-javascript-b64c88a96c46) - A useful tool for the future.
- [Stackoverflow varied solutions](https://stackoverflow.com/questions/5041494/selecting-and-manipulating-css-pseudo-elements-such-as-before-and-after-usin) - Suggestions on how to select and manipulate pseudo-elements through JS.
- [Creating an array of images](https://www.codegrepper.com/code-examples/javascript/array+of+images+javascript) __UPDATE__ this resource is not recommended any longer. After passing my code through JSHint [JSHint](https://jshint.com) I learnt that array literal notation is preferred using empty brackets, like so: `newArray = []`. Therefore the images and their source needed less code, so that's a double thumbs up!
- [Media Queries with JavaScript](https://www.w3schools.com/howto/howto_js_media_queries.asp)
- [Text Pastry](https://twitter.com/wesbos/status/926484635437228038?lang=en) - Inspiration on using this plugin for some quick insertion of incremental numbers.

## Author

- Frontend Mentor - [@KristaCalleja](https://www.frontendmentor.io/profile/KristaCalleja)
- Twitter - [@krista_calleja](https://www.twitter.com/krista_calleja)