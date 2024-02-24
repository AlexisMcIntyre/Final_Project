import ListGroup from 'react-bootstrap/ListGroup';
import { TextBox } from '../Components/TextBox';
import { RecipeComponent } from '../Components/RecipeComponent';
import Accordion from 'react-bootstrap/Accordion';
import { recipeApi } from '../RecipeApi';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

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