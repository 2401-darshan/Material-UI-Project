import { Pagination, Stack } from '@mui/material';

const CommonPagination = ({ page, totalPages, onChange }) => {
  return (
    <Stack alignItems="center" mt={2}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, value) => onChange(value)}
        color="primary"
      />
    </Stack>
  );
};

export default CommonPagination;
