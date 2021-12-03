import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';

import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';

export default function Toolbar({ chooseImage }) {

    return <>
        <Paper sx={{ overflowY: 'hidden', overflowX: 'auto' }} id='toolbar'>
            <Box
                display='flex'
                justifyContent='center'
                gap='1rem'
                sx={{ p: 1, overflowY: 'hidden', overflowX: 'auto' }}>

                <Button
                    onClick={chooseImage}
                    sx={{ display: 'grid', placeItems: 'center', textTransform: 'none', gap: '.25rem' }}
                    startIcon={<BrokenImageOutlinedIcon sx={{ m: 0, p: 0, transform: 'translateX(.3rem)' }} />}>
                    Change Image
                </Button>

                <Button
                    sx={{ display: 'grid', placeItems: 'center', textTransform: 'none', gap: '.25rem' }}
                    startIcon={<EqualizerOutlinedIcon sx={{ m: 0, p: 0, transform: 'translateX(.3rem)' }} />}>
                    Adjustments
                </Button>

                <Button
                    sx={{ display: 'grid', placeItems: 'center', textTransform: 'none', gap: '.25rem' }}
                    startIcon={<TextSnippetOutlinedIcon sx={{ m: 0, p: 0, transform: 'translateX(.3rem)' }} />}>
                    Change Lyrics
                </Button>
            </Box>
        </Paper>
    </>;
}