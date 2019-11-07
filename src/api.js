import Axios from 'axios';

class Api {
    constructor() {
        this.secureInstance = Axios.create({
            baseURL: `${process.env.VUE_APP_NETBS_BASE_URL}app_dev.php/api/v1/netBS/`,
        });
    }

    async get(route, token) {
        return this.secureInstance.get(route, {
            headers: { 'X-Authorization': `Bearer ${token}` },
        });
    }

    async post(route, token, params) {
        return this.secureInstance.post(route, params, {
            headers: { 'X-Authorization': `Bearer ${token}` },
        });
    }

    async login(username, password) {
        return this.secureInstance.post('gettoken', { username, password });
    }
}

export default new Api();
