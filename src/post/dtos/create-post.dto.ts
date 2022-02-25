import { EnumToString } from './../../helpers/enumToString';
import { IsArray, IsBoolean, IsEnum, IsString } from 'class-validator';
import { PostCategory } from '../enums';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDTO {
  @ApiProperty({ type: String })
  @IsString()
  title: string;

  @ApiProperty({ type: String })
  @IsString()
  slug: string;

  @ApiProperty({ type: String })
  @IsString()
  excerpt: string;

  @ApiProperty({ type: String })
  @IsString()
  content: string;

  @ApiProperty({ type: String })
  @IsEnum(PostCategory, {
    message: `invalid option. the options valid is ${EnumToString(
      PostCategory,
    )}`,
  })
  category: PostCategory;

  @ApiProperty({ type: String })
  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  status: boolean;
}
