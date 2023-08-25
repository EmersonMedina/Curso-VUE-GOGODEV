import { ref, Ref} from 'vue'
import IMsalConfig from '@/interfaces/IMsalConfig'

class AzureService {
    private msalConfig: Ref<IMsalConfig>
    private accessToken: Ref<string>

    constructor() {
        this.msalConfig = ref({
            auth: {
                clientId: '4a6705e6-402e-4509-be2a-39ab31db9b9e', 
                authority: 'https:login.microsoftonline.com/33a93990-8bb4-4b9d-b422-4f8851217d7e'
            }, 
            cache: {
                cacheLocation: 'localStorage'
            }, 
        })

        this.accessToken = ref('')
    }

    setAccessToken(token:string): Ref<string> {
        this.accessToken.value = token; 
        return this.accessToken
    }

    getAccessToken(): Ref<string> {
        return this.accessToken
    }

    getMsalConfig(): Ref<IMsalConfig> {
        return this.msalConfig
    }

}

export default AzureService