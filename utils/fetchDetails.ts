export const fetcher = async (endpoint: string) => {
    try {
        const data = await fetch(`${process.env.URL}/api/${endpoint}`)
        const resp = await data.json()
        return resp
    } catch (error) {
        console.log(error)
    }
}