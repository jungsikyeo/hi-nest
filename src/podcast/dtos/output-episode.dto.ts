import { Field, ObjectType } from '@nestjs/graphql';
import { Episode } from '../entities/episode.entity';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@ObjectType()
export class OutputGetEpisodesDto {
  @Field((type) => [Episode])
  @IsOptional()
  episodes?: Episode[];

  @Field((type) => String)
  @IsString()
  @IsOptional()
  err?: string;
}

@ObjectType()
export class OutputCreateEpisodeDto {
  @Field((type) => Number)
  @IsNumber()
  @IsOptional()
  episodeId?: number;

  @Field((type) => String)
  @IsString()
  @IsOptional()
  err?: string;
}

@ObjectType()
export class OutputDeleteEpisodeDto {
  @Field((type) => String)
  @IsString()
  @IsOptional()
  err?: string;
}

@ObjectType()
export class OutputFindEpisodeDto {
  @Field((type) => Number)
  @IsNumber()
  @IsOptional()
  episodeId?: number;

  @Field((type) => String)
  @IsString()
  @IsOptional()
  err?: string;
}

@ObjectType()
export class OutputUpdateEpisodeDto {
  @Field((type) => String)
  @IsString()
  @IsOptional()
  err?: string;
}
