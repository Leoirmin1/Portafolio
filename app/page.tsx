import { Box, Typography } from "@mui/material";


export default function Home() {
  return (
    <Box className="Box-Page">
      <Typography className="typography-h1" variant="h1" component="h1">
        ¡Hola, Mundo!
      </Typography>
      <Typography className="typography-body" variant="body1" component="h2">
        Bienvenido a mi portafolio.
      </Typography>
    </Box>
  );
}
