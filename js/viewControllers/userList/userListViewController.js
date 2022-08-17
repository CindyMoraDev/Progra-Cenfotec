import { UserView } from "../../views/userView/userView.js";
import { ViewController } from "../viewController.js";
import { UserListService } from "./userListService.js";

export class UserListViewController extends ViewController {
    constructor(parent, appManager) {
        super(parent, appManager);

        this.service = new UserListService(this);
        this.mainContainer.classList.add('userListViewController');
        this.navbarContainer.classList.add('userListViewController_navbarContainer');
        this.navbarContainer.innerHTML = 'USERS';

    }

    showContent(data) {
        super.showContent(data);
        this.contentContainer.innerHTML = '';
        data.forEach((user) => {
            var userView = new UserView(this.contentContainer, user, this.appManager);
        });
    }

    refresh() {

        this.service.download('users');
    }


}