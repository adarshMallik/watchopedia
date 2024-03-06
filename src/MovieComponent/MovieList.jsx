import React from 'react'

function MovieList({movieList}) {
  return (
    <div>
      {movieList.map((movie,index)=>{
        return <div key={index}>{movie}</div>
      })}
    </div>
  )
}

export default MovieList
