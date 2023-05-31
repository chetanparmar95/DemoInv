export const USERNAME_CHANGE = 'USERNAME_CHANGE';

export function changeName(name: string) {
    return {
        type: USERNAME_CHANGE,
        payload: name
    }
}
