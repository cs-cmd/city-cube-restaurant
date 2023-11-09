import { setUpBaseDiv } from "./createBaseline";

export function createContactPage() {
    const mainDiv = setUpBaseDiv();

    const header = document.createElement('h1');
    header.style.textAlign = 'center';
    header.innerText = 'Contact Us!';

    const contactForm = document.createElement('form');
    contactForm.id = 'contact-form';
    contactForm.classList.add('contact-form');
    contactForm.method = 'POST';
    contactForm.action = '#';

    // create email label and input
    const emailInput = document.createElement('input');
    emailInput.id = 'email-input';
    emailInput.required = true;
    emailInput.name = 'email';
    emailInput.type = 'email';
    emailInput.placeholder = 'example@citycube.com';
    emailInput.classList.add('form-input');

    const emailInputLabel = document.createElement('label');
    emailInputLabel.htmlFor = emailInput.id;
    emailInputLabel.innerText = 'Email *';
    emailInputLabel.classList.add('form-label');

    // create country input and label
    const countryInput = document.createElement('input');
    countryInput.id = 'country-input';
    countryInput.required = true;
    countryInput.name = 'country';
    countryInput.type = 'text';
    countryInput.pattern = '[\\sA-Za-z]{1,60}';
    countryInput.classList.add('form-input');
    countryInput.placeholder = 'Country';
    // countryInput.pattern = [A-Z{1}]...

    const countryInputLabel = document.createElement('label');
    countryInputLabel.htmlFor = countryInput.id;
    countryInputLabel.innerText = 'Country *';
    countryInputLabel.classList.add('form-label');

    // create zip code input and label
    const zipCodeInput = document.createElement('input');
    zipCodeInput.id = 'zip-code-input';
    zipCodeInput.required = 'true'
    zipCodeInput.name = 'zipcode';
    zipCodeInput.type = 'text';
    zipCodeInput.placeholder = '00000[-0000]';
    zipCodeInput.classList.add('form-input');
    // will validate only if 00000 or 00000-0000
    zipCodeInput.pattern = '[0-9]{5}(-[0-9]{4})?';

    const zipCodeLabel = document.createElement('label');
    zipCodeLabel.htmlFor = zipCodeInput.id;
    zipCodeLabel.innerText = 'Zipcode *';
    zipCodeLabel.classList.add('form-label');


    // create password input/label
    const passwordInput = document.createElement('input');
    passwordInput.required = true;
    passwordInput.name = 'password';
    passwordInput.id = 'password-input';
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.minLength = '7';
    passwordInput.classList.add('form-input');
    passwordInput.pattern = '[A-Za-z0-9 !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~]{8,}'

    const passwordLabel = document.createElement('label');
    passwordLabel.htmlFor = passwordInput.id;
    passwordLabel.innerText = 'Password *';
    passwordLabel.classList.add('form-label');

    // create confirm password input/label
    const confPasswordInput = document.createElement('input');
    confPasswordInput.required = true;
    confPasswordInput.id = 'conf-password-input';
    confPasswordInput.type = 'password';
    confPasswordInput.placeholder = 'Confirm password';
    confPasswordInput.classList.add('form-input');
    confPasswordInput.addEventListener('input', () => {
        if(passwordInput.value !== confPasswordInput.value) {
            confPasswordInput.setCustomValidity('The passwords must match.');
        }
        else {
            confPasswordInput.setCustomValidity('');
        }
        confPasswordInput.reportValidity();
    })

    const confPasswordLabel = document.createElement('label');
    confPasswordLabel.htmlFor = confPasswordInput.id;
    confPasswordLabel.innerText = 'Confirm Password *';
    confPasswordLabel.classList.add('form-label');

    const commentsInput = document.createElement('textarea');
    commentsInput.id = 'comments-input';
    commentsInput.name = 'comments';
    commentsInput.classList.add('form-textarea');
    commentsInput.placeholder = 'Type your comments here!';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Contact!'
    submitButton.classList.add('page-button');
    submitButton.classList.add('form-button');
    submitButton.addEventListener('click', (e) => {
        // add hashed password to hidden input, use that in sending to server (ex.)
    });

    const submitConfirmation = document.createElement('p');
    submitConfirmation.classList.add('form-conf');

    // add all elements in batches to form
    contactForm.append(emailInputLabel, emailInput);
    contactForm.append(countryInputLabel, countryInput);
    contactForm.append(zipCodeLabel, zipCodeInput);
    contactForm.append(passwordLabel, passwordInput);
    contactForm.append(confPasswordLabel, confPasswordInput);
    contactForm.appendChild(commentsInput);
    contactForm.appendChild(submitButton);
    contactForm.appendChild(submitConfirmation);

    contactForm.addEventListener('submit', (e) => {
        submitConfirmation.innerText = 'Thank you for submitting your data!';
        e.preventDefault();
    });


    mainDiv.appendChild(header);
    mainDiv.appendChild(contactForm);
    
    return mainDiv;
}