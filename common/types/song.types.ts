import type { Song } from "@prisma/client";

export type { Song } from "@prisma/client";

export type SongPage = {
  songs: Song[];
  totalCount: number;
};

export type SongQuery = {
  pageSize?: number;
  offset?: number;
};
