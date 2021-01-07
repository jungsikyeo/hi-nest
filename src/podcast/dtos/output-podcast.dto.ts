import { ObjectType, Field } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Podcast } from '../entities/podcast.entity';

@ObjectType()
export class OutputGetAllPodcastsDto {
  @Field((type) => [Podcast])
  podcasts: Podcast[];

  @Field((type) => String)
  @IsString()
  @IsOptional()
  err?: string;
}

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
  @IsString()
  err: string;
}

@ObjectType()
export class OutputDeletePodcastDto {
  @Field((type) => String)
  @IsString()
  err: string;
}

@ObjectType()
export class OutputUpdatePodcastDto {
  @Field((type) => String)
  @IsString()
  err: string;
}
