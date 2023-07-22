import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  // You can accsses http://localhost:7072/api/helloworld endpoint 
  // becouse of write @Get 'helloworld'
  @Get('helloworld')
  getHello(): string {
    return this.appService.getHello();
  }
}
