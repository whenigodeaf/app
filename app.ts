import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/Routes';

class App {
    public app: express.Application = express();
    public routes: Routes = new Routes();
    constructor() {
        this.config();
        this.routes.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json({limit: '50mb'}));
        this.app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
        this.app.use(express.static('public'));
    }
}

export default new App().app;