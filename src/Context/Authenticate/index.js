import {createContext, useState} from "react";

export const Authentication = createContext()
const Authenticate = (props) => {
    const [isLogin, setIsLogin] = useState(false)


    return (
        <Authentication.Provider value={{isLogin, setIsLogin}}>{props.children}</Authentication.Provider>
    )
}
export default Authenticate