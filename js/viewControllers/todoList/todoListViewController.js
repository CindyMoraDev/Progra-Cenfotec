import { ViewController } from "../viewController.js";

export class TodoListViewController extends ViewController {
    constructor(parent) {
        super(parent);
        this.mainContainer.classList.add('todoListViewController');
    }


}