import { useState } from "react"
import AddMovie from "./AddMovie"
import MovieList from "./MovieList"


function MoviePage() {
    const [moviestate,setmoviestate] = useState(["DieHard","HarryPotter"])


    const handleNewmovie = (newMovie) =>
    {
        setmoviestate((prevState) =>{
            return [...prevState,newMovie]
           })
    }
  return (
    <div className="container col-12 col-md-6 my-3 border">
        <AddMovie handleNewmovie = {handleNewmovie}/>
        <MovieList movieList={moviestate}/> 
      
    </div>
  )
}

export default MoviePage
