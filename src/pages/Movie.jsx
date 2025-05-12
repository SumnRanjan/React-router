import { useLoaderData } from "react-router-dom";
import { Card } from "../ui/Card";

export const Movie = () => {
  const movieData = useLoaderData();
  // console.log(movieData);
  return (
    <>
      <ul className="container grid grid-four--cols">
        {movieData && movieData.Search.map((currMovie) => {
          return <Card key={currMovie.imdbID} currMovie={currMovie} />;
        })}
      </ul>
    </>
  );
};
