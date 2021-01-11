import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PodcastsModule } from './podcast/podcasts.module';
import { MoviesModule } from './movie/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Podcast } from './podcast/entities/podcast.entity';
import { Episode } from './podcast/entities/episode.entity';

@Module({
  imports: [
    MoviesModule,
    PodcastsModule,
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'yjsnas.synology.me',
      port: 54321,
      username: 'postgres',
      password: 'y20431',
      database: 'postgres',
      synchronize: true,
      logging: true,
      entities: [Podcast, Episode],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
