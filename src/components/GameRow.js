import { useState } from "react"
import { Button } from "react-bootstrap"
import GameDeleteModal from "./GameDeleteModal"
import GameEditModal from "./GameEditModal"
import GameViewModal from "./GameViewModal"

function GameRow(props) {
  const { game } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{game._id}</td>
      <td>{game.name}</td>
      <td>
        <img src={game.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{game.price}</td>
      

      <td>
        <Button variant="outline-info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="outline-success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="outline-danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>

      <GameViewModal show={viewShow} setShow={setViewShow} game={game} />
      <GameDeleteModal show={deleteShow} setShow={setDeleteShow} gameId={game._id} />
      <GameEditModal show={editShow} setShow={setEditShow} game={game} />
    </tr>
  )
}

export default GameRow
