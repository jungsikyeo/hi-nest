import { CreatePodcastDto } from './create-podcast.dto';
import { InputType } from '@nestjs/graphql';

@InputType('createEpisodeInput', { isAbstract: true })
export class CreateEpisodeDto extends CreatePodcastDto {}
