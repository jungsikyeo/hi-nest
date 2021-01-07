import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType('getEpisodeInput', { isAbstract: true })
export class InputGetEpisodeDto {
  @Field((type) => String)
  @IsString()
  readonly id: string;
}
