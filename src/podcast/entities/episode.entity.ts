import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, ManyToOne } from 'typeorm';
import { Podcast } from './podcast.entity';
import { CoreEntity } from '../../common/entities/core.entity';

@InputType('EpisodeInput', { isAbstract: true })
@ObjectType()
@Entity()
export class Episode extends CoreEntity {
  @Column()
  @Field((_) => String)
  title: string;

  @Column()
  @Field((_) => String)
  category: string;

  @ManyToOne((type) => Podcast, (podcast) => podcast.episodes)
  podcast: Podcast;
}
