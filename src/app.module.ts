import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/domain/auth.module';
import { MoviesModule } from './modules/movies/domain/movies.module';
import { PrismaService } from './infrastructure/db/prisma/prisma.service';
import { MoviesService } from './modules/movies/application/movies.service';
import { AuthService } from './modules/auth/application/auth.service';

@Module({
  imports: [AuthModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService, MoviesService, PrismaService, AuthService],
})
export class AppModule {}
