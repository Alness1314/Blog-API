import { CreatePostDTO } from './create-post.dto';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class EditPostDTO extends PartialType(
  OmitType(CreatePostDTO, ['content'] as const),
) {}
