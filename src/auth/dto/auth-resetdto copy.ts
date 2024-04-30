import { IsJWT, IsString, MinLength } from 'class-validator';

export class AuthResetDto {
  @IsString({ message: 'Interior must be a valid string', each: true })
  @MinLength(6, { message: 'Password is too weak' })
  password: string;

  @IsJWT()
  token: string;
}
