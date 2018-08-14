import { Injectable } from "../node_modules/@nestjs/common";
import * as rethink from "rethinkdb"

@Injectable()
export class RethinkService {

    private static instance: RethinkService
    private connection: rethink.Connection

    private constructor() {
        rethink.connect( {host: 'localhost', port: 28015}, function(err, conn) {
            if (err) throw err;
            this.connection = conn;
        })
    }

    static getInstance() {
        if (!RethinkService.instance) {
            RethinkService.instance = new RethinkService()
        }

        return RethinkService.instance
    }


}