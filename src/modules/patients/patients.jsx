import { useQuery } from '@tanstack/react-query'
import { getPatients } from '../../services/getPatients'
import { Link } from 'react-router-dom'
const PatientsPage = () => {

    const {
        data,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['patients'],
        queryFn: async () => {
            const data = await getPatients()
            return data
        },

    })

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }

    if (data) {

        return (

            <div>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">
                                ID
                            </th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Number</th>
                            <th className="px-4 py-2">Guarantor Name</th>
                            <th className="px-4 py-2">DOB</th>
                            <th className="px-4 py-2">Region</th>
                            <th className="px-4 py-2">Ward</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.data.map((patient) => {
                                return (
                                    <tr key={patient.Registration_ID}>
                                        <td className="border px-4 py-2">
                                            {patient.Registration_ID}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {patient.Patient_Name}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {patient.number}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {patient.Registration_Date}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {patient.Date_Of_Birth}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {patient.Region}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {patient.Ward}
                                        </td>
                                        <td className="border px-4 py-2">
                                            <Link to={`/patients/${patient.Registration_ID}`}>View</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }



}

export default PatientsPage