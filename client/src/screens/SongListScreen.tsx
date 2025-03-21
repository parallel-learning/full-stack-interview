import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Song } from "common/types/song.types";
import { songApi } from "../api/song.api";

const SongListScreen = () => {
  const [songs, setSongs] = useState<Song[]>();

  useEffect(() => {
    songApi.search().then(setSongs);
  }, []);

  return (
    <Stack gap={2}>
      <Typography variant="h1">Song List</Typography>
      <Stack gap={1}>{songs?.map(s => <Typography key={s.id}>{s.trackName}</Typography>)}</Stack>
    </Stack>
  );
};

export default SongListScreen;
