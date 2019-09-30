import React, { FC } from "react"
import { useStore } from "./StoreProvider"
import { useObserver } from "mobx-react-lite"
import { Button } from "@material-ui/core"

const Bar: FC = () => {
    const store = useStore()

    const changeBar = () => store.setBar("new bar")

    return useObserver(() => (
        <>
            <p>{store.bar}</p>
            <Button variant="contained" onClick={changeBar}>
                Change Bar
            </Button>
        </>
    ))
}

export default Bar
