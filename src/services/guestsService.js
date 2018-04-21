import Service from "./Service";

export default class guestsService extends Service {

    constructor() {
        super();
    }

    init() {
        this.limit = 3;
        this.offset = 0;
        this.endpoint = '/guests/get';
    }

}