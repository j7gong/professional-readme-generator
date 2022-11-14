const generateTitle = aboutTitle => {
    return `
## **Professional README Generator**
## **${aboutTitle}$**
    `;
}

module.exports = templateData => {
    const {title} = templateData;
    return `
    ${generateTitle(title)}
    `;
};