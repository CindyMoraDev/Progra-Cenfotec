export class View {
    constructor(parent) {
        this.parent = parent;
        this.mainContainer = document.createElement('div');
        this.parent.appendChild(this.mainContainer);
        this.mainContainer.className = 'mainContainer';

    }

    remove() {
        this.parent.removeChild(this.mainContainer);
    }

}