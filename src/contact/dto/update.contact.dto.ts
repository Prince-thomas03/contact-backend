import { IsString, IsBoolean, IsEmail, IsOptional } from 'class-validator';

export class UpdateContactDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  mobileNo?: string;
  
  @IsOptional()
  @IsEmail({}, { message: 'Invalid email address' })
  email?: string;
}
