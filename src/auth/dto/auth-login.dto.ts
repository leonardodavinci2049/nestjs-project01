import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthLoginDto {
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsString({ message: 'Interior must be a valid string', each: true })
  @MinLength(6, { message: 'Password is too weak' })
  password: string;
}
