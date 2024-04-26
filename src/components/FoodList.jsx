import { useEffect } from "react";
import foodsJSON from "../foods.json";
import FoodBox from "./FoodBox";
import { useState } from "react";

export default function FoodList() {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setFoods(foodsJSON)
        setLoading(false)
    }, [])

    const handleDelete = (e, id) => {
      e.preventDefault();
  
      const findIndex = foods.findIndex((food) => food.id === id)
  
      const temp = [...foods];
      temp.splice(findIndex, 1)
      setFoods(temp)
    }

    return (
		<>
        
           {!loading &&
            foods &&
            foods.map((e, i) => {
              return (
                <FoodBox 
                  food={foods[i]} 
                  key={foods[i].id} 
                  handleDelete={handleDelete} 
                />
              )
            })
            }
		</>
	)
}
