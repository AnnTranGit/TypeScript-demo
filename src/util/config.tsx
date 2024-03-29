export const ACCESS_TOKEN = 'accessToken'
export const USER_LOGIN = ' userLogin'
export const ACCESS_TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjE1LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxODQwOTYwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE4NTU3MjAwfQ.vY7VplGBpsG599RYLEeMeajQNALOV5QUJ2dGV6Ow_q4'

export const { saveStorage, getStorage, saveStorageJson, getStorageJson } = {
    saveStorage: (storeName: string, data: string): void => {
        localStorage.setItem(storeName, data)
    },
    getStorage: (storeName: string): string | null => {
        if (localStorage.getItem(storeName)) {
            return localStorage.getItem(storeName)
        }
        return null
    },
    saveStorageJson: (storeName: string, data: any) => {
        const jsData = JSON.stringify(data)
        localStorage.setItem(storeName, jsData)
    },
    getStorageJson: (storeName: string): any => {
        if (localStorage.getItem(storeName)) {
            const data: null | string = localStorage.getItem(storeName)
            if (data != null && data != undefined) {
                return JSON.parse(data)
            }
            return null
        }
    }
}