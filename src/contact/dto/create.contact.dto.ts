import { IsString, IsBoolean,IsEmail } from 'class-validator';

export class CreateContactDto {


  @IsString()
  firstName: string;

   @IsString()
  lastName: string;
  
   @IsString()
  mobileNo: string;

  @IsEmail({}, { message: 'Invalid email address' })
  email: string;


  
  




}
