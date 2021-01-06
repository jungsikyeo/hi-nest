import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PodcastsModule } from './podcast/podcasts.module';
import { MoviesModule } from './movie/movies.module';

@Module({
  imports: [
    MoviesModule,
    PodcastsModule,
    GraphQLModule.forRoot({ autoSchemaFile: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
