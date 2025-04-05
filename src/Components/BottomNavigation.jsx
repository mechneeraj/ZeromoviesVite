import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PersonIcon from '@mui/icons-material/Person';
import { useMediaQuery } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import * as React from 'react';

export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('recents');
    const isMobile = useMediaQuery('(max-width:600px)'); // Adjust the breakpoint as needed

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (!isMobile) {
        return null; // Render nothing if not in mobile view
    }

    return (
        <BottomNavigation
            sx={{
                width: '100vw', // Full viewport width
                height: '45px', // Adjust height as needed
                position: 'fixed',
                bottom: 0,
                left: 0, // Ensure it starts from the very left
                right: 0, // Ensure it ends at the very right
                zIndex: 1000, // Ensure it stays on top of other components
                margin: 0, // Remove any margin
                position: 'fixed', // Fixed position
                borderRadius: 20, // Remove any margin
                backgroundColor: 'rgba(54, 52, 52, 0.8)', // Change to your desired color
                '& .MuiBottomNavigationAction-root': {
                    color: 'white', // Change icon color
                    outline: 'none', // Remove blue outline
                },
                '& .Mui-selected': {
                    color: 'red', // Change selected icon color
                },
            }}
            value={value}
            onChange={handleChange}
        >
            <BottomNavigationAction
                // label="watchlist"
                value="watchlist"
                icon={<BookmarksIcon />}
            />
            {/* <input
                type="text"
                placeholder="Search..."
                style={{
                    width: '80%',
                    border: 'none',
                    outline: 2,
                    paddingLeft: '10px',
                    backgroundColor: 'transparent',
                }}></input> */}
            <BottomNavigationAction
                // label="setting"
                value="setting"
                icon={<PersonIcon />}
            />
        </BottomNavigation>
    );
}
