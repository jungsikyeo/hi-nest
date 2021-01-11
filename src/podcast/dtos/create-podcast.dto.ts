import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Entity, Column } from 'typeorm';

@InputType()
@Entity()
export class CreatePodcastDto {
  @Field((_) => String)
  @IsString()
  @Column()
  readonly title: string;

  @Field((_) => String)
  @IsString()
  @Column()
  readonly category: string;

  @Field((_) => Number, { nullable: true })
  @IsNumber()
  @Column()
  @IsOptional()
  readonly rating?: number;
}
