import { Injectable } from '@nestjs/common';
import { PrismaClient as PrismaClient1 } from '../../prisma/generated/client1';
import { PrismaClient as PrismaClient2 } from '../../prisma/generated/client2';

//Registering the prisma client for test1 database
@Injectable()
export class PrismaService1 extends PrismaClient1 {
    constructor() {
        super({
            datasources: {
                db: {
                    url: process.env.USER_DATABASE_URL,
                }
            }
        })
    }
}

//Registering the prisma client for test2 database
@Injectable()
export class PrismaService2 extends PrismaClient2 {
    constructor() {
        super({
            datasources: {
                db: {
                    url: process.env.COMPLAIN_DATABASE_URL
                }
            }
        })
    }
}

