import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PodcastsService } from './podcasts.service';
import { Podcast } from './entities/podcast.entity';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { CoreOutput, PodcastOutput, EpisodesOutput } from './dtos/output.dto';
import { PodcastSearchInput, EpisodesSearchInput } from './dtos/podcast.dto';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { Episode } from './entities/episode.entity';
import { CreateEpisodeDto } from './dtos/create-episode.dto';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';

@Resolver((Of) => Podcast)
export class PodcastsResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query((returns) => [Podcast])
  async getAllPodcasts(): Promise<Podcast[]> {
    return await this.podcastsService.getAllPodcasts();
  }

  @Mutation((returns) => CoreOutput)
  async createPodcast(
    @Args('input') createPodcastDto: CreatePodcastDto,
  ): Promise<CoreOutput> {
    const { ok, error } = await this.podcastsService.createPodcast(
      createPodcastDto,
    );
    return {
      ok,
      error,
    };
  }

  @Query((returns) => PodcastOutput)
  async getPodcast(@Args('input') podcastSearchInput: PodcastSearchInput) {
    return await this.podcastsService.getPodcast(podcastSearchInput.id);
  }

  @Mutation((returns) => CoreOutput)
  async deletePodcast(@Args('input') podcastSearchInput: PodcastSearchInput) {
    const { ok, error } = await this.podcastsService.deletePodcast(
      podcastSearchInput.id,
    );
    return {
      ok,
      error,
    };
  }

  @Mutation((returns) => CoreOutput)
  async updatePodcast(
    @Args('input') updatePodcastDto: UpdatePodcastDto,
  ): Promise<CoreOutput> {
    const { ok, error } = await this.podcastsService.updatePodcast(
      updatePodcastDto,
    );
    return {
      ok,
      error,
    };
  }
}

@Resolver((of) => Episode)
export class EpisodeResolver {
  constructor(private readonly podcastService: PodcastsService) {}

  @Query((returns) => EpisodesOutput)
  async getEpisodes(
    @Args('input') podcastSearchInput: PodcastSearchInput,
  ): Promise<EpisodesOutput> {
    return await this.podcastService.getEpisodes(podcastSearchInput.id);
  }

  @Mutation((returns) => CoreOutput)
  async createEpisode(
    @Args('input') createEpisodeDto: CreateEpisodeDto,
  ): Promise<CoreOutput> {
    return this.podcastService.createEpisode(createEpisodeDto);
  }

  @Mutation((returns) => CoreOutput)
  updateEpisode(@Args('input') updateEpisodeDto: UpdateEpisodeDto) {
    return this.podcastService.updateEpisode(updateEpisodeDto);
  }

  @Mutation((returns) => CoreOutput)
  async deleteEpisode(
    @Args('input') episodesSearchInput: EpisodesSearchInput,
  ): Promise<CoreOutput> {
    return this.podcastService.deleteEpisode(episodesSearchInput);
  }
}
