export class Service {
    constructor(viewController) {
        this.viewController = viewController;
        this.url = 'https://us-central1-beehivebackend-23257.cloudfunctions.net/app/';
    }

    download(parans) {
        var url = this.url + parans;
        var request = new XMLHttpRequest();
        request.onload = this.downloadCompleted.bind(this);
        request.open('GET', url);
        request.send();
    }

    downloadCompleted(e) {}
}