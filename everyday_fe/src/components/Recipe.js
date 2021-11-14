import Tag from './Tag';
import React, { useState } from 'react';

function Component() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [description, setDescription] = useState("");
    
    const addIngredient = (x) => {
        const copy = [...ingredients];
        if (x.key === "Enter" && newIngredient !== "") {
            copy.push(newIngredient);
            setIngredients(copy);
            setNewIngredient("");
        }
    };
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleNewIngredientChange = (event) => {
        setNewIngredient(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleSave = () => {
        console.log(title);
        console.log(ingredients);
        console.log(description);
    }

    return (<div>
        <div>
            <input value={title} onChange={handleTitleChange} />
        </div>
        <div>
            <input value={newIngredient} onKeyDown={addIngredient} onChange={handleNewIngredientChange} />
        </div>
        <ul>
            {ingredients.map(i => <li>{i}</li>)}
        </ul>
        <textarea value={description} onChange={handleDescriptionChange} />
        <div>
            <button onClick={handleSave}>Save</button>
        </div>

    </div>
    )
}

export default Component;
