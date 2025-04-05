import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { deepOrange } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';

export default function DisableElevation() {
    const [selectedChip, setSelectedChip] = React.useState(0); // State to track the selected chip
    const isPcView = useMediaQuery('(min-width:600px)'); // Check if the screen width is 600px or more

    const handleChipClick = (index) => {
        setSelectedChip(index);
    };

    return (<>
        <Stack
            direction="row"
            spacing={1}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '16px',
                overflow: 'hidden',
                padding: '8px',
                zIndex: 1000,
                backgroundColor: 'rgba(181, 175, 175, 0.8)', // Semi-transparent background
                backdropFilter: 'blur', // Blur effect
                color: 'black', // Text color
            }}
        >
            {isPcView && (
                <>
                    <Avatar sx={{ bgcolor: deepOrange[500], marginRight: '10px' }}>N</Avatar>
                    <TextField
                        // variant="outlined"
                        placeholder="Search..."
                        size="small"
                        sx={{
                            marginRight: '10px',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                        }}
                    />
                </>
            )}
            
            <Chip
                label="Recommended Movies"
                onClick={() => handleChipClick(0)}
                sx={{
                    borderRadius: '16px',
                    backgroundColor: selectedChip === 0 ? 'red' : 'inherit',
                    fontWeight: selectedChip === 0 ? 'bold' : 'normal',
                    color: selectedChip === 0 ? 'white' : 'inherit',
                }}
            />
            <Chip
                label="List Movies"
                onClick={() => handleChipClick(1)}
                sx={{
                    borderRadius: '16px',
                    backgroundColor: selectedChip === 1 ? 'red' : 'inherit',
                    fontWeight: selectedChip === 1 ? 'bold' : 'normal',
                    color: selectedChip === 1 ? 'white' : 'inherit',
                }}
            />
            <Chip
                label="Watchlist"
                onClick={() => handleChipClick(2)}
                sx={{
                    borderRadius: '16px',
                    backgroundColor: selectedChip === 2 ? 'red' : 'inherit',
                    fontWeight: selectedChip === 2 ? 'bold' : 'normal',
                    color: selectedChip === 2 ? 'white' : 'inherit',
                }}
            />
        </Stack>
        </>
    );
}
