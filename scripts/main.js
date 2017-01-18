(function () {
    let postController = new window.blog.controllers.PostController();
    let router = new Grapnel({hashBang: true});

    router.get('/posts', postController.onPostListHandler.bind(postController));
    router.get('/posts/:id', postController.onPostHandler.bind(postController));

    if (!router.path()) {
        router.navigate('/posts');
    }

}());
