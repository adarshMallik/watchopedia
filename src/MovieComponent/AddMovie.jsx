import { useState } from "react"

function AddMovie({handleNewmovie}) {

    const[name,setName] = useState("")

    function submitAddMovieForm(e)
    {
        e.preventDefault();
        handleNewmovie(name);
        setName("");

    }

  return (
    <form onSubmit={(e) => submitAddMovieForm(e)}>
      <div className="row text-white">
        <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>
        <div className="col-8 offset-1">
          <input
            type="text"
            className="form-control"
            placeholder="Movie Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          ></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success form-control">Add</button>
        </div>
        <hr className="mt-3" />
      </div>
    </form>
  )
}

export default AddMovie
