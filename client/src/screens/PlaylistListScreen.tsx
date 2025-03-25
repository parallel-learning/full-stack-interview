import { useEffect, useState } from "react";
import { ExtendedPlaylist, PlaylistPage, PlaylistQuery } from "common/types/playlist.types";
import { Box, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { libraryApi } from "../api/library.api";
import PlaylistDetails from "../components/PlaylistDetails";
import { DEFAULT_STYLES } from "../util/data.util";

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

      <Stack direction="row" gap={2} sx={{ height: 0, width: "100%", flex: "1 1 0%" }}>
        <DataGrid
          columns={DATA_GRID_COLUMNS}
          rows={playlistPage?.playlists.map(toPlaylistRow)}
          onRowClick={({ id }) => {
            const selected = playlistPage?.playlists.find(p => p.id === id);
            setSelectedPlaylist(selected);
          }}
          rowSelection={false}
          paginationMode="server"
          rowCount={playlistPage?.totalCount || 0}
          pageSizeOptions={[25, 50, 100]}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 25 } } }}
          onPaginationModelChange={({ pageSize, page: pageIndex }) =>
            fetchPlaylistPage({ pageSize, offset: pageIndex * pageSize })
          }
          sx={DEFAULT_STYLES}
        />

        {selectedPlaylist && (
          <Box
            sx={{
              width: "50%",
              height: "100%",
              p: 2,
              overflowY: "auto",
              border: 1,
              borderColor: "grey.300",
              borderRadius: 1,
            }}
          >
            <PlaylistDetails playlist={selectedPlaylist} onClose={() => setSelectedPlaylist(undefined)} />
          </Box>
        )}
      </Stack>
    </Stack>
  );
};

export default PlaylistListScreen;
