export const Insert = data => {
    return {
        type: 'INSERT',
        payload: data
    }
}
export const Update = data => {
    return {
        type: 'UPDATE',
        payload: data
    }
}
export const Delete = index => {
    return {
        type: 'DELETE',
        payload: index
    }
}
export const UpdateIndex = index => {
    return {
        type: 'UPDATE_INDEX',
        payload: index
    }
}