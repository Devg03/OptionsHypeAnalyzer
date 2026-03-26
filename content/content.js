const tagName = 'article';

if (document.querySelector(tagName)) {
    console.log(`The <${tagName}> tag exists on the page.`);
} else {
    console.log(`The <${tagName}> tag does not exist on the page.`);
}