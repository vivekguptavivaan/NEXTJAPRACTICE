import React from 'react'
import { useRouter } from 'next/router'

function index() {
    const routes = useRouter()
    const PageNumber = routes.query.pageNo
    return (
        <div>
            {
                PageNumber
            }
        </div>
    )
}

export default index