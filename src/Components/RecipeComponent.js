import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

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