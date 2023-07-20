import { IsEmail, IsOptional, IsString } from 'class-validator';

export class EditUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;
  @IsOptional()
  @IsString()
  firstName?: string;
  @IsString()
  @IsOptional()
  lastName?: string;
}