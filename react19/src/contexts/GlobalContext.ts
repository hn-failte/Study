import { createContext } from "react";

const context = createContext<{ title: string }>({
    title: ''
})

export default context
