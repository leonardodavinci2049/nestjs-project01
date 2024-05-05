import { IsEmail, IsNumber, IsString } from "class-validator";

export class AuthRegisterDto {
     @IsNumber()
    ID_SYSTEM_CFG_CLIENTE?: number;
    @IsNumber()
    ID_USUARIO_SYSTEM?: number;
    @IsNumber()
    ID_PESSOA?: number;
    @IsString({ message: 'Interior must be a valid string', each: true })
    LOGIN?: string;
    @IsString({ message: 'Interior must be a valid string', each: true })
    NOME?: string;
  
    @IsEmail({}, { message: 'Invalid email' })
    EMAIL_DE_LOGIN: string;
    @IsString({ message: 'Interior must be a valid string', each: true })
    SENHA?: string;
  }
  