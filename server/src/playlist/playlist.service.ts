import { Injectable } from "@nestjs/common";
import { Playlist, PrismaClient, Song, SongPlaylist } from "@prisma/client";
import { ExtendedPlaylist, PlaylistPage, PlaylistQuery } from "common/types/playlist.types";

@Injectable()
export class PlaylistService {
  private prisma = new PrismaClient();

  public search = async (query: PlaylistQuery): Promise<PlaylistPage> => {
    const { pageSize = 25, offset = 0 } = query;

    const [rawPlaylists, totalCount] = await this.prisma.$transaction([
      this.prisma.playlist.findMany({ take: pageSize, skip: offset, include: { songs: { include: { song: true } } } }),
      this.prisma.playlist.count(),
    ]);

    return { playlists: rawPlaylists.map(toExtendedPlaylist), totalCount };
  };

  public addSong = async (playlistId: string, songId: string): Promise<ExtendedPlaylist> => {
    const existing = await this.prisma.songPlaylist.findMany({ where: { playlistId, songId } });

    if (existing.length > 0) {
      await this.prisma.songPlaylist.create({ data: { playlistId, songId } });
    }

    return this.prisma.playlist.findUnique({ where: { id: playlistId } }).then(toExtendedPlaylist);
  };
}

type RawPlaylist = Playlist & { songs: (SongPlaylist & { song: Song })[] };

const toExtendedPlaylist = (raw: RawPlaylist) => ({
  id: raw.id,
  name: raw.name,
  songs: raw.songs.map(s => s.song),
});
