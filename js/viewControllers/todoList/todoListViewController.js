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
    }

    showContent(data) {
        super.showContent(data);
        data.forEach(todo => {
            var todoView = new TodoView(this.contentContainer, todo, this.appManager);
        });
        this.moveIn();
    }

    onBackBtn() {
        this.appManager.onBackBtn('todoListViewController');
    }

}