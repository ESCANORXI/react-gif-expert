import React, { useState } from "react";
import { AddCategory, GiftGrid } from "./components";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ])

    const onAddCategory = (NewCategory) => {


        if ( categories.includes( NewCategory ) ) return;
        
        setCategories([ NewCategory, ...categories ])
    }

    return(
        <>
        <h1>Hola</h1>
        <AddCategory
        OnNewCategory = { value => onAddCategory( value )}

         />

  
            { 
                categories.map( ( category ) => ( 

             
                 <GiftGrid 
                 key = { category } 
                 category = { category } />
             

    )) 
            }
 
        </>
    )
}