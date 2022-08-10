import { View } from "../views/view.js";

export class ViewController extends View {
    constructor(parent, appManager) {
        super(parent);
        this.service = null;
        this.appManager = appManager;
        this.mainContainer.classList.add('viewController_mainContainer');
        this.navbarContainer = document.createElement('div');
        this.fade = document.createElement('div');
        this.contentContainer = document.createElement('div');


        this.mainContainer.appendChild(this.navbarContainer);
        this.mainContainer.appendChild(this.fade);
        this.mainContainer.appendChild(this.contentContainer);


        this.navbarContainer.className = 'navbarContainer';
        this.fade.className = 'viewController_fade';
        this.contentContainer.className = 'contentContainer';

        this.contentContainer.innerHTML = 'Loading ...';
        this.contentContainer.classList.add('contentContainer_loading');
    }

    showContent(data) {
        this.contentContainer.classList.remove('contentContainer_loading');
        this.contentContainer.innerHTML = '';
    }

    moveIn() {
        gsap.to(this.contentContainer, { x: 0, duration: 0.75, ease: 'power2.out' });
        gsap.to(this.fade, { opacity: 1, duration: 0.25, ease: 'power2.out' });
    }

    moveOut() {
        this.navbarContainer.classList.add('hide');
        gsap.to(this.contentContainer, { x: window.innerWidth, duration: 0.75, ease: 'power2.out', onComplete: this.remove.bind(this) });
        gsap.to(this.fade, { opacity: 0, duration: 0.5, ease: 'power2.out' });
    }


    hide() {

    }

    show() {

    }
}