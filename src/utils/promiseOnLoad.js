let validation = true;

export const promiseOnLoad = (procedure) => {
    return new Promise((resolve, reject) => {
        if (validation) {
            setTimeout(() => {
                resolve(procedure)
            }, 2000)
        } else {
            reject('Timed out waiting for products to load.')
        }
    })
}
