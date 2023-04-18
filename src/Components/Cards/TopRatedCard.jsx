import React, { useState, useEffect } from 'react'
import './PopularCards.scss'

const img_url = 'https://image.tmdb.org/t/p/original'

const TopRatedCard = ({ title, TopRatedMovies ,}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [TopRatedMovies]);

    return (
        <div>
            <h2 className='title'>{title}</h2>

            {loading ? (
                <div className='loader'>
                    Loading...
                </div>
            ) : (
                <div className='Row'>
                    {TopRatedMovies.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <img src={`${img_url}${item.poster_path}`} alt="" className="card-img" />
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default TopRatedCard
