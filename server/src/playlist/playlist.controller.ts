import { Controller, Get, Query } from "@nestjs/common";
import { PlaylistPage, PlaylistQuery } from "common/types/playlist.types";
import { PlaylistService } from "src/playlist/playlist.service";
import { parseQueryInt } from "src/uti/query.util";

type RawPlaylistQuery = {
  pageSize?: string;
  offset?: string;
};

@Controller("playlist")
export class PlaylistController {
  constructor(private playlistService: PlaylistService) {}

  @Get()
  getPlaylistSearch(@Query() rawQuery: RawPlaylistQuery): Promise<PlaylistPage> {
    const query: PlaylistQuery = {
      pageSize: parseQueryInt(rawQuery.pageSize),
      offset: parseQueryInt(rawQuery.offset),
    };
    return this.playlistService.search(query);
  }
}
