export const sleep = (timeout = 0) => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve()
        }, timeout);
    })
}
