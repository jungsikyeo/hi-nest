import { Field, InputType, PartialType, PickType } from '@nestjs/graphql';
import { Podcast } from '../entities/podcast.entity';

@InputType()
export class UpdatePodcastInput extends PickType(
  Podcast,
  ['id', 'title', 'description'],
  InputType,
) {}
