import { Controller, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './message';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async newMessage(@Body() message: Message): Promise<string> {
    let response = await this.messageService.newMessage(message)
        .then(result => {
            return result
        })
        .catch(error => {
            return error
        })

    return response
  }
}
