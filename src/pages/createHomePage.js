import { setUpBaseDiv,createLink } from "./createBaseline";
import '../../res/styles/tab-link-style.css';

export function createHomePage(homeImagePath) {
    // create home page
    const homePageDiv = setUpBaseDiv();

    // set up and add main header
    const mainHeader = document.createElement('h1');
    mainHeader.classList.add('headers');
    mainHeader.innerText = 'Welcome to CityCube!';
    homePageDiv.appendChild(mainHeader);

    // set up and add subheader to page
    const subHeader = document.createElement('h3');
    subHeader.classList.add('headers');
    subHeader.innerText = "The City's one-and-only meal-replacement chain restaurant!";
    homePageDiv.appendChild(subHeader);

    // set up and add main figure image
    const mainFigure = document.createElement('figure');
    const image = new Image();
    image.src = homeImagePath;
    image.alt = 'AI-generated image of storefront with a bright light in a dystopian city';
    image.classList.add('page-image');
    
    // create figure caption element
    const figCap = document.createElement('figcaption');
    figCap.innerText = "CityCube's first brick-and-mortar store in Downtown, near 7th Street Station";
    mainFigure.appendChild(image);
    mainFigure.appendChild(figCap);
    homePageDiv.appendChild(mainFigure);

    // add page break line
    const pageBreak = document.createElement('div');
    pageBreak.classList.add('page-break');
    homePageDiv.appendChild(pageBreak);

    // Add first paragraph
    const p1 = document.createElement('p');
    p1.innerText = "With locations from Downtown to the Upper Sides, CityCube is your one-stop-shop for quick-and-easy meal replacements!";
    homePageDiv.appendChild(p1);

    // add second paragraph
    const p2 = document.createElement('p');
    p2.innerHTML = "Our patented formula of nutrients and minerals sourced from exotic locations across our planet provides you with everything your body needs to function in our society! View ";
    const menuLink = createLink('our menu', 'menu');
    p2.innerHTML += menuLink.outerHTML;
    p2.innerHTML += ' to get an idea of what our store specializes in!';
    homePageDiv.appendChild(p2);

    // Add third paragraph and link to contact form
    const p3 = document.createElement('p');
    p3.innerHTML = "As a member of the CS/CMD umbrella conglomerate, you can use your ::CS/CREDIT:: here to purchase your goods! You can inquire more about these options in our ";
    const contactLink = createLink('contact form', 'contact');
    p3.innerHTML += contactLink.outerHTML;
    p3.innerHTML += '.';
    homePageDiv.appendChild(p3);

    // add fourth paragraph and link to about page
    const p4 = document.createElement('p');
    p4.innerHTML = "Interested in how our store came to be in the City? View " 
    const aboutLink = createLink('our about page', 'about');
    p4.innerHTML += aboutLink.outerHTML;
    p4.innerHTML += " to learn about our founder's journey through the bureaucratic jungle to secure a foothold in the food industry here in our beautiful City.";
    homePageDiv.appendChild(p4);
    
    // return div
    return homePageDiv;
}