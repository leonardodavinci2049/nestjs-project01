import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    UserService,
    JwtModule.register({
      secret: 'Bhx5M(8:gMT=h_K~kJES)p-m',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AuthModule {}
