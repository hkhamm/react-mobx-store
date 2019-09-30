import React, { FC } from "react"
import { useStore } from "./StoreProvider"
import { useObserver } from "mobx-react-lite"

const FooBar: FC = () => {
    const store = useStore()
    return useObserver(() => <p>{store.fooBar}</p>)
}

export default FooBar
