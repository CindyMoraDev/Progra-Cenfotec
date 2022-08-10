export class User {
    constructor(id, name, username, email, phone, city, avatar, isOwner, postsCount, todosCount) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.avatar = avatar;
        this.isOwner = isOwner;
        this.postsCount = postsCount;
        this.todosCount = todosCount;
        this.todos = [];
        this.posts = [];
    }
}