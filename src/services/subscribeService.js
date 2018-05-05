import Service from "./Service";
import instance from "./config";

export default class subscribeService extends Service {

    constructor() {
        super();
    }

    init() {
        this.endpoint = '/subscribe/post';
    }

    subscribe(email) {
        return new Promise((resolve) => {
            instance.post(this.endpoint, {email: email})
                .then(response => {
                    resolve(response.data);
                });
        });
    }

}
