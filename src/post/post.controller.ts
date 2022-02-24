import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDTO, EditPostDTO } from './dtos';
import { PostService } from './post.service';

@ApiTags('Posts')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getMany() {
    const data = await this.postService.getMany();
    return {
      message: 'result ok',
      data,
    };
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.postService.getOne(id);
    return {
      message: 'result ok',
      data,
    };
  }

  @Post()
  createOne(@Body() dto: CreatePostDTO) {
    return this.postService.createOne(dto);
  }

  @Put(':id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() dto: EditPostDTO) {
    return this.postService.editOne(id, dto);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.deleteOne(id);
  }
}
