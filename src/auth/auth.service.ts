import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async createToken() {}

  async checkToken() {}

  /*  
 async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  } */

  async login(email: string, password: string): Promise<any> {
    const user = await this.prisma.tbl_system_usuario.findFirst({
      where: {
        EMAIL_DE_LOGIN: email,
        SENHA: password,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Email e/ou senha incorreto');
    }

    return true;
  }

  async forget(email: string): Promise<any> {
    const user = await this.prisma.tbl_system_usuario.findFirst({
      where: {
        EMAIL_DE_LOGIN: email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Email incorreto');
    }
    return true;
  }

  async reset(id: number, token: string): Promise<any> {
    // To do: implementar a verificação do token

    await this.prisma.tbl_system_usuario.update({
      where: {
        ID_USUARIO_SYSTEM: id,
      },
      data: {
        SENHA: token,
      },
    });

    return true;
  }
}
