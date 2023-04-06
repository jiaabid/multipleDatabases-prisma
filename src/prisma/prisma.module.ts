import { Module } from '@nestjs/common';
import { PrismaService1,PrismaService2 } from './prisma.service';

@Module({
  providers: [PrismaService1,PrismaService2],
  exports:[PrismaService1,PrismaService2]
})
export class PrismaModule {}
