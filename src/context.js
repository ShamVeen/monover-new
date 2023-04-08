import React ,{useContext,useState,useEffect}from 'react'

const AppContext = React.createContext()
// 
const getLocalStorage =()=>{
    let getId =localStorage.getItem('getId')
    if(getId){
        return JSON.parse(localStorage.getItem('getId'))
    }
    else{
        return []
    }
}

// 

const AppProvider = ({children}) =>{

  
   const [subProId,setsubProId] = useState(null)
   const [deal,setdeal] = useState(getLocalStorage())

 
    // 
    useEffect(()=>{
        localStorage.setItem('getId',JSON.stringify(deal))
    },[deal])
    // 
    return(
        <AppContext.Provider
         value={{
             subProId,
             setsubProId,
             deal, 
             setdeal
        }}>
            {children}
        </AppContext.Provider>
    )
}
// 
export const useGlobalContext=()=>{
    return useContext(AppContext)
}
// 
export {AppContext,AppProvider}

