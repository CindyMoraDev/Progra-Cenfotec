import { ViewController } from "../viewController.js";
import { TodoListService } from "./todoListService.js";

export class TodoListViewController extends ViewController {
    constructor(parent, appManager) {
        super(parent, appManager);
        this.service = new TodoListService(this, `todos/${this.appManager.userSelected.id}`);
        this.mainContainer.classList.add('todoListViewController');
    }


}