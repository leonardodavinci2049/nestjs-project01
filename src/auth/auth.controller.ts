import { Body, Controller, Headers, Post, Req, UseGuards } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';

import { AuthResetDto } from './dto/auth-reset.dto';
import { AuthForGetDto } from './dto/auth-forget.dto';

import { AuthService } from './auth.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { JwtAuthGuard } from './guards/jwt.auth.guard';
import { User } from 'src/core/decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() { LOGIN, EMAIL_DE_LOGIN, SENHA }: AuthLoginDto) {
    //console.log(LOGIN,EMAIL_DE_LOGIN, SENHA);
    return this.authService.login(LOGIN, EMAIL_DE_LOGIN, SENHA);
  }

  @UseGuards(JwtAuthGuard)
  @Post('checkToken')
  async checkToken( @Req() Req, @User('ID_USUARIO_SYSTEM') user,) {
   // const token = headers.authorization.split(' ')[1];
   // return this.authService.checkToken( token );
  // return {message: 'Token Success', data: Req.tokenPayload, user: Req.user}; 

    return {message: 'Token Success', data: Req.tokenPayload, user};


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
