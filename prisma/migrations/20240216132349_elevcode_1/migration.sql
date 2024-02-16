-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "tmdbId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT,
    "releaseDate" TIMESTAMP(3),
    "posterPath" TEXT,
    "backdropPath" TEXT,
    "voteAverage" DOUBLE PRECISION,
    "voteCount" INTEGER,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "originalLanguage" TEXT NOT NULL,
    "popularity" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_tmdbId_key" ON "Movie"("tmdbId");
