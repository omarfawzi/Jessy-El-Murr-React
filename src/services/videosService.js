import Service from "./Service";

export default class videoService extends Service {

    constructor() {
        super();
    }

    init() {
        this.limit = 3;
        this.offset = 0;
        this.endpoint = '/videos/get';
    }

}
