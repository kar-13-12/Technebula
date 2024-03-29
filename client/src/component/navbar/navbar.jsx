import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem } from '@mui/material';
import logo from '../../assets/NEET-LOGO.png';
import './navbar.css';

const defaultNavbarColor = '#1167B1';

export default function Navbar() {
  const location = useLocation();
  const [navigation, setNavigation] = useState([
    { name: 'HOME', link: '/', current: location.pathname === '/' },
    // { name: 'ABOUT', link: '#about-container', current: location.pathname === '#about-container' },
    { name: 'COURSE', link: '/course', current: location.pathname === '/course' },
    { name: 'GALLERY', link: '/gallery', current: location.pathname === '/gallery' },
    { name: 'CONTACT', link: '/contact', current: location.pathname === '/contact' },
  ]);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutActive, setAboutActive] = useState(location.pathname === '#about-container');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setNavigation(prevNavigation => prevNavigation.map((item) => ({
      ...item,
      current: item.link === location.pathname,
    })));
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAboutClick = () => {
    setAboutActive(true);
    setIsMenuOpen(false);
  };

  return (
    <AppBar position={isSticky ? 'fixed' : 'static'} style={{ backgroundColor: isSticky ? '#1167B1' : defaultNavbarColor, transition: 'background-color 0.3s' }}>
      <Toolbar className="nav-bar">
        <img src={logo} alt="NEET Logo" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
        <Typography className="nav-static">SIVA MITHRA neet academy</Typography>
        {isMobile ? (
          <Button className="hamburger-menu" onClick={toggleMenu}><span style={{ color: 'white' }}>&#9776;</span></Button>
        ) : (
          <nav >
            {navigation.map((item) => (
              <Link to={item.link} key={item.name}  style={{ textDecoration: 'none', marginRight: '10px' }}>
                <Button
                  color={item.current ? 'primary' : 'inherit'}
                  className='app-bar'
                  sx={{
                    color: item.current ? 'blue' : 'inherit',
                    backgroundColor: item.current ? 'white' : 'transparent',
                    '&:hover': {
                      backgroundColor: item.current ? 'white' : 'rgba(0, 0, 0, 0.08)',
                    },
                    marginRight: '10px',
                  }}
                  variant={item.current ? 'contained' : 'text'}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>
        )}
        <Drawer
          anchor="right"
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          PaperProps={{ style: { backgroundColor: '#1167b1' } }}
        >
          <List>
            {navigation.map((item) => (
              <Link to={item.link} key={item.name} style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>
                <ListItem button>
                  <Typography style={{ color: 'white', fontSize: '14px' }}>{item.name}</Typography>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
