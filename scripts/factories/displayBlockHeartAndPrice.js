import { createElementToCard } from '../utils/functions.js';

/**
 * CREATE AND DISPLAY BLOCK WITH THE PRICE AND SUM OF ALL LIKES
 * @param mediasOfAPhotographer
 * @param photographer
 */
export const displayBlockHeartAndPrice = (
    mediasOfAPhotographer,
    photographer
) => {
    // Do the sum of all likes
    const likesSum = mediasOfAPhotographer
        .map((media) => media.likes)
        .reduce((prev, curr) => prev + curr, 0);

    const elementDiv = document.getElementById('block-heart');

    const elementGroupeDiv = createElementToCard('div', null, null);

    const elementSpanHeart = createElementToCard('span', likesSum, [
        { attribut: 'id', content: 'span-heart' },
    ]);

    const elementIcon = createElementToCard('i', null, [
        { attribut: 'class', content: 'fa fa-heart' },
    ]);

    const elementSpanPrice = createElementToCard(
        'span',
        `${photographer.price} €/jours `,
        null
    );

    elementGroupeDiv.append(elementIcon, elementSpanPrice);

    elementDiv.append(elementSpanHeart, elementGroupeDiv);
};
