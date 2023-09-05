import "./App.css";
import { cardDetails } from "./index";
import {
  Typography,
  AppBar,
  Card,
  Button,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  CardActions,
} from "@mui/material";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";

function App() {
  return (
    <div className="App">
      <AppBar position="relaative">
        <Toolbar>
          <PhotoCameraBackIcon color="primary" />
          <Typography variant="h6" color="darkblue" sx={{ ml: 3 }}>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="text-primary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Welcome to my photo Album Project built using MUI5.Feel free to
              add recommendations.
            </Typography>

            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" text="white">
                  See My Pictures
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Edit Photo
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default App;
