(function () {
    let PostAddFormComponent = window.blog.components.PostAddFormComponent;
    let PostComponent = window.blog.components.PostComponent;

    class PostController {
        constructor() {
            this.postList = [];

            window.blog.runtime.on('formSent', (payload) => {
                payload.id = uuid.v4();
                this.postList.push(payload);
                new PostComponent(payload);
            });
        }

        _clearContainer() {
            document.querySelector('#post-wrapper').innerHTML = '';
            document.querySelector('#post-form').innerHTML = '';
        }

        onPostHandler(req) {
            this._clearContainer();
            let id = req.params.id;
            let post = this.postList.find((post) => {
                return post.id === id;
            });
            new PostComponent(post);
        }

        onPostListHandler() {
            this._clearContainer();
            new PostAddFormComponent();
            this.postList.forEach((post) => {
                new PostComponent(post);
            })
        }
    }

    window.blog.controllers.PostController = PostController;
}());
