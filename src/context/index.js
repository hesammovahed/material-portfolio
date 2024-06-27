import { createContext } from "react"


export const poroContext = createContext({
    value: [],
    setValue: () => { },
    handleChange: () => { },
    handleDrawer: () => { }
})

