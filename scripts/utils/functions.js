/**
 * function to create cards used for each tags
 * @param tag name of the tag
 * @param data Data to inject
 * @param attr Call setAttr if you need attribut
 * @returns {*}
 */
const createElementToCard = (tag, data, attr) => {
    const element = document.createElement(tag);
    if (data) {
        element.innerHTML = data;
    }
    if (attr) {
        setAttr(element, attr)
    }
    return element;
}

/**
 * Set attribut if you need it
 * @param element
 * @param attr
 */
const setAttr = (element, attr) => {
    attr.map(val => element.setAttribute(val.attribut, val.content));
}