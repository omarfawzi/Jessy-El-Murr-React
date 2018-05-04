import Service from "./Service";

export default class biographyService extends Service {

    constructor() {
        super();
    }

    init() {
        this.endpoint = '/biography/get';
    }

}
