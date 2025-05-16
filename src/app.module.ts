import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ContactModule } from './contact/contact.module';
import { PrismaModule } from './prisma/prisma.module';
  import { JwtStrategy } from './users/jwt.strategy/jwt.strategy';


@Module({
  imports: [UsersModule, ContactModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
