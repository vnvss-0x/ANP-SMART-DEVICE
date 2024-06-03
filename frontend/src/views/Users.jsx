import { Outlet } from "react-router-dom"
import PageComponent from "../components/PageComponent"

function Users() {
  return (
    <>
    <PageComponent title="Users">
        
    </PageComponent>
    <Outlet/>
    </>
  )
}

export default Users