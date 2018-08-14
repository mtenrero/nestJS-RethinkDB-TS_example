import { Injectable, Inject } from "@nestjs/common";
import * as rethink from "rethinkdb"

@Injectable()
export class RethinkService {

    private connection: rethink.Connection

    constructor(@Inject('RethinkProvider') connection) {
        this.connection = connection
    }

    /**
     * Creates a new table in the RethinkDB instance
     * @param tableName Name of the new Table
     * @returns Creation status promise
     */
    async createTable(tableName:string): Promise<rethink.CreateResult> {
        let result = await rethink.db('test').tableCreate(tableName).run(this.connection)
        return result
    }

}