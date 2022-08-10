import { Todo } from "../../models/todo.js";
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
        /*       for (const id in responseData) {
                  var comments = [];
                  var postData = responseData[id];
                  for (const commentId in postData.comments) {
                      const commentData = postData.comments[commentId];
                      var comment = new Comment(commentId, commentData.body, commentData.title, commentData.user);
                      comments.push(comment);
                  }
                  var post = new Post(id, postData.body, comments, postData.title);
                  data.push(post);
              } */

        this.viewController.showContent(data);
    }
}