import { Controller, Get, Query } from "@nestjs/common";
import { SongService } from "src/song/song.service";
import { SongPage, SongQuery } from "common/types/song.types";
import { parseQueryInt } from "src/uti/query.util";

type RawSongQuery = {
  pageSize?: string;
  offset?: string;
};

@Controller("song")
export class SongController {
  constructor(private songService: SongService) {}

  @Get()
  getSongSearch(@Query() rawQuery: RawSongQuery): Promise<SongPage> {
    const query: SongQuery = {
      pageSize: parseQueryInt(rawQuery.pageSize),
      offset: parseQueryInt(rawQuery.offset),
    };
    return this.songService.search(query);
  }
}
