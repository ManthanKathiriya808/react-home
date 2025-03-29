import React, { Children, useState } from "react";
import { ApiContext } from "./ApiContext";


export function ApiContextProvider({children}){

    const [products,setProducts] = useState([])
    const [users,setUsers] = useState([])

    let plen = products.length
    let ulen = users.length

    return(
        <ApiContext.Provider  value={{plen,ulen,users,products,setProducts,setUsers}}>
            {children}
        </ApiContext.Provider>
    )
}