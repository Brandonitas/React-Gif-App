import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handeInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        //Para evitar que haga regresh de la pagina
        e.preventDefault();
        
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats])
            setInputValue('')
        }        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handeInputChange}>
                </input>
            </form>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
