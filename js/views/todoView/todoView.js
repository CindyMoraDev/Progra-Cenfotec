import { View } from "../view.js";

export class TodoView extends View {
    constructor(parent, todo, appManager) {
        super(parent);
        this.todo = todo;
        this.appManager = appManager;
        this.mainContainer.classList.add('todoView_mainContainer');

        var title = document.createElement('p');
        title.className = 'todoView_title';
        title.innerHTML = this.todo.title;
        this.mainContainer.append(title);

        this.buttonContainer = document.createElement('div');
        this.buttonContainer.className = 'todoView_buttonContainer';
        this.mainContainer.append(this.buttonContainer);

        this.button = document.createElement('div');
        this.button.className = 'todoView_button';
        this.buttonContainer.append(this.button);
        this.button.onclick = this.complete.bind(this);

        this.update();
    }

    complete() {
        this.todo.completed = !this.todo.completed;
        this.update();
    }

    update() {
        if (this.todo.completed) {
            this.button.innerHTML = '✔';
        } else {
            this.button.innerHTML = '';
        }
    }



}