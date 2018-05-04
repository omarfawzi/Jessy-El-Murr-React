import instance from "./config";

export default class Service {

    constructor() {
        this.endpoint = null;
    }

    init() {
        this.limit = 3;
        this.offset = 0;
    }

    initComponent() {
        console.log(this.endpoint + ' ' + this.limit);
        return new Promise((resolve) => {
            instance.get(this.endpoint, {params: {limit: this.limit, offset: this.offset}})
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    updateComponent() {
        return new Promise((resolve) => {
            instance.get(this.endpoint, {params: {offset: this.limit}})
                .then(response => {
                    resolve(response.data);
                });
        });
    }
}