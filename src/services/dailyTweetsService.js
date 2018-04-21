import Service from "./Service";

export default class dailyTweetsService extends Service {

    constructor() {
        super();
    }

    init() {
        this.limit = 3;
        this.offset = 0;
        this.endpoint = '/dailyTweets/get';
    }

}