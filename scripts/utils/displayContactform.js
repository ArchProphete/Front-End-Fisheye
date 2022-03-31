import { createElementToCard, logContactFormContent } from './functions.js';
import { closeModal } from './functions.js';

/**
 * CREATE AND DISPLAY MODAL CONTACT FORM
 * @param idFind
 */
export const displayContactform = (idFind) => {
    const modal = document.getElementById('contact_modal');

    // Header
    const elementH2 = createElementToCard('h2', 'Contactez-moi', null);
    const elementH3 = createElementToCard('h3', idFind.name, null);

    const elementDivTitle = createElementToCard('div', null, null);
    elementDivTitle.append(elementH2, elementH3);

    const elementIMG = createElementToCard('img', null, [
        { attribut: 'src', content: 'assets/icons/close.svg' },
        { attribut: 'aria-label', content: 'Fermer' },
        { attribut: 'tabindex', content: '6' },
    ]);

    const elementHeader = createElementToCard('header', null, null);
    elementHeader.append(elementDivTitle, elementIMG);

    // Form FirstName
    const elementInputFirstName = createElementToCard('input', null, [
        { attribut: 'id', content: 'first' },
        { attribut: 'tabindex', content: '1' },
    ]);
    const elementLabelFirstName = createElementToCard('label', 'Prénom', null);
    elementLabelFirstName.appendChild(elementInputFirstName);

    const elementDivFirstName = createElementToCard('div', null, null);
    elementDivFirstName.appendChild(elementLabelFirstName);

    // Form LastName
    const elementInputLastName = createElementToCard('input', null, [
        { attribut: 'id', content: 'last' },
        { attribut: 'tabindex', content: '2' },
    ]);
    const elementLabelLastName = createElementToCard('label', 'Nom', null);
    elementLabelLastName.appendChild(elementInputLastName);

    const elementDivLastName = createElementToCard('div', null, null);
    elementDivLastName.appendChild(elementLabelLastName);

    // Form Email
    const elementInputEmail = createElementToCard('input', null, [
        { attribut: 'id', content: 'email' },
        { attribut: 'tabindex', content: '3' },
    ]);
    const elementLabelEmail = createElementToCard('label', 'Email', null);
    elementLabelEmail.appendChild(elementInputEmail);

    const elementDivEmail = createElementToCard('div', null, null);
    elementDivEmail.appendChild(elementLabelEmail);

    const elementLabelMessage = createElementToCard(
        'label',
        'Votre message',
        null
    );
    const elementTextarea = createElementToCard('textarea', null, [
        { attribut: 'id', content: 'message' },
        { attribut: 'tabindex', content: '4' },
    ]);

    const elementDivTextarea = createElementToCard('div', null, null);
    elementDivTextarea.append(elementLabelMessage, elementTextarea);

    const elementButton = createElementToCard('button', 'Envoyer', [
        { attribut: 'class', content: 'contact_button' },
        { attribut: 'aria-label', content: 'Envoyer' },
        { attribut: 'tabindex', content: '5' },
    ]);

    const elementForm = createElementToCard('form', null, null);
    elementForm.append(
        elementDivFirstName,
        elementDivLastName,
        elementDivEmail,
        elementDivTextarea,
        elementButton
    );

    const elementGlobalDiv = createElementToCard('div', null, [
        { attribut: 'class', content: 'modal' },
    ]);
    elementGlobalDiv.append(elementHeader, elementForm);

    modal.appendChild(elementGlobalDiv);

    modal.style.display = 'block';

    elementIMG.addEventListener('click', () => {
        closeModal(modal);
    });

    elementButton.addEventListener('click', () => {
        logContactFormContent(
            document.getElementById('first').value,
            document.getElementById('last').value,
            document.getElementById('email').value,
            document.getElementById('message').value
        );
        closeModal(modal);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            logContactFormContent(
                document.getElementById('first').value,
                document.getElementById('last').value,
                document.getElementById('email').value,
                document.getElementById('message').value
            );
            closeModal(modal);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(modal);
        }
    });
};
