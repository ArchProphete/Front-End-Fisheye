import { createElementToCard } from './functions.js';

/**
 * CREATE AND DISPLAY BLOCK WITH THE PRICE AND SUM OF ALL LIKES
 * @param mediaData
 * @param photographer
 */

export const displayBlockHeartAndPrice = (mediaData, photographer) => {
    // Do the sum of all likes
    const likesSum = mediaData
        .map((media) => media.likes)
        .reduce((prev, curr) => prev + curr, 0);

    const elementDiv = document.getElementById('block-heart');

    const elementSpanHeart = createElementToCard('span', likesSum, [
        { attribut: 'id', content: 'span-heart' },
    ]);

    const elementIcon = createElementToCard('i', null, [
        { attribut: 'class', content: 'fa fa-heart' },
    ]);
    elementSpanHeart.appendChild(elementIcon);

    const elementSpanPrice = createElementToCard(
        'span',
        `${photographer.price} €/jours `,
        null
    );

    elementDiv.appendChild(elementSpanHeart);
    elementDiv.appendChild(elementSpanPrice);
};
