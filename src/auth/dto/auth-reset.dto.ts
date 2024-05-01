import { IsJWT, IsString, MinLength } from 'class-validator';

export class AuthResetDto {
  ID_USUARIO_SYSTEM?: number;

  @IsString({ message: 'Interior must be a valid string', each: true })
  @MinLength(6, { message: 'Password is too weak' })
  SENHA: string;

  @IsJWT()
  TOKEN: string;
}
