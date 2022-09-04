import axios from "axios";

export const sendEmail =  async (data) => {
    try{
        const res  = await axios.post('https://vercel.com/pradhumanshekhawat3/mailing-api', data);
        return res.data;
    }catch(err){
        if (err.response) {
            // The client was given an error response (5xx, 4xx)
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            // The client never received a response, and the request was never left
            console.log(err.request);
        } else {
            // Anything else
            console.log('Error', err.message);
        }
    }
}