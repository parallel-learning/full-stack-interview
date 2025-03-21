import { Injectable } from "@nestjs/common";
import { PrismaClient, Song } from "@prisma/client";

@Injectable()
export class SongService {
  private prisma = new PrismaClient();

  public search = (): Promise<Song[]> => this.prisma.song.findMany({ take: 20 });
}
