import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

//Using props from the parent RecipesPage, this component places data from the recipe array from the API into a numbered React Bootstrap List if it is an "item" or into a paragraph if it is a "directions". The loop checks if there is data in the array with ? then lists out the items in the array using map. Outside the loop the directions populate once.

export const RecipeComponent = (props) => {

    const {recipe, setRecipes} = props;

    return (
            <div className="recipe">    
                <h5>Ingredients</h5>                
                <ListGroup as="ol" numbered>
                
                {recipe?.map((item) => (
                    <ListGroup.Item as="li">{item}</ListGroup.Item>
                    ))} 
                </ListGroup>                         
                <h5>Directions</h5>
                <p>{props.directions}</p>
            </div>
            )
};