import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}
  async signup(data: SignupDto) {
    const userExists = await this.prisma.user.findUnique({
      where: { mobileNo: data.mobileNo },
    });

    if (userExists) return { message: 'User already exists' };

    const newUser = await this.prisma.user.create({
      data, // Make sure DTO matches User model fields
    });

   const token = this.jwtService.sign({
  mobileNo: newUser.mobileNo,
  id: newUser.id,
});


    return { message: 'User created successfully', user: newUser, token };
  }

  async login(dto: LoginDto) {
    console.log(dto);

    const user = await this.prisma.user.findUnique({
      where: { mobileNo: dto.mobileNo },
    });

    console.log('user from db', user);

    if (!user || user.password !== dto.password) {
      return { message: 'Invalid credentials' };
    }

    const token = this.jwtService.sign({
      username: user.mobileNo,
      id: user.id,
    });

    return { message: 'Login successful', user, token };
  }

  async getAllUsers(){
  return this.prisma.user.findMany()
}
}

