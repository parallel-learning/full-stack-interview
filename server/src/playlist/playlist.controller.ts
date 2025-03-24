import { Controller, Get, Param, Query } from "@nestjs/common";
import { Song } from "@prisma/client";
import { PlaylistPage, PlaylistQuery } from "common/types/playlist.types";
import { PlaylistService } from "src/playlist/playlist.service";
import { SongService } from "src/song/song.service";
import { parseQueryInt } from "src/uti/query.util";

type RawPlaylistQuery = {
  pageSize?: string;
  offset?: string;
};

@Controller("playlist")
export class PlaylistController {
  constructor(
    private playlistService: PlaylistService,
    private songService: SongService,
  ) {}

  @Get()
  getPlaylistSearch(@Query() rawQuery: RawPlaylistQuery): Promise<PlaylistPage> {
    const query: PlaylistQuery = {
      pageSize: parseQueryInt(rawQuery.pageSize),
      offset: parseQueryInt(rawQuery.offset),
    };
    return this.playlistService.search(query);
  }

  @Get(":playlistId/recommend-songs")
  getRecommendedSongs(@Param("playlistId") playlistId: string): Promise<Song[]> {
    return this.songService.getRecommendedSongs(playlistId);
  }
}
