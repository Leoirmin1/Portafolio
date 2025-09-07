import { Button, Divider, Link, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <Box className="Box-Header">
        <Divider className='Divider-Header circle-1'/>
        <Divider className='Divider-Header circle-2'/>
        <Divider className='Divider-Header circle-3'/>
        <Box className='Box-Header-Content'>
            <Link href='/' underline="none">
                <Typography className='Typography-Header' variant="h4" component="div" color="primary">
                    Mi Portafolio
                </Typography>
            </Link>
            <Stack className='Stack-Header' direction="row" spacing={2}>
                <Button className="Button-Header About" href='/about'>
                    Acerca de
                </Button>
                <Button className="Button-Header" href='/skills'>
                    Habilidades
                </Button>
                <Button className="Button-Header" href='/experience'>
                    Experiencia
                </Button>
                <Button className="Button-Header" href='/projects'>
                    Proyectos
                </Button>
                <Button className="Button-Header" href='/contact'>
                    Contacto
                </Button>
                <Button className="Button-Header" 
                    href='https://drive.google.com/drive/folders/1c5kfXzFV-x1L6aEMaBq9vTOAuGUkkdag?usp=sharing'
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                 >
                    CV
                </Button>
            </Stack>
        </Box>
    </Box>
  );
};

export default Header;