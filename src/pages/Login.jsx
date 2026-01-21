import React from "react";
import { Box, Card, CardContent, TextField, Button, Typography, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <Card sx={{ width: 380, boxShadow: 8, borderRadius: 3 }}>
        <CardContent sx={{ textAlign: "center", p: 4 }}>

          <Avatar
            sx={{
              bgcolor: "primary.main",
              margin: "0 auto 16px",
              width: 56,
              height: 56,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Login
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={2}>
            Enter your credentials to continue
          </Typography>

          <TextField
            fullWidth
            label="Username"
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, borderRadius: 2 }}
          >
            Login
          </Button>

        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
