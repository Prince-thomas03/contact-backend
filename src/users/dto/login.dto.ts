import { IsString, MinLength, IsEmail } from 'class-validator';
import { zip } from 'rxjs/operators';

export class LoginDto {

  @IsString()
  mobileNo: string;
  
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
