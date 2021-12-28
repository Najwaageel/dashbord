import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import GamesContext from "../utils/GamesContext"



function UserDeleteModal(props) {
  const { deleteUser } = useContext(GamesContext)
  const { show, setShow, userId } = props


  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> Delete User </Modal.Title>
      </Modal.Header>
      <Modal.Body> Are you sure to delete this user ? </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteUser(userId)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserDeleteModal
