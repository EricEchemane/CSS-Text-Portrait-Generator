
/* MAT */
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { styled, experimental_sx as sx } from '@mui/material/styles';

/* ICONS */
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

/* NEXT */
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../context_hooks/ThemeContext';

export default function Navbar() {

    const { theme, setTheme } = useContext(ThemeContext);

    const StyledIconButton = styled(IconButton)(() => (
        sx({
            backdropFilter: 'invert(7%)',
            borderRadius: '.5rem',
        })
    ));

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return <>
        <Paper sx={{ p: '.75rem' }}>
            <Box display='flex' >
                <Link href='/' passHref>
                    <Button sx={{ fontWeight: '600' }}> CTP Generator </Button>
                </Link>

                <Box flex='1 1 auto'></Box>

                <Box display='flex' gap='1rem'>

                    <a
                        target='_blank'
                        rel='author'
                        href='https://github.com/EricEchemane/CSS-Text-Portrait-Generator'>

                        <Tooltip title='Source code'>
                            <StyledIconButton area-label='link to github repository'>
                                <GitHubIcon />
                            </StyledIconButton>
                        </Tooltip>
                    </a>
                    {/* {
                        theme === 'dark'
                            ?
                            <Tooltip title='Light mode'>
                                <StyledIconButton onClick={toggleTheme} area-label='switch to light theme'>
                                    <LightModeOutlinedIcon />
                                </StyledIconButton>
                            </Tooltip>
                            :
                            <Tooltip title='Dark mode'>
                                <StyledIconButton onClick={toggleTheme} area-label='switch to dark theme'>
                                    <DarkModeOutlinedIcon />
                                </StyledIconButton>
                            </Tooltip>
                    } */}
                </Box>
            </Box>
        </Paper>
    </>;
}