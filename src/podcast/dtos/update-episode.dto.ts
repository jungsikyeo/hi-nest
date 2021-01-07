import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType('updateEpisodeInput', { isAbstract: true })
export class UpdateEpisodeDto {
  @Field((type) => String)
  @IsString()
  @IsOptional()
  title?: string;

  @Field((type) => String)
  @IsString()
  @IsOptional()
  category?: string;

  @Field((type) => Number)
  @IsNumber()
  @IsOptional()
  rating?: number;
}
