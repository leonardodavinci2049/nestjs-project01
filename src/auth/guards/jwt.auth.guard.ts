import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
//import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserService } from 'src/user/user.service';


@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) {}

    async canActivate(
        context: ExecutionContext,
    ) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization.split(' ')[1];

        if (!token) {
            return false;
        }

        try {
            //  const decodedToken = this.jwtService.verify(token);
            //   request.user = decodedToken;
            //  console.log('token: ' + decodedToken);
            const { authorization } = context.switchToHttp().getRequest().headers;
           // console.log('token: ' + authorization);
            const data = this.authService.checkToken((authorization ?? '').split(' ')[1]);
            request.tokenPayload = data;
            request.user = await this.userService.findOne(data.id);


            return true;
        } catch (error) {
            return false;
        }
    }
}