import { Module } from '@nestjs/common';
import { RethinkController } from './rethink.controller';
import { RethinkService } from './rethink.service';
import { RethinkProvider } from './database.provider'

@Module({
  imports: [],
  controllers: [RethinkController],
  providers: [RethinkService, RethinkProvider],
  exports: [RethinkProvider]
})
export class RethinkModule {}
