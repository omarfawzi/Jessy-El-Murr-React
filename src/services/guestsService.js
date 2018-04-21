import instance from './config';

export default class guestsService {

    constructor() {

    }

    init() {
        this.limit = 3;
        this.offset = 0;
    }

    initGuests() {
        return new Promise((resolve) => {
            instance.get('/guests/get', {params: {limit: this.limit, offset: this.offset}})
                .then(response => {
                    resolve(response.data);
                });
        });

    }

    updateGuests() {
        return new Promise((resolve) => {
            instance.get('/guests/get', {params: {offset: this.limit}})
                .then(response => {
                    resolve(response.data);
                });
        });
    }

}