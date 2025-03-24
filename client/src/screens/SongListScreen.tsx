import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { SongPage, SongQuery } from "common/types/song.types";
import { songApi } from "../api/song.api";

const DATA_GRID_COLUMNS: GridColDef[] = [
  { field: "trackName", headerName: "Track", flex: 1 },
  { field: "artistName", headerName: "Artist", flex: 1 },
  { field: "albumName", headerName: "Album", flex: 1 },
];

const SongListScreen = () => {
  const [songPage, setSongPage] = useState<SongPage>();

  const fetchSongPage = (query?: SongQuery) => songApi.search(query).then(setSongPage);

  useEffect(() => {
    fetchSongPage();
  }, []);

  return (
    <Stack gap={2} p={2} height="100%" width="100%">
      <Typography variant="h3">Song List</Typography>
      <Box sx={{ height: 0, width: "100%", flex: "1 1 0%" }}>
        <DataGrid
          columns={DATA_GRID_COLUMNS}
          rows={songPage?.songs}
          rowSelection={false}
          paginationMode="server"
          rowCount={songPage?.totalCount}
          pageSizeOptions={[25, 50, 100]}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 25 } } }}
          onPaginationModelChange={({ pageSize, page: pageIndex }) =>
            fetchSongPage({ pageSize, offset: pageIndex * pageSize })
          }
        />
      </Box>
    </Stack>
  );
};

export default SongListScreen;
