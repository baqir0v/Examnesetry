import React, { useEffect, useState } from 'react'
import "./index.scss"
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [detail, setDetail] = useState([])
    const { id } = useParams()

    const fetchData = async () => {
        const resp = await fetch(`http://localhost:5000/api/food/${id}`)
        const jsonData = await resp.json()
        setDetail(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {detail ?
                <>
                    <ul>
                        <li>{detail.name}</li>
                        <li>{detail.ingredients}</li>
                        <li>{detail.price}</li>
                    </ul>
                </>
                :
                ""}
        </div>
    )
}

export default Detail