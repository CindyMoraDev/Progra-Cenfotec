import { View } from "../view.js";

export class UserView extends View {
    constructor(parent, user, appManager) {
        super(parent);
        this.user = user;
        this.appManager = appManager;
        this.mainContainer.classList.add('userView_mainContainer');

        var col1 = document.createElement('div');
        var col2 = document.createElement('div');
        var col3 = document.createElement('div');

        col1.className = 'userView_col1';
        col2.className = 'userView_col2';
        col3.className = 'userView_col3';

        this.mainContainer.appendChild(col1);
        this.mainContainer.appendChild(col2);
        this.mainContainer.appendChild(col3);

        var avatar = document.createElement('img');
        avatar.src = this.user.avatar;
        avatar.className = 'userView_avatar';
        col1.appendChild(avatar);

        var name = document.createElement('p');
        var username = document.createElement('p');
        var email = document.createElement('p');
        var phone = document.createElement('p');
        var city = document.createElement('p');

        col2.appendChild(name);
        col2.appendChild(username);
        col2.appendChild(email);
        col2.appendChild(phone);
        col2.appendChild(city);

        name.innerHTML = this.user.name;
        username.innerHTML = `<b>Username:</b> ${this.user.username}`;
        email.innerHTML = `<b>Email:</b> ${this.user.email}`;
        phone.innerHTML = `<b>Phone:</b> ${this.user.phone}`;
        city.innerHTML = `<b>City:</b> ${this.user.city}`;

        name.className = 'userView_name';
        username.className = 'userView_username';
        email.className = 'userView_email';
        phone.className = 'userView_phone';
        city.className = 'userView_city';

        var postsBtn = document.createElement('button');
        var todosBtn = document.createElement('button');
        postsBtn.onclick = this.onPostBtn.bind(this);
        todosBtn.onclick = this.onTodoBtn.bind(this);

        col3.appendChild(postsBtn);
        col3.appendChild(todosBtn);

        postsBtn.innerHTML = `POSTS: ${this.user.postsCount}`;
        todosBtn.innerHTML = `TODOS: ${this.user.todosCount}`;
    }

    onPostBtn() {
        this.appManager.showUserPosts(this.user);
    }

    onTodoBtn() {
        this.appManager.showUserTodos(this.user);
    }
}