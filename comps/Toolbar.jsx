import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export default function Toolbar() {

    return <>
        <Paper>
            <Box
                display='flex'
                gap='1rem'
                justifyContent='center'
                sx={{ p: 1, overflowY: 'hidden', overflowX: 'auto' }}>

                <Button
                    sx={{ display: 'grid', placeItems: 'center', textTransform: 'none', gap: '.25rem' }}
                    startIcon={<FilterNoneOutlinedIcon sx={{ m: 0, p: 0, transform: 'translateX(.3rem)' }} />}>
                    Filters
                </Button>

                <Button
                    sx={{ display: 'grid', placeItems: 'center', textTransform: 'none', gap: '.25rem' }}
                    startIcon={<TextSnippetOutlinedIcon sx={{ m: 0, p: 0, transform: 'translateX(.3rem)' }} />}>
                    Lyrics
                </Button>

                <Button
                    sx={{ display: 'grid', placeItems: 'center', textTransform: 'none', gap: '.25rem' }}
                    startIcon={<TextFieldsOutlinedIcon sx={{ m: 0, p: 0, transform: 'translateX(.3rem)' }} />}>
                    Text
                </Button>

                <Button
                    sx={{ display: 'grid', placeItems: 'center', textTransform: 'none', gap: '.25rem' }}
                    startIcon={<SaveAltIcon sx={{ m: 0, p: 0, transform: 'translateX(.3rem)' }} />}>
                    Download
                </Button>
            </Box>
        </Paper>
    </>;
}