import Tag from './Tag';
import React from 'react';


class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: this.props.tags.map(t => <Tag name={t} />),
            ingredients: []
        };

        this.addTag = () => {
            const tags = [...this.state.tags];
            tags.push(<Tag name={"huhu"} />)
            this.setState({
                tags: tags,
            })
            console.log(this.state)
        };

        this.addIngredient = (x) => {
            const ingredients = [...this.state.ingredients];
            if (x.key === "Enter") {
                console.log(x);
                ingredients.push(this.ingredient);
                console.log(ingredients)
                this.setState({
                    ingredients: ingredients,
                })
            }

        };
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.state.tags}
                <button onClick={this.addTag}>Huhu</button>
                {this.state.ingredients}
                <input value={this.ingredient} onKeyDown={this.addIngredient}></input>
            </div>
        );
    }
}

export default Component;