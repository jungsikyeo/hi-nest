import { Module } from '@nestjs/common';
import { EpisodeController, PodcastsController } from './podcasts.controller';
import { PodcastsService } from './podcasts.service';
import { EpisodesResolver, PodcastsResolver } from './podcasts.resolver';

@Module({
  controllers: [PodcastsController, EpisodeController],
  providers: [PodcastsResolver, EpisodesResolver, PodcastsService],
})
export class PodcastsModule {}
