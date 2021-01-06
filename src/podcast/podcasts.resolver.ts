import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Podcast } from './entities/podcast.entity';
import { Episode } from './entities/episode.entity';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { CreateEpisodeDto } from './dtos/create-episode.dto';
import { PodcastsService } from './podcasts.service';
import {
  OutputCreatePodcastDto,
  OutputGetPodcastDto,
} from './dtos/output-podcast.dto';
import { GetPodcastInput } from './dtos/input-podcast.dto';

@Resolver((of) => Podcast)
export class PodcastsResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query((returns) => [Podcast])
  getAllPodcasts(): Podcast[] {
    return this.podcastsService.getAllPodcasts().podcasts;
  }

  @Mutation((returns) => OutputCreatePodcastDto)
  createPodcast(
    @Args('createPodcastInput') createPodcastInput: CreatePodcastDto,
  ): OutputCreatePodcastDto {
    return this.podcastsService.createPodcast(createPodcastInput);
  }

  @Query((type) => OutputGetPodcastDto)
  getPodcast(@Args('getPodcastInput') getPodcastInput: GetPodcastInput) {
    return this.podcastsService.getPodcast(getPodcastInput.id);
  }
}
