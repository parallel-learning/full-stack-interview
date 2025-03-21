import { Controller, Get } from "@nestjs/common";
import { Song } from "@prisma/client";
import { SongService } from "src/song/song.service";

@Controller("song")
export class SongController {
  constructor(private songService: SongService) {}

  @Get()
  getSongSearch(): Promise<Song[]> {
    return this.songService.search();
  }
}
