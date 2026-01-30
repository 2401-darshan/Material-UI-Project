import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Divider,
  Button
} from "@mui/material";
import {
  Users,
  Building2,
  CalendarDays,
  School
} from "lucide-react";

/* ---------- Stat Card ---------- */
const StatCard = ({ title, value, icon: Icon }) => (
  <Card sx={{ border: "1px solid #f0f0f0", boxShadow: "none", borderRadius: "4px" }}>
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: "16px !important"
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "10px",
            fontWeight: 600,
            color: "#8c8c8c",
            letterSpacing: "0.5px",
            textTransform: "uppercase"
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: "22px", fontWeight: 700, mt: 0.5 }}>
          {value}
        </Typography>
      </Box>

      <Box
        sx={{
          width: 44,
          height: 44,
          bgcolor: "#e6f7ff",
          color: "#1890ff",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Icon size={20} />
      </Box>
    </CardContent>
  </Card>
);

/* ---------- Dashboard Content ---------- */
export default function Default() {
  return (
    <Box sx={{ p: "24px 48px", bgcolor: "#fff" }}>
      {/* Page Title */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontSize: "12px", color: "#8c8c8c" }}>
          Home / Dashboard
        </Typography>
        <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
          Dashboard
        </Typography>
      </Box>

      {/* Stat Cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Total Students" value="2,450" icon={Users} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Total Departments" value="12" icon={Building2} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Total Events" value="38" icon={CalendarDays} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Total Institutes" value="5" icon={School} />
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {/* Recent Activities */}
        <Grid item xs={12} md={4}>
          <Card sx={{ border: "1px solid #f0f0f0", boxShadow: "none" }}>
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ px: 3, py: 2, borderBottom: "1px solid #f0f0f0" }}>
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                  Recent Activities
                </Typography>
              </Box>

              <List sx={{ py: 1 }}>
                {[
                  ["New student registered", "2 minutes ago"],
                  ["Event 'Tech Fest' created", "1 hour ago"],
                  ["Department 'AI & DS' added", "Yesterday"]
                ].map((item, i) => (
                  <Box key={i}>
                    <ListItem sx={{ px: 3, py: 1.5 }}>
                      <Box>
                        <Typography sx={{ fontSize: "13px" }}>
                          {item[0]}
                        </Typography>
                        <Typography sx={{ fontSize: "11px", color: "#8c8c8c" }}>
                          {item[1]}
                        </Typography>
                      </Box>
                    </ListItem>
                    {i < 2 && <Divider />}
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={8}>
          <Card sx={{ border: "1px solid #f0f0f0", boxShadow: "none" }}>
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ px: 3, py: 2, borderBottom: "1px solid #f0f0f0" }}>
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                  Quick Actions
                </Typography>
              </Box>

              <Box sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  {[
                    "Add Student",
                    "Add Department",
                    "Create Event",
                    "Add Institute"
                  ].map((btn) => (
                    <Grid item xs={12} sm={6} md={3} key={btn}>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          bgcolor: "#1890ff",
                          fontSize: "12px",
                          textTransform: "none",
                          boxShadow: "none"
                        }}
                      >
                        {btn}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
