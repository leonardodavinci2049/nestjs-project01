import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { FileModule } from 'src/file/file.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    forwardRef(() => UserModule),
    PrismaModule,
    FileModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, ],
  exports: [AuthService],
})
export class AuthModule {}
