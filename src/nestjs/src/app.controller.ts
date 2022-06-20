import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { CreateCategoryUse } from 'cross/modules/categories/application/usecases'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
   
    return this.appService.getHello();
  }
}
