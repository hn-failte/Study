import { use } from "react"
import GlobalContext from '../contexts/GlobalContext'

const DemoUse = ({ fetch }: { fetch: Promise<string> }) => {
    const global = use(GlobalContext)
    // use Promise 在 Promise pending 过程中将会触发 Suspense 的 fallback
    const str = use(fetch)

    return <div>
        <header>{global.title}</header>
        <main>{str}</main>
    </div>
}

export default DemoUse
