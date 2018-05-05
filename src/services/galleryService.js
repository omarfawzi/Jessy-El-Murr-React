import Service from "./Service";

export default class galleryService extends Service {

    constructor() {
        super();
    }

    init() {
        this.limit = 3;
        this.offset = 0;
        this.endpoint = '/gallery/get';
    }

}
