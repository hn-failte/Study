import { useEffect, useState, useTransition } from "react"
import { fetchUseTransition } from "../utils/request"

export default () => {
    const [str, setStr] = useState('')
    const [loading, startLoading] = useTransition()

    const fetch = () => {
        console.log('startLoading')
        startLoading(() => {
            fetchUseTransition()
                .then((_str) => {
                    console.log('str', _str)
                    setStr(_str)
                })
        })
    }

    useEffect(() => {
        console.log('fetch')
        fetch()
    }, [])

    return <div>
        {loading ? <>Loading...</> : <>{str}</>}
    </div>
}
