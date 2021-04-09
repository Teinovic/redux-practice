const createPolicy = (name, amount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    }
}

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    }
}

const createClaim = (name, moneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name, moneyToCollect
        }
    }
}