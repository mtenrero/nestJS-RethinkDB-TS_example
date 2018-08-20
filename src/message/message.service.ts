import { Injectable, Inject } from "@nestjs/common";
import { RethinkService } from "rethink/rethink.service";
import { Message } from "./message";

const TABLE = "messages"

@Injectable()
export class MessageService {


    private rethinkService: RethinkService

    constructor(@Inject('RethinkService') service) {
        this.rethinkService = service
    }

    /**
     * Store a new message in the database
     * @param message Message object to be stored
     */
    async newMessage(message: Message) {

        return await this.rethinkService.insert(
            TABLE,
            message
        )
    }
}