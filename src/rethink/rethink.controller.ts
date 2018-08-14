import { Controller, Post, Param, Get } from '@nestjs/common';
import { RethinkService } from 'rethink/rethink.service';

@Controller('rethink')
export class RethinkController {
  constructor(private readonly rethinkService: RethinkService) {}

  @Get()
  welcome(): string {
    return "RethinkDB endpoint"
  }

  @Post('table/:name')
  async newTable(@Param ('name') name): Promise<string> {
    let creationResult = await this.rethinkService.createTable(name)
    return "Name " + name + " received!\n" + JSON.stringify(creationResult)
  }
}
