import { PostListViewController } from "../viewControllers/postList/postListViewController.js";
import { UserListViewController } from "../viewControllers/userList/userListViewController.js";
import { TodoListViewController } from "../viewControllers/todoList/todoListViewController.js";
import { AddingFormViewController } from "../viewControllers/addingForm/addingFormViewController.js";

export class AppManager {

    static USERS = 1;
    static POSTS = 2;
    static TODOS = 3;
    static COMMENTS = 4;
    static ADDING_FORM = 5;

    constructor() {
        this.userSelected = null;
        this.postSelected = null;
        this.appContainer = document.getElementById('appContainer');
        this.userListViewController = new UserListViewController(appContainer, this);
        this.todoListViewControler = null;
        this.postListViewController = null;
        this.addingFormViewController = null;
        //this.showAddingForm();
    }

    showUserPosts(user) {
        this.userSelected = user;
        this.postListViewController = new PostListViewController(this.appContainer, this);
    }

    showUserTodos(user) {
        this.userSelected = user;
        this.todoListViewController = new TodoListViewController(this.appContainer, this);
    }

    showAddingForm(value) {
        this.addingFormViewController = new AddingFormViewController(this.appContainer, this, value);
    }


    onBackBtn(viewControllerName) {
        switch (viewControllerName) {
            case AppManager.USERS:
                break;
            case AppManager.POSTS:
                this.postListViewController.moveOut();
                break;
            case AppManager.TODOS:
                this.todoListViewController.moveOut();
                break;
            case AppManager.ADDING_FORM:
                this.addingFormViewController.moveOut();
                break;
            default:
                break;
        }
    }

    patchTodo(post) {
        this.todoListViewController.patchTodo(post);
    }

    freshOnPost(viewControllerName) {
        this.postSelected = null;
        this.addingFormViewController.moveOut();
        switch (viewControllerName) {
            case AppManager.USERS:
                break;
            case AppManager.POSTS:
                this.postListViewController.refresh();
                this.userListViewController.refresh();
                break;
            case AppManager.COMMENTS:
                this.postListViewController.refresh();
                break;
            case AppManager.TODOS:
                //   this.todoListViewController.moveOut();
                this.userListViewController.refresh();
                this.todoListViewController.refresh();
                break;
            default:
                break;
        }

    }
}