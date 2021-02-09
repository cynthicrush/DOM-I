const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let navItem1 = document.querySelectorAll('nav a')[0];
navItem1.textContent = "Services";
navItem1.style.color = "green";

let navItem2 = document.querySelectorAll('nav a')[1];
navItem2.textContent = "Product";
navItem2.style.color = "green";

let navItem3 = document.querySelectorAll('nav a')[2];
navItem3.textContent = "Vision";
navItem3.style.color = "green";

let navItem4 = document.querySelectorAll('nav a')[3];
navItem4.textContent = "Features";
navItem4.style.color = "green";

let navItem5 = document.querySelectorAll('nav a')[4];
navItem5.textContent = "About";
navItem5.style.color = "green";

let navItem6 = document.querySelectorAll('nav a')[5];
navItem6.textContent = "Contact";
navItem6.style.color = "green";



let h1 = document.querySelector('h1');
h1.textContent = "DOM Is Awesome";

let btn = document.querySelector('button');
btn.textContent = "Get Started";

let headerImage = document.getElementById('cta-img');
headerImage.src = "img/header-img.png";

let features = document.querySelectorAll('.top-content h4')[0];
features.textContent = "Features";
let featuresP = document.querySelectorAll('.top-content p')[0];
featuresP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let about = document.querySelectorAll('.top-content h4')[1];
about.textContent = "About";
let aboutP = document.querySelectorAll('.top-content p')[1];
aboutP.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let midImage = document.getElementById('middle-img');
midImage.src = "img/mid-page-accent.jpg";


let services = document.querySelectorAll('.bottom-content h4')[0];
services.textContent = "Services";
let servicesP = document.querySelectorAll('.bottom-content p')[0];
servicesP.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let product = document.querySelectorAll('.bottom-content h4')[1];
product.textContent = "Product";
let productP = document.querySelectorAll('.bottom-content p')[1];
productP.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let vision = document.querySelectorAll('.bottom-content h4')[2];
vision.textContent = "Vision";
let visionP = document.querySelectorAll('.bottom-content p')[2];
visionP.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = "Contact";

let contactP1 = document.querySelectorAll('.contact p')[0];
contactP1.textContent = "123 Way 456 Street Somewhere, USA";
let contactP2 = document.querySelectorAll('.contact p')[1];
contactP2.textContent = "1 (888) 888-8888";
let contactP3 = document.querySelectorAll('.contact p')[2];
contactP3.textContent = "sales@greatidea.io";


let footer = document.querySelector('footer p');
footer.textContent = "Copyright Great Idea! 2018";


let newA = document.createElement('a');
let content = document.createTextNode('Projects');
newA.appendChild(content);
document.querySelector('nav').appendChild(newA);

let nav = document.querySelector('nav');
let newA2 = document.createElement('a');
nav.prepend('Experiences');

// Stretch
let btnOnClick = document.querySelector('button');
btnOnClick.onmouseover = function() {
  btnOnClick.textContent = "Let's Go!";
}
btnOnClick.onmouseout = function() {
  btnOnClick.textContent = "Get Started";
}