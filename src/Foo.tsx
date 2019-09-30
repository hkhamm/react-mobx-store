import React, { FC } from "react"
import { useStore } from "./StoreProvider"
import { useObserver } from "mobx-react-lite"
import { Button } from "@material-ui/core"

const Foo: FC = () => {
    const store = useStore()

    const changeFoo = () => store.setFoo("new foo")

    return useObserver(() => (
        <>
            <p>{store.foo}</p>
            <Button variant="contained" onClick={changeFoo}>
                Change Foo
            </Button>
        </>
    ))
}

export default Foo
