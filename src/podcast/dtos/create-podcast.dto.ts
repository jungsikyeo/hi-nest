import { InputType, Field } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

@InputType('createPodcastInput', { isAbstract: true })
export class CreatePodcastDto {
  @Field((type) => String)
  @IsString()
  @Length(5, 20)
  readonly title: string;

  @Field((type) => String)
  @IsString()
  readonly category: string;
}
