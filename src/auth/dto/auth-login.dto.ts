import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class AuthLoginDto {
  LOGIN: string;
  @IsEmail({}, { message: 'Invalid email' })
  EMAIL_DE_LOGIN: string;
  @IsString({ message: 'Interior must be a valid string', each: true })
  @IsStrongPassword({ minLength: 6 }, { message: 'Password is too weak' })
  SENHA: string;
}
