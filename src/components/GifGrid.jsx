import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ categories }) => {

  const {images, isLoading} = useFetchGifs( categories );

  return (
    <>
      <h3>{ categories }</h3>

      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className="card-grid">
        { 
          images.map( (img) => (
            <GifItem 
              key   = { img.id }
              { ...img } 
            />
          ))
        }
      </div>
    </>
  )
}

