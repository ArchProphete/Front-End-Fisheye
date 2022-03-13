const displayContactform = () => {
    const modal = document.getElementById("contact_modal");

    // Header
    const elementH2 = createElementToCard('h2', 'Contactez-moi', null)
    const elementIMG = createElementToCard('img', null, null )
    elementIMG.setAttribute('src', 'assets/icons/close.svg')

    const elementHeader = createElementToCard('header', null, null)

    elementHeader.appendChild(elementH2);
    elementHeader.appendChild(elementIMG);

    // Form FirstName
    const elementInputFirstName = createElementToCard('input', null, null)
    const elementLabelFirstName = createElementToCard('label', 'Prénom', null)

    elementLabelFirstName.appendChild(elementInputFirstName);

    const elementDivFirstName = createElementToCard('div', null, null)

    elementDivFirstName.appendChild(elementLabelFirstName)

    // Form LastName
    const elementInputLastName = createElementToCard('input', null, null)
    const elementLabelLastName = createElementToCard('label', 'Nom', null)

    elementLabelLastName.appendChild(elementInputLastName);

    const elementDivLastName = createElementToCard('div', null, null)

    elementDivLastName.appendChild(elementLabelLastName)

    // Form Email
    const elementInputEmail = createElementToCard('input', null, null)
    const elementLabelEmail = createElementToCard('label', 'Email', null)

    elementLabelEmail.appendChild(elementInputEmail);

    const elementDivEmail = createElementToCard('div', null, null)

    elementDivEmail.appendChild(elementLabelEmail)

    const elementLabelMessage = createElementToCard('label', 'Votre message:', null);
    const elementTextarea = createElementToCard('textarea', null, null);

    const elementDivTextarea = createElementToCard('div', null, null);

    elementDivTextarea.appendChild(elementLabelMessage)
    elementDivTextarea.appendChild(elementTextarea)

    const elementButton = createElementToCard('button', 'Envoyer', [{attribut: 'class', content: 'contact_button'}]
    );

    const elementForm = createElementToCard('form', null, null)

    elementForm.appendChild(elementDivFirstName)
    elementForm.appendChild(elementDivLastName)
    elementForm.appendChild(elementDivEmail)
    elementForm.appendChild(elementDivTextarea)
    elementForm.appendChild(elementButton)

    const elementGlobalDiv = createElementToCard('div', null, [{attribut: 'class', content: 'modal'}])

    elementGlobalDiv.appendChild(elementHeader)
    elementGlobalDiv.appendChild(elementForm)

    modal.appendChild(elementGlobalDiv)

    modal.style.display = "block";

    elementIMG.addEventListener('click', () => {
        const modal = document.getElementById("contact_modal");
        modal.style.display = "none";
    })
}

