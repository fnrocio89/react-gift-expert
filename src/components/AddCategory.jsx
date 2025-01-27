import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onChange = ({ target }) => setInputValue(target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (value.length < 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(value);
        setInputValue('');
    };


    return (

        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search Gifts..."
                value={inputValue}
                onChange={onChange}
            />
        </form>

    )
};
