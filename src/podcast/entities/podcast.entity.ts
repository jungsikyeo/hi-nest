import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
import { Episode } from './episode.entity';
import { ObjectType, Field } from '@nestjs/graphql';
import { IsString, IsNumber, IsOptional } from 'class-validator';

@ObjectType()
@Entity()
export class Podcast {
  @PrimaryGeneratedColumn()
  @Field((_) => Number)
  @IsNumber()
  id: number;

  @Column()
  @Field((_) => String)
  @IsString()
  title: string;

  @Column()
  @Field((_) => String)
  @IsString()
  category?: string;

  @Column()
  @Field((_) => Number, { nullable: true, defaultValue: 0 })
  @IsNumber()
  @IsOptional()
  rating?: number;

  @OneToMany((type) => Episode, (episode) => episode.podcast, {
    cascade: true,
    lazy: true,
    onDelete: 'CASCADE',
  })
  @Field((_) => [Episode])
  episodes: Episode[];
}
