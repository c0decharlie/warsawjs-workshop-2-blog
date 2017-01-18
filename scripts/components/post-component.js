(function () {
    class PostComponent {
        constructor(data) {
            this.$template = document.querySelector('#post-component');
            this.templateConetent = this.$template.innerHTML;
            this.$container = document.querySelector('#post-wrapper');
            this.render(data, this.templateConetent);
        }

        render(data, template) {
            let compiledTemplate = Mustache.render(template, data);
            let parser = new DOMParser();
            let $document = parser.parseFromString(compiledTemplate, 'text/html');
            let containerContent = $document.querySelector('body').firstElementChild;
            this.$container.appendChild(containerContent);
        }
    }

    window.blog.components.PostComponent = PostComponent;
}());
