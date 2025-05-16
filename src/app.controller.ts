import { Controller, Get,Post,Body } from '@nestjs/common';
import { SignupDto } from './users/dto/signup.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


 
}
