import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import GamesContext from "../utils/GamesContext"
import GameAddModal from "../components/GameAddModal"
import GameRow from "../components/GameRow"


function Games() {
const { games } = useContext(GamesContext)
const [show, setShow] = useState(false)

  return (  
    <>
    <h1> Games </h1>
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary" >
        Add Games
      </Button>
    </div>
    <Table>
      <thead>
        <tr>
          <th style={{ width: "20%" }}> ID </th>
          <th style={{ width: "20%" }}> Name </th>
          <th style={{ width: "15%" }}> Image </th>
          <th style={{ width: "15%" }}> Price </th>
          <th style={{ width: "35%" }}> Actions </th>
        </tr>
      </thead>
      <tbody>
        {games.map(game => (
          <GameRow key={game._id} game={game} />
        ))}
      </tbody>
    </Table>
    <GameAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Games




