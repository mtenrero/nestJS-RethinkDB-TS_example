import { Module } from '@nestjs/common';
import { RethinkModule } from 'rethink/rethink.module';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  imports: [RethinkModule],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
