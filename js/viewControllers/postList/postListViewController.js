import { PostView } from "../../views/postView/postView.js";
import { ViewController } from "../viewController.js";
import { PostListService } from "./postListService.js";
import { AppManager } from "../../manager/appManager.js";

export class PostListViewController extends ViewController {
    constructor(parent, appManager) {
        super(parent, appManager);

        this.service = new PostListService(this, `posts/${this.appManager.userSelected.id }`);
        this.mainContainer.classList.add('postListViewController');
        this.navbarContainer.classList.add('postListViewController_navbarContainer');
        this.navbarContainer.innerHTML = 'POSTS';

        this.backBtn = document.createElement('div');
        this.navbarContainer.appendChild(this.backBtn);
        this.backBtn.innerHTML = '&#10094';
        this.backBtn.className = 'postListViewController_navbarContainer_backBtn';
        this.backBtn.onclick = this.onBackBtn.bind(this);
        this.contentContainer.style.transform = `translateX(${window.innerWidth}.px)`;

        this.newBtn = document.createElement('div');
        this.newBtn.className = 'postListViewController_newBtn';
        this.newBtn.innerHTML = '+';
        this.mainContainer.appendChild(this.newBtn);
        this.newBtn.onclick = this.onNewBtn.bind(this);

    }

    showContent(data) {
        super.showContent(data);
        data.forEach(post => {
            var postView = new PostView(this.contentContainer, post, this.appManager);
        });
        this.moveIn();
    }

    onBackBtn() {
        this.
        appManager.onBackBtn(AppManager.POSTS);
    }

    onNewBtn() {
        this.appManager.showAddingForm(AppManager.POSTS);
    }

}