import { Module } from "@nestjs/common";
import { PlaylistController } from "src/playlist/playlist.controller";
import { PlaylistService } from "src/playlist/playlist.service";
import { SongController } from "src/song/song.controller";
import { SongService } from "src/song/song.service";

@Module({
  imports: [],
  controllers: [PlaylistController, SongController],
  providers: [PlaylistService, SongService],
})
export class AppModule {}
