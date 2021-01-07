import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType('getPodcastInput', { isAbstract: true })
export class InputGetPodcastDto {
  @Field((type) => String)
  @IsString()
  readonly id: string;
}
