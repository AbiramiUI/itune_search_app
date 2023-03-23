import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfiniteScroll from "react-infinite-scroll-component";

export const ItemCard = (props:any) => {
    const[count, setCount] = useState(10); // initial count to show initial items
    let keyValue = 0;
    const fetchMoreData = () => {
        setTimeout(() => {
            setCount(count + 10);
        }, 500);
    };

    return (
        <InfiniteScroll
            className="card-wrapper"
            dataLength={count}
            next={fetchMoreData}
            hasMore={true}
            loader={undefined} 
        >
            {props.data.slice(0, count).map((index: any) => (
                <Card className="card" sx={{ display: 'flex' }} key={keyValue += 1}>
                    <CardMedia
                        component="img"
                        sx={{ width: 150 }}
                        image={index.artworkUrl100}
                        alt={index.artistName}
                        className="card-image"
                    />
                    <Box className="content" sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography className="bold-font track-name" component="div" variant="h5">
                                {index.collectionCensoredName}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {index.artistName}
                            </Typography>
                        </CardContent>
                        <Box className="content" sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <IconButton aria-label="play/pause" onClick={() => window.open(index.trackViewUrl)}>
                                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Card>
            ))}
        </InfiniteScroll>
    )
}