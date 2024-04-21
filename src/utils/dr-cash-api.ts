import { api } from "../lib/axios"

    // // Required params
    const token = 'NDVLM2E1ZDITMWQZYI00OGQ1LTG3MTATZJK2MJY1NDY5NWNL';
    const stream_code = 'gjnv3';

    // Fields to send
    const post_fields = {
        stream_code,
        client: {
            phone: '21314142',
            name: 'Gabriel'
        },
        
        sub1: 'fe',
        sub2: 'sf',
        'sub3': '',
        'sub4': '',
        'sub5': '',
    }


export const drCashApi = async () => {
   const response = await api.post('/', {
    post_fields,
    }, { 
        headers: {
            Authorization: 'Bearer ' + token,
            "Content-Type": 'application/json',
        }
    })

    return response.data
}