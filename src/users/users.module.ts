  import { Module } from '@nestjs/common';
  import { UsersController } from './users.controller';
  import { UsersService } from './users.service';
  import { JwtStrategy } from './jwt.strategy/jwt.strategy';
  // jwt packages  third party installed >>>
  import { JwtModule } from '@nestjs/jwt';
  import { PassportModule } from '@nestjs/passport';
  @Module({
     imports: [
    PassportModule,
    JwtModule.register({
      secret: '123456', // 🔐 replace with process.env.JWT_SECRET ideally
      signOptions: { expiresIn: '1h' },
    }),
  ],
    controllers: [UsersController],
    providers: [UsersService,JwtStrategy],
      exports: [UsersService],

  })
  export class UsersModule {}
