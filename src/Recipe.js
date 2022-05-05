import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <img className={style.image} src={image} alt=""/>
            {/* <div className={style.detailsContainer}> */}
            <h1 className={style.title}>{title}</h1>
            <p className={style.calories}>Calories: {calories}</p>
            <ol className={style.list}>
                {ingredients.map((ingredient, index) => (
                <li className={style.listItem} key={index}>{ingredient.text}</li>
                    ))}
            </ol>
            {/* </div> */}
        </div>
    );
}

export default Recipe;
