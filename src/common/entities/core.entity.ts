import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { IsDate, IsNumber, IsOptional } from 'class-validator';

@ObjectType()
export class CoreEntity {
  @PrimaryGeneratedColumn()
  @Field((_) => Number)
  @IsNumber()
  @IsOptional()
  id: number;

  @Field(() => Date)
  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;
}
