import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthResetDto } from './dto/auth-reset.dto';
import { AuthForGetDto } from './dto/auth-forget.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() body: AuthLoginDto) {
    return this.authService.login(body.EMAIL_DE_LOGIN, body.SENHA);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDto) {
    return this.userService.create(body);
  }

  @Post('forget')
  async forget(@Body() body: AuthForGetDto) {
    return this.authService.forget(body.email);
  }

  @Post('reset')
  async reset(@Body() { ID_USUARIO_SYSTEM, TOKEN }: AuthResetDto) {
    return this.authService.reset(ID_USUARIO_SYSTEM, TOKEN);
  }
}
