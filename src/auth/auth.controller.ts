import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthResetDto } from './dto/auth-resetdto copy';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('login')
  async login(@Body() body: AuthLoginDto) {}

  async register(@Body() body: AuthRegisterDto) {}

  async forget(@Body() body: AuthForGetDto) {}

  async reset(@Body() body: AuthResetDto) {}
}
