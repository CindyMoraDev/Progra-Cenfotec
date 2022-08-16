import { PostView } from "../../views/postView/postView.js";
import { ViewController } from "../viewController.js";
import { AddingFormService } from "./addingFormService.js";
import { AppManager } from "../../manager/appManager.js";

export class AddingFormViewController extends ViewController {
    constructor(parent, appManager, value) {
        super(parent, appManager);
        console.log(value);
        this.vcType = value;
        this.service = new AddingFormService(this, ``);
        this.mainContainer.classList.add('addingFormViewController');
        this.navbarContainer.classList.add('addingFormViewController_navbarContainer');
        this.navbarContainer.innerHTML = 'FORM';

        this.backBtn = document.createElement('div');
        this.navbarContainer.appendChild(this.backBtn);
        this.backBtn.innerHTML = '&#10094';
        this.backBtn.className = 'addingFormViewController_navbarContainer_backBtn';
        this.backBtn.onclick = this.onBackBtn.bind(this);
        this.contentContainer.style.transform = `translateX(${window.innerWidth}.px)`;

        this.formContainer = null;
        this.titleIn = null;
        this.bodyIn = null;

        this.showContent();

    }

    showContent(data) {
        super.showContent(data);

        this.contentContainer.classList.add('addingFormViewController_contentContainer');

        this.formContainer = document.createElement('div');
        this.formContainer.className = 'addingFormViewController_formContainer';
        this.contentContainer.appendChild(this.formContainer);

        var label = document.createElement('p');
        label.className = 'addingFormViewController_label';
        label.innerHTML = 'Title';
        this.formContainer.appendChild(label);
        this.titleIn = document.createElement('input');
        this.titleIn.className = 'addingFormViewController_input';
        this.titleIn.placeholder = 'Title';
        this.formContainer.appendChild(this.titleIn);

        if (this.vcType !== AppManager.TODOS) {
            label = document.createElement('p');
            label.className = 'addingFormViewController_label';
            label.innerHTML = 'Body';
            this.formContainer.appendChild(label);
            this.bodyIn = document.createElement('input');
            this.bodyIn.className = 'addingFormViewController_input';
            this.bodyIn.placeholder = 'Body';
            this.formContainer.appendChild(this.bodyIn);
        }

        var buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'addingFormViewController_buttonsContainer';
        this.formContainer.appendChild(buttonsContainer);

        var cancelBtn = document.createElement('div');
        cancelBtn.className = 'addingFormViewController_cancelBtn';
        cancelBtn.innerHTML = 'Cancel';
        cancelBtn.onclick = this.onCancelBtn.bind(this);
        buttonsContainer.appendChild(cancelBtn);

        var okBtn = document.createElement('div');
        okBtn.className = 'addingFormViewController_okBtn';
        okBtn.innerHTML = 'OK';
        okBtn.onclick = this.onOKBtn.bind(this);
        buttonsContainer.appendChild(okBtn);

        this.moveIn();
    }

    onBackBtn() {
        this.appManager.onBackBtn(AppManager.ADDING_FORM);

    }

    onOKBtn() {
        var title = this.titleIn.value;
        if (this.vcType !== AppManager.TODOS) {
            var body = this.bodyIn.value;
            if (title !== '' && body !== '') {
                this.service.post({ title: title, body: body });
            } else {
                console.log('Datos invalidos');
            }
        } else {
            if (title !== '') {
                this.service.post({ title: title }, this.vcType, this.appManager.userSelected.id);
            } else {
                console.log('Datos invalidos');
            }
        }
    }

    onCancelBtn() {
        this.onBackBtn();
    }

    postCompleted() {
        this.appManager.freshOnPost(this.vcType);
    }

}