import axios, { AxiosInstance } from "axios";
import { Song } from "common/types/song.types";

class SongAPI {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({ baseURL: "http://localhost:8000" });
  }

  public search = (): Promise<Song[]> => this.instance.get("song").then(r => r.data);
}

export const songApi = new SongAPI();
