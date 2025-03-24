import { Song } from "@prisma/client";

export type ExtendedPlaylist = {
  id: string;
  name: string;
  songs: Song[];
};

export type PlaylistPage = {
  playlists: ExtendedPlaylist[];
  totalCount: number;
};

export type PlaylistQuery = {
  pageSize?: number;
  offset?: number;
};
