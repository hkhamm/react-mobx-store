import React, { createContext, FC, useContext } from "react"
import { useLocalStore } from "mobx-react-lite"

export interface Store {
    foo: string
    setFoo: (newFoo: string) => void
    bar: string
    setBar: (newBar: string) => void
}

export const StoreContext = createContext<Store>({} as Store)
export const useStore = () => useContext<Store>(StoreContext)

const StoreProvider: FC = ({ children }) => {
    const store = useLocalStore<Store>(() => ({
        foo: "old foo",
        setFoo(newFoo: string) {
            this.foo = newFoo
        },
        bar: "old bar",
        setBar(newBar: string) {
            this.bar = newBar
        }
    }))

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider
