import React from 'react'
import { createContext } from 'react'
//create context & export it
export const PostDataContext = createContext()
//provide data
//use data

const ThemeContext = (props) => {
  return (
    <div>
        <PostDataContext.Provider value={["Smit", "Sit", "dark"]}>//value attribute 
            {props.childern}  //app
        </PostDataContext.Provider>
        
    </div>
  )
}

export default ThemeContext