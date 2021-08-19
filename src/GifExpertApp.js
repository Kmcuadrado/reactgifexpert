import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['Samurai X']);
    // const handleAdd = ()=>{
    //     //Agregar un dato a un areglos con ...categories
    //     //setCategories(['Hunter',...categories]);
    //     //SetCategorias con callback
    //     setCategories(cats => [...categories, 'Hunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
        
            <ol>
                { 
                categories.map(category => (
                    <GifGrid 
                    key={ category}
                    category={ category}/>
                
                 ))
                }
            </ol>
        </>
    )
}
