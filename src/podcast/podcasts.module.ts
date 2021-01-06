import { Module } from '@nestjs/common';
import { EpisodeController, PodcastsController } from './podcasts.controller';
import { PodcastsService } from './podcasts.service';
import { PodcastsResolver } from './podcasts.resolver';

@Module({
  controllers: [PodcastsController, EpisodeController],
  providers: [PodcastsResolver, PodcastsService],
})
export class PodcastsModule {}
