-- CreateTable
CREATE TABLE "Song" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "trackName" TEXT NOT NULL,
    "artistName" TEXT NOT NULL,
    "popularity" INTEGER NOT NULL,
    "albumName" TEXT NOT NULL,
    "albumReleaseDate" DATETIME NOT NULL,
    "danceability" INTEGER NOT NULL,
    "energy" INTEGER NOT NULL,
    "key" INTEGER NOT NULL,
    "loudness" INTEGER NOT NULL,
    "mode" INTEGER NOT NULL,
    "speechiness" INTEGER NOT NULL,
    "acousticness" INTEGER NOT NULL,
    "instrumentalness" INTEGER NOT NULL,
    "liveness" INTEGER NOT NULL,
    "valence" INTEGER NOT NULL,
    "tempo" INTEGER NOT NULL,
    "durationMillis" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Playlist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SongPlaylist" (
    "songId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,

    PRIMARY KEY ("songId", "playlistId"),
    CONSTRAINT "SongPlaylist_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "SongPlaylist_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PlaylistGenre" (
    "playlistId" TEXT NOT NULL,
    "genreId" INTEGER NOT NULL,

    PRIMARY KEY ("playlistId", "genreId"),
    CONSTRAINT "PlaylistGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PlaylistGenre_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

