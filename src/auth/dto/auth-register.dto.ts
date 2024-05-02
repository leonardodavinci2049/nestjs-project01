import { IsEmail} from "class-validator";

export class AuthRegisterDto {
    ID_SYSTEM_CFG_CLIENTE?: number;
    ID_USUARIO_SYSTEM?: number;
    ID_PESSOA?: number;
    LOGIN?: string;
    NOME?: string;
  
    @IsEmail({}, { message: 'Invalid email' })
    EMAIL_DE_LOGIN: string;
    SENHA?: string;
  }
  