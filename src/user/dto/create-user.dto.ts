import { IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  ID_SYSTEM_CFG_CLIENTE: number;
  ID_PESSOA: number;
  LOGIN: string;
  NOME: string;

  @IsEmail({}, { message: 'Invalid email' })
  EMAIL_DE_LOGIN: string;
  @IsStrongPassword({ minLength: 6 }, { message: 'Password is too weak' })
  SENHA: string;

  DATADOCADASTRO?: Date;
  DT_UPDATE?: Date;
}
