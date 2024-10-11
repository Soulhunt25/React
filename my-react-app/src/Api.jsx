import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Api.css';

const Api = () => {
    let [data, setData] = useState([]);
    let [filter, setFilter] = useState("all");
    let [cart, setCart] = useState([]); 

    async function call() {
        try {
            let apiData = await axios('https://dummyjson.com/recipes');
            setData(apiData.data.recipes);
            console.log(apiData.data.recipes);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    useEffect(() => {
        call();
    }, []);

    const filteredData = data.filter((recipe) => {
        if (filter === "all") return true;
        return recipe.mealType.includes(filter);
    });

    const addToCart = (recipe) => {
        setCart([...cart, recipe]);
    };

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1); 
        setCart(newCart);
    };

    return (
        <>
            <div className="button-container">
                <button onClick={() => setFilter("Breakfast")}>Breakfast</button>
                <button onClick={() => setFilter("Lunch")}>Lunch</button>
                <button onClick={() => setFilter("Dinner")}>Dinner</button>
                <button onClick={() => setFilter("all")}>All</button>
            </div>

            <div className="recipe-container">
                {filteredData.length > 0 ? (
                    filteredData.map((recipe, index) => (
                        <div id='card' key={index}>
                            <img height='300px' src={recipe.image} alt={recipe.name} />
                            <h3>{recipe.name}</h3>
                            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                            <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
                            <p><strong>Meal Type:</strong> {recipe.mealType.join(", ")}</p>
                            <button onClick={() => addToCart(recipe)}>Add to Cart</button>
                        </div>
                    ))
                ) : (
                    <p>No recipes found for the selected category.</p>
                )}
            </div>

            <div className="cart-container">
                <h2>Cart</h2>
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <h4>{item.name}</h4>
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
        </>
    );
};

export default Api;
