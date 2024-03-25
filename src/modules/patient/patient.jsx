import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import { getPatientDetails } from "../../services/getPatientDetails";
const PatientShow = () => {
    const { id } = useParams();
    const { data, error, isLoading, isError } = useQuery({
        queryKey: ['patient', id],
        queryFn: async () => {
            const data = await getPatientDetails(id)
            return data
        },
    })
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }
    if (data.data && data.data.length >= 0) {
        return (
            <div>
                <h1>{data.data[0].Patient_Name}</h1>
                <p>Registration ID: {data.data[0].Registration_ID}</p>
                <p>Guarantor Name: {data.data[0].Registration_Date}</p>
                <p>DOB: {data.data[0].Date_Of_Birth}</p>
                <p>Region: {data.data[0].Region}</p>
                <p>Ward: {data.data[0].Ward}</p>
            </div>
        )

    }
}

export default PatientShow