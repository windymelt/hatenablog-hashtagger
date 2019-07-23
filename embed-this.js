
window.addEventListener("load", function (wi, ev) {
    console.log('hashtag replacing');
    var article = $("article");
    article.html(article.html().replace(/##([^ ]+)/g, "<a href=\"/search?q=%23$1\">#$1</a>"));
})
