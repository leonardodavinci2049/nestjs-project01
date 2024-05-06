import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
//import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();// o objetivo é pegar o token do header da requisição
    const token = request.headers.authorization.split(' ')[1]; // o token é passado no header da requisição

    if (!token) {
      return false;
    }

    console.log(' -- x --- ');
     console.log('token: ' + token);
     console.log(' -- x --- ');

    try {
 
      const data = this.authService.checkToken(token); // retorna o payload - foi escolhido checkToken en vez de is validToken porque retorna mais dados
      console.log('data: ' + data);
      console.log(' -- x --- ');


      request.tokenPayload = data; //cria essa propriedade no request para ser usada em outros lugares
      request.userRequest = await this.userService.findOne(data.id);

      return true;
    } catch (error) {
      return false;
    }
  }
}
