import axios, { AxiosInstance } from "axios";
import { PlaylistPage, PlaylistQuery } from "common/types/playlist.types";
import { Song, SongPage, SongQuery } from "common/types/song.types";

class LibraryAPI {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({ baseURL: "http://localhost:8000" });
  }

  public searchSongs = (query: SongQuery = {}): Promise<SongPage> =>
    this.instance.get("song", { params: query }).then(r => r.data);

  public searchPlaylists = (query: PlaylistQuery = {}): Promise<PlaylistPage> =>
    this.instance.get("playlist", { params: query }).then(r => r.data);

  public getRecommendedSongs = (playlistId: string): Promise<Song[]> =>
    this.instance.get(`playlist/${playlistId}/recommend-songs`).then(r => r.data);
}

export const libraryApi = new LibraryAPI();
