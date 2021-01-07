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
  OutputDeletePodcastDto,
  OutputGetAllPodcastsDto,
  OutputGetPodcastDto,
  OutputUpdatePodcastDto,
} from './dtos/output-podcast.dto';
import { InputGetPodcastDto } from './dtos/input-podcast.dto';
import {
  OutputCreateEpisodeDto,
  OutputDeleteEpisodeDto,
  OutputFindEpisodeDto,
  OutputGetEpisodesDto,
  OutputUpdateEpisodeDto,
} from './dtos/output-episode.dto';
import { InputGetEpisodeDto } from './dtos/input-episode.dto';

@Resolver((of) => Podcast)
export class PodcastsResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query((returns) => OutputGetAllPodcastsDto)
  getAllPodcasts(): OutputGetAllPodcastsDto {
    return this.podcastsService.getAllPodcasts();
  }

  @Mutation((returns) => OutputCreatePodcastDto)
  createPodcast(
    @Args('createPodcastInput') createPodcastInput: CreatePodcastDto,
  ): OutputCreatePodcastDto {
    return this.podcastsService.createPodcast(createPodcastInput);
  }

  @Query((type) => OutputGetPodcastDto)
  getPodcast(
    @Args('getPodcastInput') getPodcastInput: InputGetPodcastDto,
  ): OutputGetPodcastDto {
    return this.podcastsService.getPodcast(getPodcastInput.id);
  }

  @Mutation((type) => OutputGetPodcastDto)
  deletePodcast(
    @Args('getPodcastInput') getPodcastInput: InputGetPodcastDto,
  ): OutputDeletePodcastDto {
    return this.podcastsService.deletePodcast(getPodcastInput.id);
  }

  @Mutation((type) => OutputUpdatePodcastDto)
  updatePodcast(
    @Args('getPodcastInput') getPodcastInput: InputGetPodcastDto,
    @Args('updatePodcastInput') updatePodcastInput: UpdatePodcastDto,
  ): OutputUpdatePodcastDto {
    return this.podcastsService.updatePodcast(
      getPodcastInput.id,
      updatePodcastInput,
    );
  }
}

@Resolver((of) => Episode)
export class EpisodesResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query((type) => OutputGetEpisodesDto)
  getEpisodes(
    @Args('getPodcastInput') getPodcastInput: InputGetPodcastDto,
  ): OutputGetEpisodesDto {
    return this.podcastsService.getEpisodes(getPodcastInput.id);
  }

  @Mutation((type) => OutputCreateEpisodeDto)
  createEpisode(
    @Args('getPodcastInput') getPodcastInput: InputGetPodcastDto,
    @Args('createEpisodeInput') createEpisodeInput: CreateEpisodeDto,
  ): OutputCreateEpisodeDto {
    return this.podcastsService.createEpisode(
      getPodcastInput.id,
      createEpisodeInput,
    );
  }

  @Mutation((type) => OutputDeleteEpisodeDto)
  deleteEpisode(
    @Args('getPodcastInput') getPodcastInput: InputGetPodcastDto,
    @Args('getEpisodeInput') getEpisodeInput: InputGetEpisodeDto,
  ): OutputDeleteEpisodeDto {
    return this.podcastsService.deleteEpisode(
      getPodcastInput.id,
      getEpisodeInput.id,
    );
  }

  @Query((type) => OutputFindEpisodeDto)
  findEpisode(
    @Args('getPodcastInput') getPodcastInput: InputGetPodcastDto,
    @Args('getEpisodeInput') getEpisodeInput: InputGetEpisodeDto,
  ): OutputFindEpisodeDto {
    return this.podcastsService.findEpisode(
      getPodcastInput.id,
      getEpisodeInput.id,
    );
  }

  @Mutation((type) => OutputUpdateEpisodeDto)
  updateEpisode(
    @Args('getPodcastInput') getPodcastInput: InputGetPodcastDto,
    @Args('getEpisodeInput') getEpisodeInput: InputGetEpisodeDto,
    @Args('updateEpisodeInput') updateEpisodeInput: UpdateEpisodeDto,
  ): OutputUpdateEpisodeDto {
    return this.podcastsService.updateEpisode(
      getPodcastInput.id,
      getEpisodeInput.id,
      updateEpisodeInput,
    );
  }
}
