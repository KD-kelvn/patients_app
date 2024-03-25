import axios from "axios";

export async function getPatients() {
    try {
        const res = await axios({
            method: 'get',
            url: 'http://41.188.172.204:30003/patients',
        })

        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }



}