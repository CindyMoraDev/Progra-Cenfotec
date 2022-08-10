export class Service {
    constructor(viewController) {
        this.viewController = viewController;
        this.url = 'https://us-central1-beehivebackend-23257.cloudfunctions.net/app/';
    }

    download(value) {
        this.url += value;
        var request = new XMLHttpRequest();
        request.onload = this.downloadCompleted.bind(this);
        request.open('GET', this.url);
        request.send();
    }

    downloadCompleted(e) {}
}