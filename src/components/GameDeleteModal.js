import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import GamesContext from "../utils/GamesContext"


function GameDeleteModal(props) {
  const { deleteGame } = useContext(GamesContext)
  const { show, setShow, gameId } = props

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> Delete Game </Modal.Title>
      </Modal.Header>
      <Modal.Body> Are you sure to delete this Game ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteGame(gameId)}>
          Delete Game
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GameDeleteModal
