import React, { FC } from "react"
import { makeStyles } from "@material-ui/core"
import Foo from "./Foo"
import Bar from "./Bar"

const useStyles = makeStyles({
    app: {
        textAlign: "center"
    },
    appHeader: {
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white"
    }
})

const App: FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.app}>
            <header className={classes.appHeader}>
                <Foo />
                <Bar />
            </header>
        </div>
    )
}

export default App
