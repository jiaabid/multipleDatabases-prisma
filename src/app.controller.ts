import { Controller, Get,Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //create user in test1 database and complain in test2 database
  @Post()
  create(){
    return this.appService.create()
  }
}
