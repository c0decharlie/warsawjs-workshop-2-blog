(function () {
    class PostAddFormComponent {
        constructor(data) {
            this.$template = document.querySelector('#post-add-form-component');
            this.templateConetent = this.$template.innerHTML;
            this.$container = document.querySelector('#post-form');
            this.render(data, this.templateConetent);

        }

        render(data, template) {
            let compiledTemplate = Mustache.render(template, data);
            let parser = new DOMParser();
            let $document = parser.parseFromString(compiledTemplate, 'text/html');
            let containerContent = $document.querySelector('body').firstElementChild;
            this.$container.appendChild(containerContent);
            this.submitHandler();
        }

        submitHandler() {
            this.submit = this.$container.querySelector('#add-post-form');
            this.submit.addEventListener('submit', (e) => {
                e.preventDefault();

                let data = new FormData(this.submit);
                let formDataObject = {};

                for (let [k,v] of data) {
                    formDataObject[k] = v;
                }

                window.blog.runtime.trigger('formSent', formDataObject);
            });
        }
    }

    window.blog.components.PostAddFormComponent = PostAddFormComponent;
}());
