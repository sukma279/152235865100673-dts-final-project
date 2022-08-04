import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/muthiapry/pair-22-dts-mini-project">
          Sukma S.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const footers = [
    {
      description: ['Audio and Subtitles', 'Media Center', 'Security', 'Contact us']
    },
    {
      description: ['Audio Description', 'Investor Relations', 'Legal Provisions']
    },
    {
      description: ['Help center', 'Jobs', 'Cookie Preferences']
    },
    {
      description: ['Gift Cards', 'Terms of Ise', 'Corporate Information']
    },
  ];
  
const Footer = () => {
  return (
    <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <ul style={{listStyleType: "none", paddingLeft: 0}}>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="h6" underline="none" sx={{fontWeight: 400, fontSize: 13}}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Button variant="outlined" href="https://github.com/sukma279/152235865100673-dts-final-project" target="_blank" sx={{fontWeight: 400, fontSize: 13}}>Source Code</Button>
        <Copyright sx={{ mt: 3, fontWeight: 300, fontSize: 11, color: "#808080" }} />
      </Container>
  );
};
export default Footer;