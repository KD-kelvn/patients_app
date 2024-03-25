import axios from "axios";

export async function getPatientDetails(id) {
    try {
        const res = await axios({
            method: 'get',
            url: `http://41.188.172.204:30003/patients?Registration_ID=${id}`,
        })

        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}