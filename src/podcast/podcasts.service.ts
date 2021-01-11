import { Injectable } from '@nestjs/common';
import { CreateEpisodeDto } from './dtos/create-episode.dto';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';
import { CoreOutput, PodcastOutput, EpisodesOutput } from './dtos/output.dto';
import { EpisodesSearchInput } from './dtos/podcast.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getConnection } from 'typeorm/index';

@Injectable()
export class PodcastsService {
  constructor(
    @InjectRepository(Podcast) private readonly podcasts: Repository<Podcast>,
    @InjectRepository(Episode) private readonly episodes: Repository<Episode>,
  ) {}

  async getAllPodcasts(): Promise<Podcast[]> {
    return await this.podcasts.find();
  }

  async createPodcast({
    title,
    category,
    rating,
  }: CreatePodcastDto): Promise<CoreOutput> {
    try {
      await this.podcasts.save(
        this.podcasts.create({ title, category, rating }),
      );
      return { ok: true };
    } catch (e) {
      return { ok: false, error: 'Couldn`t create podcast' };
    }
  }

  async getPodcast(id: number): Promise<PodcastOutput> {
    const podcast = await this.podcasts.findOne(id);
    if (!podcast) {
      return {
        ok: false,
        error: `${id} id podcast doesn't exist!`,
      };
    }
    return {
      ok: true,
      error: null,
      podcast,
    };
  }

  async deletePodcast(id: number): Promise<CoreOutput> {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Episode)
      .where('podcastId = :id', { id })
      .execute();
    await this.podcasts.delete(id);
    return { ok: true };
  }

  async updatePodcast({ id, ...rest }: UpdatePodcastDto): Promise<CoreOutput> {
    try {
      await this.podcasts.update(id, { ...rest });
      return { ok: true };
    } catch (e) {
      return { ok: false, error: 'Couldn`t update account' };
    }
  }

  async getEpisodes(podcastId: number): Promise<EpisodesOutput> {
    const { podcast, ok, error } = await this.getPodcast(podcastId);
    if (!ok) {
      return { ok, error };
    }
    return { ok: true, episodes: podcast.episodes };
  }

  async createEpisode({
    id: podcastId,
    title,
    category,
  }: CreateEpisodeDto): Promise<CoreOutput> {
    const { podcast, ok, error } = await this.getPodcast(podcastId);
    if (!ok) {
      return { ok, error };
    }
    await this.episodes.save(
      this.episodes.create({ title, category, podcast }),
    );
    return { ok: true };
  }

  async deleteEpisode({ episodeId }: EpisodesSearchInput): Promise<CoreOutput> {
    await this.episodes.delete(episodeId);
    return { ok: true };
  }

  async updateEpisode({
    episodeId,
    ...rest
  }: UpdateEpisodeDto): Promise<CoreOutput> {
    await this.episodes.update(episodeId, { ...rest });
    return { ok: true };
  }
}
