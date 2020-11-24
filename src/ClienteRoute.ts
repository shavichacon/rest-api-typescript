import {Router} from "express";
import {Request, Response} from "express";
import {ClienteModel} from './ClienteModel'
import {ClienteResponseModel} from "./ClienteResponseModel";

class ClienteRoute {

    router: Router

    constructor() {
        this.router = Router();
        this.routes();
    }

    get(req: Request, resp: Response){
        return resp.json('Hello world!!')
    }

    routes() {
        this.router.route("/")
            .get(this.get)
            .post(this.post)
    }

    post(req: Request, resp: Response){
        // Obtener el json del cuerpo de request
        let vrlCliente: ClienteModel = req.body
        // a la base consultar

        console.log(`Procesando información de ${vrlCliente.nombre} con edad ${vrlCliente.edad}`)

        // insert o update

        // ......

        let vrlResponse: ClienteResponseModel = { code: 200, message:"Se procesó correctamente"}

        return resp.json(vrlResponse)
    }
}

const clienteRoute = new ClienteRoute();
export default clienteRoute.router