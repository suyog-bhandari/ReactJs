import { Link } from "react-router-dom"

export default function UserList(){
    const userData =[
        {
            id:'1', name:'random'
        },

        {
            id:'2', name:'sam'
        },

        {
            id:'3', name:'sidhu'
        },

        {
            id:'4', name:'tony'
        },
    ]
    return(
        <>
            <h1>User List Page</h1>
            {
                userData.map((item)=>(
                    <div>
                        <h4><Link to={"/users/"+item.id}>{item.name}</Link></h4>
                    </div>
                ))
            }
        </>
    )
}