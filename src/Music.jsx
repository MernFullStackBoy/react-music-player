import { useState, useRef } from "react"
import Card from "./Card"
import { data } from "./data/db"

const Music = () => {

    const [played, setPlayed] = useState(false)

    const [state, setState] = useState(0)
    const ref = useRef()

    function backward() {
        setState(prev => prev - 1)
        setPlayed(false)
        if (state <= 0) {
            setState(10)
        }
    }

    function play() {
        ref.current.play()
        setPlayed(true)
    }

    function pause() {
        ref.current.pause()
        setPlayed(false)
    }
    function forward() {
        setState(prev => prev + 1)
        setPlayed(false)
        if (state === 10) {
            setState(0)
        }

    }


    return (
        <div>
            <Card
                mpRef={ref}
                mp={data[state].mp}
                inc={forward}
                dec={backward}
                title={data[state].name}
                author={data[state].author}
                start={play}
                played={played}
                stop={pause}
            />
        </div>
    )
}

export default Music