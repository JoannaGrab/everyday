import React, { useState } from 'react';

function Component() {
    const recipes = [
        {
            title: "Pad Thai",
        },
        {
            title: "Zupa",
        },
        {
            title: "Kurczak",
        }
    ];


    return (
        <ul>
            {recipes.map(r => <li><a href="recipe">{r.title}</a></li>)}
        </ul>
    )
}

export default Component;

