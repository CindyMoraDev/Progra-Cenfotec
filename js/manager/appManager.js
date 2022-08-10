import { PostListViewController } from "../viewControllers/postList/postListViewController.js";
import { UserListViewController } from "../viewControllers/userList/userListViewController.js";
import { TodoListViewController } from "../viewControllers/todoList/todoListViewController.js";
import { ViewController } from "../viewControllers/viewController.js";

export class AppManager {
    constructor() {
        this.userSelected = null;
        this.appContainer = document.getElementById('appContainer');
        this.userListViewController = new UserListViewController(appContainer, this);
        this.todoListViewControler = null;
        this.postListViewController = null;
    }

    showUserPosts(user) {
        this.userSelected = user;
        this.postListViewController = new PostListViewController(this.appContainer, this);
    }

    showUserTodos(user) {
        this.userSelected = user;
        this.todoListViewController = new TodoListViewController(this.appContainer, this);
    }

    onBackBtn(viewControllerName) {
        console.log(viewControllerName);
        switch (viewControllerName) {
            case 'userListViewController':
                break;
            case 'postListViewController':
                this.postListViewController.moveOut();
                break;
            case 'todosListViewController':
                break;
            default:
                break;
        }
    }
}