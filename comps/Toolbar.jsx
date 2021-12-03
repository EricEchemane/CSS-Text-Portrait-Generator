import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export default function Toolbar({ chooseImage }) {

    return <>
        <Paper sx={{ overflowY: 'hidden', overflowX: 'auto' }} id='toolbar'>
            <Box
                display='flex'
                gap='1rem'
                sx={{ p: 1, overflowY: 'hidden', overflowX: 'auto', width: '2000px' }}>

                <Button
                    onClick={chooseImage}
                    sx={{ display: 'grid', placeItems: 'center', textTransform: 'none', gap: '.25rem' }}
                    startIcon={<BrokenImageOutlinedIcon sx={{ m: 0, p: 0, transform: 'translateX(.3rem)' }} />}>
                    Change Image
                </Button>

                <Button
                    sx={{ display: 'grid', placeItems: 'center', textTransform: 'none', gap: '.25rem' }}
                    startIcon={<FilterNoneOutlinedIcon sx={{ m: 0, p: 0, transform: 'translateX(.3rem)' }} />}>
                    Filters
                </Button>

                <Button
                    sx={{ display: 'grid', placeItems: 'center', textTransform: 'none', gap: '.25rem' }}
                    startIcon={<TextSnippetOutlinedIcon sx={{ m: 0, p: 0, transform: 'translateX(.3rem)' }} />}>
                    Change Lyrics
                </Button>

                <Button
                    sx={{ display: 'grid', placeItems: 'center', textTransform: 'none', gap: '.25rem' }}
                    startIcon={<FontDownloadOutlinedIcon sx={{ m: 0, p: 0, transform: 'translateX(.3rem)' }} />}>
                    Edit Text
                </Button>

                <Button
                    sx={{ display: 'grid', placeItems: 'center', textTransform: 'none', gap: '.25rem' }}
                    startIcon={<SaveAltIcon sx={{ m: 0, p: 0, transform: 'translateX(.3rem)' }} />}>
                    Save as Image
                </Button>
            </Box>
        </Paper>
    </>;
}