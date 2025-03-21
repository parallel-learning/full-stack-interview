import { Module } from "@nestjs/common";
import { SongController } from "src/song/song.controller";
import { SongService } from "src/song/song.service";

@Module({
  imports: [],
  controllers: [SongController],
  providers: [SongService],
})
export class AppModule {}
