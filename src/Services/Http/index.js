import axios from "axios";

// export const client = axios.create ({
//     baseURL : "https://moviesapi.ir/"
// })

export async function GetData (setLoading, endPoint) {
    let response = []
    try {
        setLoading(true)
        response = await axios.get("api/v1/" + endPoint)
        // console.log(response.data)
    } catch (err) {
        console.log(err)
    } finally {
        setLoading(false)
        return response.data
    }
}

export async function PostData (userdata, endpoint) {
    let response = []
    try {
        response = await axios.post(
            endpoint,
            userdata,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    } catch (err){
        console.log(err)
    } finally {
        console.log(response.data)
    }
}