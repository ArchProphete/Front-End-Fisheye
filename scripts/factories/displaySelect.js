import { createElementToCard } from '../utils/functions.js';

/**
 * CREATE AND DISPLAY SELECTION OPTION TO SORT MEDIA ARRAY
 */
export const displaySelect = () => {
    const selectDiv = document.getElementById('selectId');

    const elementInput = createElementToCard('input', null, [
        { attribut: 'class', content: 'css-select__selected' },
        { attribut: 'id', content: 'popularity' },
        { attribut: 'type', content: 'text' },
        { attribut: 'value', content: 'Popularité' },
    ]);

    const elementButtonDate = createElementToCard('button', 'Date', [
        { attribut: 'class', content: 'css-select__option' },
        { attribut: 'id', content: 'date' },
        { attribut: 'type', content: 'button' },
    ]);

    const elementButtonTitle = createElementToCard('button', 'Titre', [
        { attribut: 'class', content: 'css-select__option' },
        { attribut: 'id', content: 'title' },
        { attribut: 'type', content: 'button' },
    ]);

    const elementDiv = createElementToCard('div', null, [
        { attribut: 'class', content: 'css-select__dropdown' },
    ]);

    elementDiv.append(elementButtonDate, elementButtonTitle);
    selectDiv.append(elementInput, elementDiv);
};
