import { useEffect, useState } from "react";
import { ExtendedPlaylist, PlaylistPage, PlaylistQuery } from "common/types/playlist.types";
import { libraryApi } from "../api/library.api";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DEFAULT_STYLES } from "../util/data.util";
import { useNavigate } from "react-router";

const DATA_GRID_COLUMNS: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "songCount", headerName: "Song Count", flex: 1 },
];

const toPlaylistRow = (playlist: ExtendedPlaylist) => ({
  id: playlist.id,
  name: playlist.name,
  songCount: playlist.songs.length,
});

const PlaylistListScreen = () => {
  const [playlistPage, setPlaylistPage] = useState<PlaylistPage>();

  const [selectedPlaylist, setSelectedPlaylist] = useState<ExtendedPlaylist>();

  const fetchPlaylistPage = (query?: PlaylistQuery) => libraryApi.searchPlaylists(query).then(setPlaylistPage);

  useEffect(() => {
    fetchPlaylistPage();
  }, []);

  return (
    <Stack gap={2} p={2} height="100%" width="100%">
      <Typography variant="h3">Playlists</Typography>

      <Stack direction="row" sx={{ height: 0, width: "100%", flex: "1 1 0%" }}>
        <DataGrid
          columns={DATA_GRID_COLUMNS}
          rows={playlistPage?.playlists.map(toPlaylistRow)}
          onRowClick={({ id }) => {
            const selected = playlistPage?.playlists.find(p => p.id === id);
            setSelectedPlaylist(selected);
          }}
          rowSelection={false}
          paginationMode="server"
          rowCount={playlistPage?.totalCount}
          pageSizeOptions={[25, 50, 100]}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 25 } } }}
          onPaginationModelChange={({ pageSize, page: pageIndex }) =>
            fetchPlaylistPage({ pageSize, offset: pageIndex * pageSize })
          }
          sx={DEFAULT_STYLES}
        />

        {selectedPlaylist && (
          <Stack gap={2} width="50%" height="100%" px={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h4">{selectedPlaylist.name}</Typography>
              <IconButton onClick={() => setSelectedPlaylist(undefined)}>
                <CloseIcon />
              </IconButton>
            </Stack>

            <Typography variant="subtitle1">Songs</Typography>

            <Stack gap={1} sx={{ height: 0, width: "100%", flex: "1 1 0%", overflowY: "auto" }}>
              {selectedPlaylist.songs.map(song => (
                <Typography variant="body1">{song.trackName}</Typography>
              ))}
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default PlaylistListScreen;
