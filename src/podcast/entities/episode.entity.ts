import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType('episodeInput', { isAbstract: true })
@ObjectType()
export class Episode {
  @Field((type) => Number)
  @IsNumber()
  id: number;

  @Field((type) => String)
  @IsString()
  title: string;

  @Field((type) => String)
  @IsString()
  category: string;

  @Field((type) => Number)
  @IsNumber()
  rating: number;
}
