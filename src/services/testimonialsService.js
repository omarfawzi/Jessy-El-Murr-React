import Service from "./Service";

export default class testimonialsService extends Service {

    constructor() {
        super();
    }

    init() {
        this.limit = 3;
        this.offset = 0;
        this.endpoint = '/testimonials/get';
    }

}
