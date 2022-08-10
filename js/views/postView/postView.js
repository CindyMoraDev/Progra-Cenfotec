import { CommentView } from "../commentView/commentView.js";
import { View } from "../view.js";

export class PostView extends View {
    constructor(parent, post, appManager) {
        super(parent);
        this.post = post;
        this.appManager = appManager;
        this.mainContainer.classList.add('postView_mainContainer');

        var title = document.createElement('p');
        title.className = 'postView_title';
        title.innerHTML = this.post.title;
        this.mainContainer.append(title);

        var body = document.createElement('p');
        body.className = 'postView_body';
        body.innerHTML = this.post.body;
        this.mainContainer.append(body);

        var comments = document.createElement('p');
        comments.className = 'postView_comments';
        comments.innerHTML = `Comments: ${this.post.comments.length}`;
        this.mainContainer.append(comments);

        var commentsContainer = document.createElement('div');
        commentsContainer.className = 'postView_commentsContainer';
        this.mainContainer.appendChild(commentsContainer);

        this.post.comments.forEach(comment => {
            var commentView = new CommentView(commentsContainer, comment, this.appManager);
        });
    }

}