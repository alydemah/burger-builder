import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

//
const burger = (props) => {
    let transformedngredients = Object.keys(props.ingredients)
    .map(igKey => {
         return [...Array(props.ingredients[igKey])].map((_, i) => {
            return   <BurgerIngredient key={igKey + i} type={igKey} />;
         }); // Now we have Array of two elements
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedngredients.length === 0) {
        transformedngredients = <p>Please start adding ingredients!</p>;
    }
    
    return (
        // 
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
};



export default burger;


