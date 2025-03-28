import { Injectable } from "@nestjs/common";
import { PrismaClient, Song } from "@prisma/client";
import { SongPage, SongQuery } from "common/types/song.types";

@Injectable()
export class SongService {
  private prisma = new PrismaClient();

  public search = async (query: SongQuery): Promise<SongPage> => {
    const { pageSize = 25, offset = 0 } = query;
    const [songs, totalCount] = await this.prisma.$transaction([
      this.prisma.song.findMany({ take: pageSize, skip: offset }),
      this.prisma.song.count(),
    ]);
    return { songs, totalCount };
  };

  public getRecommendedSongs = (playlistId: string): Promise<Song[]> => {
    return this.prisma.song.findMany({ where: { playlists: { none: { playlistId } } }, take: 25 });
  };
}
