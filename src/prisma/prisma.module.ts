// import { Module } from '@nestjs/common';
// import { PrismaService } from './prisma.service';
// import { PrismaController } from './prisma.controller';

// @Module({
//   controllers: [PrismaController],
//   providers: [PrismaService],
// })
// export class PrismaModule {}
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
