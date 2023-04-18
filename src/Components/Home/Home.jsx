import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.scss'
import PopularCards from '../Cards/popularCards'
import UpcomingCards from '../Cards/UpcomingCards'
import TopRatedCard from '../Cards/TopRatedCard'
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"


const url = `https://api.themoviedb.org/3/`
const img_url = 'https://image.tmdb.org/t/p/original'
const Api_key = "3d5d8b71f520567d2781e6e2a3c0361a"
const popular = "popular"
const upcoming = "upcoming"
const TopRated = "top_rated"


const Home = () => {

  const [popularMovies, Set_popularMovies] = useState([])
  const [upcomingMovies, Set_upcomingMovies] = useState([])
  const [TopRatedMovies, Set_TopRatedMovies] = useState([])


  useEffect(() => {

    const fetchpopularMovies = async () => {
      const { data: { results } } = await axios.get(`${url}movie/${popular}?api_key=${Api_key}&language=en-US&page=1`)
      // console.log(results)
      Set_popularMovies(results)
    }

    fetchpopularMovies()
  }, []);

  useEffect(() => {

    const fetchupcomingMovies = async () => {
      const { data: { results } } = await axios.get(`${url}movie/${upcoming}?api_key=${Api_key}&language=en-US&page=5`)
      // console.log(results)
      Set_upcomingMovies(results)
    }

    fetchupcomingMovies()
  }, [])

  useEffect(() => {

    const fetchTopRatedMovies = async () => {
      const { data: { results } } = await axios.get(`${url}movie/${TopRated}?api_key=${Api_key}&language=en-US&page=2`)
      console.log(results)
      Set_TopRatedMovies(results)
    }

    fetchTopRatedMovies()
  }, [])

  return (
    <>
      <div style={{
        backgroundImage: TopRatedMovies[19]
          ? `url(${`${img_url}/${TopRatedMovies[19].poster_path}`})`
          : "rgb(16, 16, 16)",
      }} className="banner">
        {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
        <div className="container"></div>
        {popularMovies[0] && <p>{popularMovies[0].overview}</p>}
        <div className='container'></div>
        <div>
          <button><BiPlay /> Play  </button>
          <button>My List <AiOutlinePlus /> </button>
        </div>
      </div>
      <PopularCards title={'Popular on netflix'} popularMovies={popularMovies} />
      <UpcomingCards title={'Upcoming Movies'} upcomingMovies={upcomingMovies} />
      <TopRatedCard title={'TopRated Movies'} TopRatedMovies={TopRatedMovies} />

    </>

  )
}

export default Home