import { useState } from 'react';
import { AddCategory, GiftGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    };


    return (
        <>
            {/*Titulo*/}
            <h1>GiftExpertApp</h1>
            {/* <h1>{categories}</h1> */}

            {/*Input*/}

            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/*Listado de Gift*/}


            {
                categories.map((category) =>
                // <li key={categorie}> {categorie} </li>)
                (
                    <GiftGrid
                        key={category}
                        category={category}
                    />
                )

                )
            }



        </>
    )
};
