let validation = true;

export const promiseOnLoad = (procedure) => {
    return new Promise((resolve, reject) => {
        if (validation) {
            setTimeout(() => {
                resolve(procedure)
            }, 500)
        } else {
            reject('Timeout.')
        }
    })
}

//EXPORTED TO: ../components/ItemList.js