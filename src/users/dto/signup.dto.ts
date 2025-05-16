import { IsString, MinLength, IsEmail, IsNotEmpty } from 'class-validator';
import { zip } from 'rxjs/operators';

export class SignupDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  mobileNo: string;

  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  // @IsString()
  // @IsNotEmpty({ message: 'pancaard must be required' })
  // pancard: string;
  
}
