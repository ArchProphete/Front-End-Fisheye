import { createElementToCard } from './functions.js';

export const displayBlockHeartAndPrice = (mediaData, photographer) => {
    const likesSum = mediaData
        .map((media) => media.likes)
        .reduce((prev, curr) => prev + curr, 0);

    const elementDiv = document.getElementById('block-heart');

    const elementSpanHeart = createElementToCard('span', likesSum, null);
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
