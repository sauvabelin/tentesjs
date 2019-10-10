import Axios from 'axios';

class Api {
    constructor() {
        this.instance = Axios.create({
            baseURL: 'http://localhost/netbs_old/web/app_dev.php',
        });
    }

    getModels() {
        return this.instance.get('/api/v1/public/netBS/tente/feuille-etat/tente-model-form');
    }
}

export default new Api();
