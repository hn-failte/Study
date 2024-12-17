import { useOptimistic, useTransition } from "react";
import { fetchUseOptimistic } from "../utils/request";

const DemoUseOptimistic = ({ originVal, setOriginVal }: { originVal: string; setOriginVal: (val: string) => void }) => {
    const [updating, startUpdate] = useTransition()
    const [optimisticStr, setOptimisticStr] = useOptimistic(originVal)

    const updateMock = () => {
        startUpdate(async () => {
            setOptimisticStr('useOptimistic')
            const useOptimistic = await fetchUseOptimistic()
            setOriginVal(useOptimistic)
        })
    }

    return <div>
        <div>originVal: {originVal}</div>
        <div>optimisticStr: {optimisticStr}</div>
        {updating && <>updating</>}
        <button onClick={updateMock} disabled={originVal !== optimisticStr}>updatemock</button>
    </div>
}

export default DemoUseOptimistic
