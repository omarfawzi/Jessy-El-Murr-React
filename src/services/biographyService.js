import Service from "./Service";

export default class biographyService extends Service {

    constructor() {
        super();
    }

    init() {
        this.limit = 1;
        this.offset = 0;
        this.endpoint = '/biography/get';
    }

}
