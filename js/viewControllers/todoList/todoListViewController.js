import { AppManager } from "../../manager/appManager.js";
import { TodoView } from "../../views/todoView/todoView.js";
import { ViewController } from "../viewController.js";
import { TodoListService } from "./todoListService.js";

export class TodoListViewController extends ViewController {
    constructor(parent, appManager) {
        super(parent, appManager);

        this.service = new TodoListService(this, `todos/${this.appManager.userSelected.id}`);
        this.mainContainer.classList.add('todoListViewController');
        this.navbarContainer.classList.add('todoListViewController_navbarContainer');
        this.navbarContainer.innerHTML = 'TODOS';

        this.backBtn = document.createElement('div');
        this.navbarContainer.appendChild(this.backBtn);
        this.backBtn.innerHTML = '&#10094';
        this.backBtn.className = 'todoListViewController_navbarContainer_backBtn';
        this.backBtn.onclick = this.onBackBtn.bind(this);
        this.contentContainer.style.transform = `translateX(${window.innerWidth}.px)`;

        this.newBtn = document.createElement('div');
        this.newBtn.className = 'todoListViewController_newBtn';
        this.newBtn.innerHTML = '+';
        this.mainContainer.appendChild(this.newBtn);
        this.newBtn.onclick = this.onNewBtn.bind(this);
    }

    showContent(data) {
        super.showContent(data);
        data.forEach(todo => {
            var todoView = new TodoView(this.contentContainer, todo, this.appManager);
        });
        this.moveIn();
    }

    onBackBtn() {
        this.appManager.onBackBtn(AppManager.TODOS);
    }

    patchTodo(post) {
        this.service.patchTodo(post, `todos/${this.appManager.userSelected.id}`);
    }

    onNewBtn() {
        this.appManager.showAddingForm(AppManager.TODOS);
    }

}