# Connect multiple databases with prisma

### Model Definitions
Create a prisma folder in project's root folder. Create files in the folder. I have named my files as following but you can specify with any name.
   1. schema1.prisma
   2. schema2.prisma
 
 Do specify the output parameter in both schema.prisma files. The output destination will help to implement the respective Prisma Client.

### Prisma Service
Create two child classes extending from the base PrismaClient. The base PrismaClient will be extracted from the output destination. 

### Generate client
To generate client use the following commands.
  * npx prisma generate --schema prisma/schema1.prisma
  * npx prisma generate --schema prisma/schema2.prisma

### Migration
To migrate the tables.
 * npx prisma migrate dev --schema=prisma/schema1.prisma
 * npx prisma migrate dev --schema=prisma/schema2.prisma

