import { useActionState, useState } from 'react'
import { sleep } from '../utils/common'

const DemoUseActionState = () => {
    const [val, setVal] = useState('')
    const [error, submitAction, isPending] = useActionState(
        async (preState: any, state: any) => {
            console.log('preState, state', preState, state)
            await sleep(1000)
            if (Math.random() > 0.5) {
                return 'random error';
            }
            return null;
        },
        null,
    );

    return <form action={submitAction}>
        <input type="text" name="name" />
        <button type="submit" disabled={isPending}>Update</button>
        {error && <p>{error}</p>}
    </form>
}

export default DemoUseActionState
