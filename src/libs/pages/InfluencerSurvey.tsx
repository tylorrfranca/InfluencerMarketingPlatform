'use client'
import { Box } from "panda";
import { Button, TextField } from "@mui/material";
import { useState } from 'react';

export default function InfluencerSurvey() {
  const [instagramName, setInstagramName] = useState('');
  const [genre, setGenre] = useState('');
  const [engagementRate, setEngagementRate] = useState('');

  const handleSubmit = () => {
    console.log('Instagram Name:', instagramName);
    console.log('Genre:', genre);
    console.log('Engagement Rate:', engagementRate);
  };

  return (
    <Box 
      width="100%" 
      height="100vh" 
      bgColor="#2A263E" 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      flexDirection="column" 
      padding={4}
    >
      <Box 
        fontSize="xxx-large" 
        fontWeight="bold" 
        css={{
          background: 'linear-gradient(90deg, #F1755F, #F15F9A)',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}
        marginBottom={4}
      >
        BrandSync
      </Box>

      <TextField 
        label="Instagram Name" 
        variant="outlined" 
        value={instagramName} 
        onChange={(e) => setInstagramName(e.target.value)} 
        sx={{ backgroundColor: 'white', marginBottom: 2, width: '300px' }}
      />
      
      <TextField 
        label="Genre" 
        variant="outlined" 
        value={genre} 
        onChange={(e) => setGenre(e.target.value)} 
        sx={{ backgroundColor: 'white', marginBottom: 2, width: '300px' }}
      />
      
      <TextField 
        label="Engagement Rate (%)" 
        variant="outlined" 
        type="number" 
        value={engagementRate} 
        onChange={(e) => setEngagementRate(e.target.value)} 
        sx={{ backgroundColor: 'white', marginBottom: 2, width: '300px' }}
      />
      <TextField 
        label="Follower Count" 
        variant="outlined" 
        type="number" 
        value={engagementRate} 
        onChange={(e) => setEngagementRate(e.target.value)} 
        sx={{ backgroundColor: 'white', marginBottom: 2, width: '300px' }}
      />
      <TextField 
        label="Total Compensation Expectation" 
        variant="outlined" 
        type="number" 
        value={engagementRate} 
        onChange={(e) => setEngagementRate(e.target.value)} 
        sx={{ backgroundColor: 'white', marginBottom: 2, width: '300px' }}
      />

      <Button 
        onClick={handleSubmit} 
        sx={{
          background: 'linear-gradient(90deg, #F1755F, #F15F9A)',
          color: 'white',
          width: '300px',
          marginTop: 2,
          '&:hover': {
            background: 'linear-gradient(90deg, #F15F9A, #F1755F)',
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
