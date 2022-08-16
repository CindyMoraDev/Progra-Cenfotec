import { Todo } from "../../models/todo.js  ";
import { Service } from "../service.js";

export class TodoListService extends Service {
    constructor(viewController, parans) {
        super(viewController);
        this.download(parans);
    }

    downloadCompleted(e) {
        var data = [];
        var request = e.target;
        var responseData = JSON.parse(request.response);
        console.log(responseData);
        for (const id in responseData) {
            var todoData = responseData[id];
            var todo = new Todo(id, todoData.title, todoData.completed);
            data.push(todo);
        }

        this.viewController.showContent(data);
    }

    patchTodo(todo, parans) {
        var url = this.url + parans;
        var request = new XMLHttpRequest();
        request.onload = this.patchTodoCompleted.bind(this);
        request.open('PATCH', url);
        request.send(JSON.stringify(todo));
    }

    patchTodoCompleted(e) {
        var request = e.target;
        console.log(request.response);

    }
}