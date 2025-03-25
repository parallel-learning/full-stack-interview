import { IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { ExtendedPlaylist } from "common/types/playlist.types";
import { useEffect, useState } from "react";
import { Song } from "common/types/song.types";
import { libraryApi } from "../api/library.api";

const PlaylistDetails = ({ playlist, onClose }: { playlist: ExtendedPlaylist; onClose: () => void }) => {
  const [isCurrentExpanded, setIsCurrentExpanded] = useState(false);
  const [isRecommendedExpanded, setisRecommendedExpanded] = useState(false);

  const [recommendedSongs, setRecommendedSongs] = useState<Song[]>([]);

  useEffect(() => {
    libraryApi.getRecommendedSongs(playlist.id).then(setRecommendedSongs);
  }, [playlist.id]);

  const addSong = (songId: string) => {
    libraryApi.addPlaylistSong(playlist.id, songId);
  };

  return (
    <Stack gap={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{playlist.name}</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Current Songs</Typography>
        <IconButton onClick={() => setIsCurrentExpanded(!isCurrentExpanded)}>
          {isCurrentExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </IconButton>
      </Stack>

      {isCurrentExpanded && (
        <Stack gap={1}>
          {playlist.songs.map(song => (
            <Typography variant="body1" key={song.id}>
              {song.trackName}
            </Typography>
          ))}
        </Stack>
      )}

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Recommended Songs</Typography>
        <IconButton onClick={() => setisRecommendedExpanded(!isRecommendedExpanded)}>
          {isRecommendedExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </IconButton>
      </Stack>

      {isRecommendedExpanded && (
        <Stack sx={{ borderTop: 1, borderColor: "grey.200" }}>
          {recommendedSongs.map(song => (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ p: 1, borderBottom: 1, borderColor: "grey.200" }}
              key={song.id}
            >
              <Typography variant="body1">{song.trackName}</Typography>
              <IconButton onClick={() => addSong(song.id)}>
                <PlaylistAddIcon />
              </IconButton>
            </Stack>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default PlaylistDetails;
