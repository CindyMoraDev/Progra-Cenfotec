import { User } from "../../models/user.js";
import { Service } from "../service.js";

export class UserListService extends Service {
    constructor(viewController) {
        super(viewController);
        this.download('users');
    }

    downloadCompleted(e) {
        var data = [];
        var request = e.target;
        var responseData = JSON.parse(request.response);
        for (const id in responseData) {
            var userData = responseData[id];
            var user = new User(id, userData.name, userData.username, userData.email, userData.phone, userData.address.city, userData.avatar, userData.isOwner, userData.postsCount, userData.todosCount);
            data.push(user);
        }
        this.viewController.showContent(data);
    }
}