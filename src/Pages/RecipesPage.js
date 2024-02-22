import ListGroup from 'react-bootstrap/ListGroup';
import { TextBox } from '../Components/TextBox';
import { RecipeComponent } from '../Components/RecipeComponent';
import Accordion from 'react-bootstrap/Accordion';
import { recipeApi } from '../RecipeApi';
import React from 'react';

export default class RecipesPage extends React.Component{
    state = {
        recipes: []

    };
   
    componentDidMount() {
        this.fetchRecipes();
    };
    
    fetchRecipes = async () => {
        const recipes = await recipeApi.get();
        this.setState({ recipes });
    };

    render () {
    return (
    <>
        
            <h1>Recipes</h1>
            <TextBox loc="There are some amazing foods around the world--let me share some recipes with you!" desc="Pick a recipe below:"/>
            <Accordion>
            {this.state.recipes.map((recipe) => (     
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{recipe.recipename}</Accordion.Header>
                        <Accordion.Body>
                                      
                            <RecipeComponent
                                directions={recipe.directions}
                                recipe={recipe.items}
                            /> 
                        
                        </Accordion.Body>
                </Accordion.Item>
                  ))}  
            </Accordion>
    </>
    );
}
}