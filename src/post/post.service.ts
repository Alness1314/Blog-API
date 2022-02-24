import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDTO, EditPostDTO } from './dtos';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async getMany(): Promise<PostEntity[]> {
    return await this.postRepository.find();
  }

  async getOne(id: number) {
    const data = await this.postRepository.findOne(id);
    if (!data) throw new NotFoundException('the post does not exist');
    return data;
  }

  async createOne(dto: CreatePostDTO) {
    const data = this.postRepository.create(dto as any);
    return await this.postRepository.save(data);
  }

  async editOne(id: number, dto: EditPostDTO) {
    const data = await this.postRepository.findOne(id);
    if (!data) throw new NotFoundException('the post does not exist');

    const editData = Object.assign(data, dto);

    return await this.postRepository.save(editData);
  }

  async deleteOne(id: number) {
    return await this.postRepository.delete(id);
  }
}
