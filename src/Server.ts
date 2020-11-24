import express, {Application} from "express";
import morgan from "morgan";
import ClienteRoute from './ClienteRoute'

export class Server {
    private port: number = 3000;
    private app: Application

    constructor() {
        this.app = express()
        this.middleware();
        this.routes();
    }

    private middleware() {
        this.app.use(morgan('dev'))
        this.app.use(express.json())
    }

    private routes() {
        this.app.use('/api', ClienteRoute)
    }

    async start(){
        await this.app.listen(this.port)
        console.log('Server on port ', this.port)
    }

}