import axios, { AxiosInstance } from "axios";
import { SongPage, SongQuery } from "common/types/song.types";

class SongAPI {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({ baseURL: "http://localhost:8000" });
  }

  public search = (query: SongQuery = {}): Promise<SongPage> =>
    this.instance.get("song", { params: query }).then(r => r.data);
}

export const songApi = new SongAPI();
