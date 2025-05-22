import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('users')
export class UsersController {

  constructor(private readonly UsersService: UsersService) {}

@Get('/')
getHealth() {
  return { message: 'API is running' };
}

  @Post('signup')
  signup(@Body() body: SignupDto) {
    return this.UsersService.signup(body);
  }

  @Post('login')
  login(@Body() body:LoginDto) {
    return this.UsersService.login(body);
  }

  @Get('users')
  getUsers() {
    return this.UsersService.getAllUsers();
  }

}
