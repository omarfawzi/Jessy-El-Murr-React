import instance from './config';

export default class dailyTweetsService {

    constructor() {

    }

    init() {
        this.limit = 3;
        this.offset = 0;
    }

    initTweets() {
        return new Promise((resolve) => {
            instance.get('/dailyTweets/get', {params: {limit: this.limit, offset: this.offset}})
                .then(response => {
                    resolve(response.data);
                });
        });

    }

    updateTweets() {
        return new Promise((resolve) => {
            instance.get('/dailyTweets/get', {params: {offset: this.limit}})
                .then(response => {
                    resolve(response.data);
                });
        });
    }

}