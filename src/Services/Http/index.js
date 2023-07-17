import axios from "axios";

export const client = axios.create ({
    baseURL : "/"
})

export async function GetData (setLoading, endPoint) {
    let response = []
    try {
        setLoading(true)
        response = await client.get(`api/v1/${endPoint}`)
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err)
        setLoading(false)
        return (
            <div>
                <h2>{err.code}</h2>
                <p>{err.name}</p>
                <p>{err.message}</p>
            </div>
        )
    } finally {
        setLoading(false)
    }
}

export async function PostData (userdata, endpoint) {
    let response = []
    try {
        // response = await client.post(
        //     endpoint,
        //     userdata,
        //     {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     }
        // )
        // console.log(response)
        // return response.data
        console.log(userdata)
        response = await fetch(
            endpoint,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application.json"
                },
                body: JSON.stringify(userdata)
            }
        )

    } catch (err){
        console.log(err)
    } finally {
        console.log(response)
    }
}