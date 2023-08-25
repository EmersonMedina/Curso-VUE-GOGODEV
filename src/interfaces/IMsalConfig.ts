import IAuth from '@/interfaces/IAuth'

interface IMsalConfig {
    auth: IAuth,
    cache:  {
        cacheLocation: string
    }
}
export default IMsalConfig