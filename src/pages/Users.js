import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import GamesContext from "../utils/GamesContext"
import UserRow from "../components/UserRow"
import AdminAddModal from "../components/AdminAddModal"


function Users() {
  const { users } = useContext(GamesContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1> Users </h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          Add Admin
        </Button>
      </div>

      <Table>
        <thead>
          <tr>
            <th style={{ width: "14%" }}> ID </th>
            <th style={{ width: "14%" }}> First Name </th>
            <th style={{ width: "14%" }}> Last Name </th>
            <th style={{ width: "15%" }}> Email </th>
            <th style={{ width: "10%" }}> Role </th>
            <th style={{ width: "15%" }}> Avatar </th>
            <th style={{ width: "35%" }}> Actions </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
      <AdminAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Users
