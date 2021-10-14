import { RoutesService } from "../../rest-api-nodejs-mongodb/app/services/routesService";

export class Routes {

    private routesService: RoutesService = new RoutesService();

    public routes(app): void {
        app.get('/test', this.routesService.getTest);
    }


}