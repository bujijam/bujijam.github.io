document.addEventListener('DOMContentLoaded', function () {
    var detailsElements = document.querySelectorAll('.blog-article');
    detailsElements.forEach(function (details) {
        // 在每个details元素内部查找.toggle-button  
        var button = details.querySelector('.toggle-button');
        if (button) {
            button.addEventListener('click', function (event) {
                // 切换details的open属性  
                details.open = !details.open;
            });
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var md = new remarkable.Remarkable();
    var markdownElements = document.querySelectorAll('.markdown-content');

    markdownElements.forEach(function (element, index) {
        var markdownContent = element.innerHTML;
        var htmlContent = md.render(markdownContent);

        var renderedContainer = element.nextElementSibling;
        if (renderedContainer && renderedContainer.classList.contains('rendered-content')) {
            renderedContainer.innerHTML = htmlContent;
        }
    });
});