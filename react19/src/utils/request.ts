export const fetchUse = () => {
    console.log('fetchUse')
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
        if (Math.random() > 0.5) reject('error occured')
        else resolve('use Promise')
        }, 1000)
    })
}

export const fetchUseTransition = () => {
    console.log('fetchUseTransition')
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('useTransition')
        }, 1000)
    })
}

export const fetchUseOptimistic = () => {
    console.log('fetchUseOptimistic')
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('useOptimistic')
        }, 1000)
    })
}
