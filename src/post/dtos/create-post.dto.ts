import { EnumToString } from './../../helpers/enumToString';
import { IsArray, IsBoolean, IsEnum, IsString } from 'class-validator';
import { PostCategory } from '../enums';

export class CreatePostDTO {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  excerpt: string;

  @IsString()
  content: string;

  @IsEnum(PostCategory, {
    message: `invalid option. the options valid is ${EnumToString(
      PostCategory,
    )}`,
  })
  category: PostCategory;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsBoolean()
  status: boolean;
}
