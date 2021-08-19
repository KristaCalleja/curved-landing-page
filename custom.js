/*jshint esversion: 6 */

// Put all images in an array
const imageArray = ['images/bg-footer-top-desktop.svg', // [0]
    'images/bg-footer-top-mobile.svg', // [1] 
    'images/bg-section-bottom-desktop-1.svg', // [2] 
    'images/bg-section-bottom-desktop-2.svg', // [3]
    'images/bg-section-bottom-mobile-1.svg', // [4]
    'images/bg-section-bottom-mobile-2.svg', // [5]
    'images/bg-section-top-desktop-1.svg', // [6]
    'images/bg-section-top-desktop-2.svg', // [7]
    'images/bg-section-top-mobile-1.svg', // [8]
    'images/bg-section-top-mobile-2.svg', // [9]
];

// Set media query
const isMobile = navigator.userAgent.mobile;

// Select the doms where the pseudo-elements need to be rendered
function footerEl(){
    if (!isMobile){ // true to 'desktop'
    document.styleSheets[1].addRule('footer::before', `content:url('${imageArray[0]}');`);
    document.styleSheets[1].addRule('footer::before', 'display:flex');
    document.styleSheets[1].addRule('footer::before', 'overflow:hidden');
} else {
    document.styleSheets[1].addRule('footer::before', `content:url('${imageArray[1]}');`);
        document.styleSheets[1].addRule('footer::before', 'display:flex');
        document.styleSheets[1].addRule('footer::before', 'overflow:hidden');
    }
};

// Attached to section div
function topSectionEl(){
    if (!isMobile){
        document.styleSheets[1].addRule('section::before', `content:url('${imageArray[6]}');`);
        document.styleSheets[1].addRule('section::before', 'display:flex');
        document.styleSheets[1].addRule('section::before', 'overflow:hidden');
    } else {
        document.styleSheets[1].addRule('section::before', `content:url('${imageArray[8]}');`);
        document.styleSheets[1].addRule('section::before', 'display:flex');
        document.styleSheets[1].addRule('section::before', 'overflow:hidden');
    }
};

function bottomSectionEl(){
    if (!isMobile){
        document.styleSheets[1].addRule('section::after', `content:url('${imageArray[3]}');`);
        document.styleSheets[1].addRule('section::after', 'display:flex');
        document.styleSheets[1].addRule('section::after', 'overflow:hidden');
    } else {
        document.styleSheets[1].addRule('section::after', `content:url('${imageArray[5]}');`);
        document.styleSheets[1].addRule('section::after', 'display:flex');
        document.styleSheets[1].addRule('section::after', 'overflow:hidden');
    }
};

// Attached to last ribbon
function topRibbonEl(){
    if (!isMobile){
        document.styleSheets[1].addRule('.ribbon::before', `content:url('${imageArray[7]}');`);
        document.styleSheets[1].addRule('.ribbon::before', 'display:flex');
        document.styleSheets[1].addRule('.ribbon::before', 'overflow:hidden');
    } else {
        document.styleSheets[1].addRule('.ribbon::before', `content:url('${imageArray[9]}');`);
        document.styleSheets[1].addRule('.ribbon::before', 'display:flex');
        document.styleSheets[1].addRule('.ribbon::before', 'overflow:hidden');
    }
};

// Attached to first ribbon
function bottomRibbonEl(){
    if (!isMobile){
        document.styleSheets[1].addRule('.ribbon::after', `content:url('${imageArray[2]}');`);
        document.styleSheets[1].addRule('.ribbon::after', 'display:flex');
        document.styleSheets[1].addRule('.ribbon::after', 'overflow:hidden');
    } else {
        document.styleSheets[1].addRule('.ribbon::after', `content:url('${imageArray[4]}');`);
        document.styleSheets[1].addRule('.ribbon::after', 'display:flex');
        document.styleSheets[1].addRule('.ribbon::after', 'overflow:hidden');
    }
};

// Function invocation
footerEl();
topSectionEl();
bottomSectionEl();
topRibbonEl();
bottomRibbonEl();

// Error handler
function handleError(err){
    console.log("Error");
    console.log(err);
}