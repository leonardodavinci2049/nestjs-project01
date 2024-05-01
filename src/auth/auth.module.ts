import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [
    UserService,
    JwtModule.register({
      secret: '(YJ&+mYaWuLvrB&4)oIJR-Xf##LnzM8M2ltf&sSdH)',
    }),
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
