export const getUser = (email: string) => {
    const envEmail = process.env.ADMIN_EMAIL
    if (email === envEmail) {
        return true
    }
    return false
}


export const adminUser = (email: string, password: string) => {
    const envEmail = process.env.ADMIN_EMAIL
    const envPassword = process.env.ADMIN_PASSWORD
    if((email === envEmail) && envPassword === password) {
        return true;
    }
    return false

}