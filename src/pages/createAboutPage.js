import { setUpBaseDiv } from "./createBaseline";

export function createAboutPage() {
    const mainDiv = setUpBaseDiv();

    const mainHeader = document.createElement('h1')
    mainHeader.innerText = 'About CityCube';
    mainHeader.classList.add('headers');
    mainDiv.appendChild(mainHeader);

    const lineBreak = document.createElement('div');
    lineBreak.classList.add('page-break');
    mainDiv.appendChild(lineBreak);

    const subHeader1 = document.createElement('h3');
    subHeader1.innerText = 'Humble beginnings';
    mainDiv.appendChild(subHeader1);

    const mainFig = document.createElement('figure');
    const founders1 = new Image();
    founders1.src = '../../res/images/founders/founders1.jpeg';
    founders1.classList.add('page-image');

    const figCap1 = document.createElement('figcaption');
    figCap1.innerText = 'Mohammad and Raz in front of their first Sidelines factory';
    mainFig.appendChild(founders1);
    mainFig.appendChild(figCap1);

    mainDiv.appendChild(mainFig);

    const p1 = document.createElement('p');
    p1.innerText = 'Started as a joint venture between Raz Keenz, son of CS/BANK founder, Abdul Keenz, and Mohammad Kapoor, CityCube started as a lone factory in the Sidelines. Originally selling their products via Netroutes, the pair bet their business on a physical store in Downtown, near the subway station on 7th Street.'
    mainDiv.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerText = 'Their gamble paid off! CityCube\'s location, being near a major hub of city foot-traffic, bright them many new customers, allured by the cost-effective nature of quick-made food, like the Cubes.';
    mainDiv.appendChild(p2);

    mainDiv.appendChild(lineBreak.cloneNode(false));

    const subHeader2 = document.createElement('h3');
    subHeader2.innerText = 'First factory';

    mainDiv.appendChild(subHeader2);
    const p3 = document.createElement('p');
    p3.innerText = 'The first factory in the Sidelines was a small, hastily-constructed building, capable of producing one hundred (100) meals an hour. While their Net traffic for the site was low, at the time, this factory still struggled to meet the demand of orders placed.';
    mainDiv.appendChild(p3);

    const fig2 = document.createElement('figure');
    const factory1 = new Image();
    factory1.src = '../../res/images/factory-images/factory2.jpg';
    factory1.classList.add('page-image');
    const figCap2 = document.createElement('figcaption');
    figCap2.innerText = 'The Sidelines factory interior during production';
    fig2.appendChild(factory1);
    fig2.appendChild(figCap2);
    mainDiv.appendChild(fig2);

    const p4 = document.createElement('p');
    p4.innerText = 'The first factory, unfortunately lost in the SimRiots of \'77, has since been renovated and turned into a musuem for avid CityCubers and City citizens.';
    mainDiv.appendChild(p4);
    
    return mainDiv;
}