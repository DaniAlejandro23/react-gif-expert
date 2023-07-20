import { useState } from 'react'
import { AddCategoria } from './components/AddCategory' 
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState( [] )

  const onAddCategory = ( newCategories ) =>{

    if(categories.includes(newCategories)) return;

    setCategories( [newCategories, ...categories] )

  }

  return (
    <>
      <h1> GifExportApp </h1>

      <AddCategoria 
      onNewCategories = { onAddCategory }
      />  

      { 
      categories.map( ( categories ) => ( 
        <GifGrid 
        key = { categories } 
        categories = { categories } /> 
        ))
      }

    </>
  )
}

