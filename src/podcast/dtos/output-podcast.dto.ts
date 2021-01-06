import { ObjectType, Field } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Podcast } from '../entities/podcast.entity';

@ObjectType()
export class OutputCreatePodcastDto {
  @Field((type) => Number)
  @IsNumber()
  id: number;

  @Field((type) => String, { nullable: true })
  @IsString()
  @IsOptional()
  error?: string;
}

@ObjectType()
export class OutputGetPodcastDto {
  @Field((type) => Podcast)
  podcast: Podcast;

  @Field((type) => String)
  err: string;
}
