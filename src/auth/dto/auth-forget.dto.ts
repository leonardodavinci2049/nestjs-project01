import { IsEmail } from 'class-validator';

export class AuthForGetDto {
  @IsEmail({}, { message: 'Invalid email' })
  email: string;
}
