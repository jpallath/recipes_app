import React, { Component } from "react";
class RecipesWindow extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedRecipe: "", recipes: ["hot dog", "cold cat"] };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(recipe) {
    this.setState({ selectedRecipe: recipe });
  }
  render() {
    let Recipes = this.state.recipes.map((rec, index) => {
      return (
        <h1 key={index} onClick={() => this.handleClick(rec)}>
          {rec}
        </h1>
      );
    });
    return (
      <div>
        <div>Currently Selected Recipe: {this.state.selectedRecipe}</div>
        <div>Recipe List:{Recipes}</div>
      </div>
    );
  }
}

export default RecipesWindow;
