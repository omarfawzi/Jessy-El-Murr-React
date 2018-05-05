import Service from "./Service";

export default class bannerService extends Service {

    constructor() {
        super();
    }

    init() {
        this.endpoint = '/banner/get';
    }

}
