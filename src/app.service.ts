import { Injectable } from '@nestjs/common';
import { PrismaService1, PrismaService2 } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService1: PrismaService1,
    private readonly prismaService2: PrismaService2) { }
 

  //create the user and complain and both table lie in different database.
  async create() {
    await this.prismaService1.user.create({
      data: {
        email: "abc@gmail.com",
        name: "abcd"
      }
    })

    await this.prismaService2.complain.create({
      data: {
        name: "complain 1",
        branch: "xyz"
      }
    })
  }
}
