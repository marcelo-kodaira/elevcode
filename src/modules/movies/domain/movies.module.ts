// src/movies/movies.module.ts

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from 'src/infrastructure/db/prisma/prisma.service';
import { MoviesController } from '../infra/movies.controller';
import { MoviesService } from '../application/movies.service';

@Module({
  imports: [HttpModule],
  providers: [MoviesService, PrismaService],
  controllers: [MoviesController],
})
export class MoviesModule {}
