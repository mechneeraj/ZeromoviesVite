import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React, { useEffect, useState } from 'react';

export default function StandardImageList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('http://www.omdbapi.com/?s=marvel&apikey=e27ff60a');
                const data = await response.json();
                if (data.Search) {
                    const formattedMovies = data.Search.map((movie) => ({
                        img: movie.Poster,
                        title: movie.Title,
                    }));
                    setMovies(formattedMovies);
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <ImageList
            sx={{ height: 'auto', margin: 0, padding: 0 }}
            cols={
                window.innerWidth >= 1024
                    ? 8
                    : window.innerWidth >= 768
                        ? 6
                        : 3
            }
            gap={10}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        className="hover-shrink"
                        srcSet={`${item.img}`}
                        src={`${item.img}`}
                        loading="lazy"
                        style={{
                            width: "100%", 
                            height: "100%", 
                            objectFit: "contain"
                        }}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}


const itemData = [
    { img: '/img/captain_marvel_ver2.jpg', title: 'Captain Marvel' },
    { img: '/img/grind_house.jpg', title: 'Grind House' },
    { img: '/img/bridge_of_spies.jpg', title: 'Bridge of Spies' },
    { img: '/img/indiana_jones_and_the_kingdom_of_the_crystal_skull.jpg', title: 'Indiana Jones and the Kingdom of the Crystal Skull' },
    { img: '/img/good_the_bad_and_the_ugly_ver4.jpg', title: 'The Good, The Bad and The Ugly' },
    { img: '/img/6208148.jpg', title: 'Unknown Movie 9' },
    { img: '/img/matrix.webp', title: 'Unknown Movie 10' },
    { img: '/img/parking.webp', title: 'Parking' },
    { img: '/img/murders.webp', title: 'Murders' },
    { img: '/img/raid.webp', title: 'Raid' },
    { img: '/img/aiyaa.jpg', title: 'Aiyaa' },
    { img: '/img/heroin.jpg', title: 'Heroin' },
    { img: '/img/flower.webp', title: 'Flower' },
    { img: '/img/thor.webp', title: 'Thor' },
    { img: '/img/django_unchained.jpg', title: 'Django Unchained' },
    { img: '/img/sonic.webp', title: 'Sonic' },
    // { img: '/img/slumdog.webp', title: 'Slumdog' },
    { img: '/img/greenbook.webp', title: 'Green Book' },
    { img: '/img/everything.webp', title: 'Everything' },
    // { img: '/img/back_to_future.webp', title: 'Back to the Future' },
    { img: '/img/mission.webp', title: 'Mission' },
    { img: '/img/KILLBILL.VOL.1.PW_500x749.webp', title: 'Kill Bill Vol. 1' },
    { img: '/img/homealone.124915_500x749.webp', title: 'Home Alone' },
    { img: '/img/topgun.webp', title: 'Top Gun' },
    { img: '/img/FightClub.mpw.125100_500x749.webp', title: 'Fight Club' },
    { img: '/img/PulpFiction.Ver1_500x749.webp', title: 'Pulp Fiction' },
    { img: '/img/jurassicpark.mpw_500x749.webp', title: 'Jurassic Park' },
];

