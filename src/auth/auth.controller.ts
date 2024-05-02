import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';

import { AuthResetDto } from './dto/auth-reset.dto';
import { AuthForGetDto } from './dto/auth-forget.dto';

import { AuthService } from './auth.service';
import { AuthRegisterDto } from './dto/auth-register.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('/login')
  async login(@Body() { LOGIN,EMAIL_DE_LOGIN, SENHA }: AuthLoginDto) {
    return this.authService.login(LOGIN, EMAIL_DE_LOGIN, SENHA);
  }

  @Post('register')
  async register(@Body() data: AuthRegisterDto) {
    return this.authService.register(data);
  }

  @Post('forget')
  async forget(@Body() body: AuthForGetDto) {
    return this.authService.forget(body.EMAIL_DE_LOGIN);
  }

  @Post('reset')
  async reset(@Body() { SENHA, TOKEN }: AuthResetDto) {
    return this.authService.reset(SENHA, TOKEN);
  }
}
