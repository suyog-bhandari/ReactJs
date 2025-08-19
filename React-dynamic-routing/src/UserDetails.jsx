import { Link, useParams } from "react-router-dom"

export default function UserDetail(){

    const paramsData = useParams();
   
    return(
        <>
            <h1>User Detail Page</h1>
            <h2>User id is:{paramsData.id}</h2>
        </>
    )
}