import React, { createContext, useState } from 'react'
import FoodData from '../FoodData';
export const dataContext = createContext()


const FoodContext = ({children}) => {
    const [cat,setCat] = useState(FoodData);
    let [input,setInput] = useState("");
    let [scart,setScart] = useState(false);

    let data = {
        input,
        setInput,
        cat,
        setCat,
        scart,
        setScart,
    }


  return (
    <div>
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
        
    </div>
  )
}

export default FoodContext