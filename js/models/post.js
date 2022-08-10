export class Post {
    constructor(id, body, comments = [], title) {
        this.id = id;
        this.body = body;
        this.comments = comments;
        this.title = title;
    }
}