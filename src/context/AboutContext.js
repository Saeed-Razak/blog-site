import {  createContext } from "react"

export const AboutContext = createContext();

function AboutContextProvider({children}){

const about={
    name: "Saeed Abdul Razak",
    hobbies:["football","Moveis", "Plumbing works"],
    Bio:"i am an aspiring  developer and a plumber as well. "
}

    return(
        <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>
        
    )
}

export default AboutContextProvider