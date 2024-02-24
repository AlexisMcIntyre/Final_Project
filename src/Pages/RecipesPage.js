import ListGroup from 'react-bootstrap/ListGroup';
import { TextBox } from '../Components/TextBox';
import { RecipeComponent } from '../Components/RecipeComponent';
import Accordion from 'react-bootstrap/Accordion';
import { recipeApi } from '../RecipeApi';
import React, { useState } from 'react';

//This component lists each individual recipe (generated in RecipeComponent) into a React Bootstrap Accordian. The recipes are listed out from the API using "map". When the page successfully loads, "fetchRecipes" is run, which is an asynchronous function that "gets" the recipes (using the RecipeApi) from the API then sets them as the state. 


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
            <TextBox title="Time to Eat!" text="There are some amazing foods around the world--click an option below to learn how to make some global cuisine at home! BONE APPLE TEA!"/>
            {this.state.recipes.map((recipe) => ( 
            <Accordion>
                
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>{recipe.recipename}</Accordion.Header>
                        <Accordion.Body>
                                      
                            <RecipeComponent
                                directions={recipe.directions}
                                recipe={recipe.items}
                            /> 
                        
                        </Accordion.Body>
                </Accordion.Item>
            
            </Accordion>
                  ))}  
    </>
    );
}
}