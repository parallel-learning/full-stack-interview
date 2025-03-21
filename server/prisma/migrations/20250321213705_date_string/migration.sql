-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Song" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "trackName" TEXT NOT NULL,
    "artistName" TEXT NOT NULL,
    "popularity" INTEGER NOT NULL,
    "albumName" TEXT NOT NULL,
    "albumReleaseDate" TEXT NOT NULL,
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
INSERT INTO "new_Song" ("acousticness", "albumName", "albumReleaseDate", "artistName", "danceability", "durationMillis", "energy", "id", "instrumentalness", "key", "liveness", "loudness", "mode", "popularity", "speechiness", "tempo", "trackName", "valence") SELECT "acousticness", "albumName", "albumReleaseDate", "artistName", "danceability", "durationMillis", "energy", "id", "instrumentalness", "key", "liveness", "loudness", "mode", "popularity", "speechiness", "tempo", "trackName", "valence" FROM "Song";
DROP TABLE "Song";
ALTER TABLE "new_Song" RENAME TO "Song";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
