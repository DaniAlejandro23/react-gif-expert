import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( categories ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImage = async () => {
      const newImage = await getGifs( categories );
      setImages( newImage );
      setIsLoading( false );
    }
  
    useEffect( () => {
      getImage();    
    }, [ ])

  return {
    images,
    isLoading

  }
}
