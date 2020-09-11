import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    //const categories = ['One punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One punch'])

    /*const handleAdd = () => {
        //setCategories(categories.concat('Hola'))
        //setCategories(['Hola',...categories])
        setCategories([...categories, 'Hola'])
    }*/

    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {categories.map((category)=>{
                    return <GifGrid 
                        key = {category}
                        category = {category}/>
                })}
            </ol>

        </div>
    )
}

export default GifExpertApp
