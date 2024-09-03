// 文章底部折叠按钮
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


// markdown渲染
document.addEventListener('DOMContentLoaded', function () {
    loadAndRenderMarkdown('./blog/test.md');
});

function loadAndRenderMarkdown(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(markdownContent => {
            var md = new remarkable.Remarkable();
            var htmlContent = md.render(markdownContent);
            var articleContainer = document.querySelector('.blog-article .rendered-content');
            if (articleContainer) {
                articleContainer.innerHTML = htmlContent;
                document.querySelectorAll('.markdown-content').forEach(element => {
                    element.style.display = 'none'; // 隐藏原始的Markdown内容  
                });
            }
        })
        .catch(error => console.error('Error loading Markdown file:', error));
}