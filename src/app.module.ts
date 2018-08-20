import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { MessageModule } from './message/message.module';
import { RethinkModule } from 'rethink/rethink.module';

@Module({
  imports: [
    MessageModule,
    RethinkModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
