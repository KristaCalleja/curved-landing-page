// Using the .getComputedStyle() method and passing the pseudo-element selector as second arguments, allows one to access pseudo-elements. However this is read-only, and I intended to set the class through it, so it wouldnt be useful.
// const sectionBeforePseudoElement = CSSStyleSheet('section');
// const section = document.getElementsByClassName('section::before')[0].className += 'pseudo-elements';
// var section = window.getComputedStyle(document.querySelector('section', '::before')).getPropertyValue('content');
// console.log(typeof section);
// section.classList.add('pseudo-element');
// console.log(typeof section); // it is an object
// console.dir(section);
// var sectionWidth = section.getPropertyValue('width');
// console.log(typeof sectionWidth); // it is a string
// console.log(sectionWidth);
// function addStyleOnPseudoElements(rules){
//     var div = document.createElement('div');
//     document.styleSheets[1].addRule('section:before', 'content:url(images/bg-section-top-mobile-1.svg)').classList.add('pseudo-element');

// }

// Put all images in an array
const  imageArray = new Array();
imageArray[0] = new Image();
imageArray[0].src  = 'images/bg-footer-top-desktop.svg';
imageArray[1] = new Image();
imageArray[1].src  = 'images/bg-footer-top-mobile.svg';
imageArray[2] = new Image();
imageArray[2].src  = 'images/bg-section-bottom-desktop-1.svg';
imageArray[3] = new Image();
imageArray[3].src  = 'images/bg-section-bottom-desktop-2.svg';
imageArray[4] = new Image();
imageArray[4].src  = 'images/bg-section-bottom-mobile-1.svg';
imageArray[5] = new Image();
imageArray[5].src  = 'images/bg-section-bottom-mobile-2.svg';
imageArray[6] = new Image();
imageArray[6].src  = 'images/bg-section-top-desktop-1.svg';
imageArray[7] = new Image();
imageArray[7].src  = 'images/bg-section-top-desktop-2.svg';
imageArray[8] = new Image();
imageArray[8].src  = 'images/bg-section-top-mobile-1.svg';
imageArray[9] = new Image();
imageArray[9].src  = 'images/bg-section-top-mobile-2.svg';

// Set media query
var x = window.matchMedia('(min-width: 900px)');

// Select the doms where the pseudo-elements need to be rendered
function footerEl(x){
    if (x.matches){
        document.styleSheets[1].addRule('footer::before', `content:url('${imageArray[0].src}');`);
        document.styleSheets[1].addRule('footer::before', 'display:flex');
        document.styleSheets[1].addRule('footer::before', 'overflow:hidden');
    } else {
        document.styleSheets[1].addRule('footer::before', `content:url('${imageArray[1].src}');`);
        document.styleSheets[1].addRule('footer::before', 'display:flex');
        document.styleSheets[1].addRule('footer::before', 'overflow:hidden');
    }
}
// Attached to section div
function topSectionEl(x){
    if (x.matches){
        document.styleSheets[1].addRule('section::before', `content:url('${imageArray[6].src}');`);
        document.styleSheets[1].addRule('section::before', 'display:flex');
        document.styleSheets[1].addRule('section::before', 'overflow:hidden');
    } else {
        document.styleSheets[1].addRule('section::before', `content:url('${imageArray[8].src}');`);
        document.styleSheets[1].addRule('section::before', 'display:flex');
        document.styleSheets[1].addRule('section::before', 'overflow:hidden');
    }
}
function bottomSectionEl(x){
    if (x.matches){
        document.styleSheets[1].addRule('section::after', `content:url('${imageArray[3].src}');`);
        document.styleSheets[1].addRule('section::after', 'display:flex');
        document.styleSheets[1].addRule('section::after', 'overflow:hidden');
    } else {
        document.styleSheets[1].addRule('section::after', `content:url('${imageArray[5].src}');`);
        document.styleSheets[1].addRule('section::after', 'display:flex');
        document.styleSheets[1].addRule('section::after', 'overflow:hidden');
    }
}
// Attached to last ribbon
function topRibbonEl(x){
    if (x.matches){
        document.styleSheets[1].addRule('.ribbon::before', `content:url('${imageArray[7].src}');`);
        document.styleSheets[1].addRule('.ribbon::before', 'display:flex');
        document.styleSheets[1].addRule('.ribbon::before', 'overflow:hidden');
    } else {
        document.styleSheets[1].addRule('.ribbon::before', `content:url('${imageArray[9].src}');`);
        document.styleSheets[1].addRule('.ribbon::before', 'display:flex');
        document.styleSheets[1].addRule('.ribbon::before', 'overflow:hidden');
    }
}
// Attached to first ribbon
function bottomRibbonEl(x){
    if (x.matches){
        document.styleSheets[1].addRule('.ribbon::after', `content:url('${imageArray[2].src}');`);
        document.styleSheets[1].addRule('.ribbon::after', 'display:flex');
        document.styleSheets[1].addRule('.ribbon::after', 'overflow:hidden');
    } else {
        document.styleSheets[1].addRule('.ribbon::after', `content:url('${imageArray[4].src}');`);
        document.styleSheets[1].addRule('.ribbon::after', 'display:flex');
        document.styleSheets[1].addRule('.ribbon::after', 'overflow:hidden');
    }
}

footerEl(x);
topSectionEl(x);
bottomSectionEl(x);
topRibbonEl(x);
bottomRibbonEl(x);
x.addListener(footerEl, topSectionEl, bottomSectionEl, topRibbonEl, bottomRibbonEl);


// Error handler
function handleError(err){
    console.log("Error");
    console.log(err);
}