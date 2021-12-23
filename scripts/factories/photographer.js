function photographerFactory(data) {
    const { name, portrait, city, country,  tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    /**
     * Generate card into the dDOM
     * @returns {HTMLElement}
     */
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const figure = document.createElement( 'figure' );
        const figcaption = document.createElement( 'figcaption' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const p = document.createElement( 'p' );
        const span = document.createElement( 'span' );
        h2.textContent = name;
        h3.textContent = [city, country];
        p.textContent = tagline;
        span.textContent = price;

        article.appendChild(figure);

        figure.appendChild(img);
        figure.appendChild(figcaption);

        figcaption.appendChild(h2);
        figcaption.appendChild(h3);
        figcaption.appendChild(p);
        figcaption.appendChild(span);
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}