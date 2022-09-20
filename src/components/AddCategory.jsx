import { useState } from "react"

export const AddCategory = ( { OnNewCategory } ) => {

const [inputValue, setinputValue] = useState('')

const onChange = ( { target }  ) => {
setinputValue(  target.value );
}

const onSubmit = ( event ) => {
    event.preventDefault();

    if( inputValue.trim().length <= 1)return;

    // setCategories( categories => [ inputValue, ...categories] );
    
    setinputValue( '' );
    OnNewCategory( inputValue.trim() );
    }
    
return (
    <form onSubmit={ ( event ) => onSubmit( event )}>
<input
type="text"
placeholder="Buscar"
value={inputValue}
onChange={ (event ) => onChange( event ) }
/>
</form>
  )
}
