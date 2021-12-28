import { useContext } from "react"
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap"
import GamesContext from "../utils/GamesContext"

function GameAddModal(props) {
  const { show, setShow } = props
  const { addGame } = useContext(GamesContext)

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addGame}>
        <Modal.Header closeButton>
          <Modal.Title> Add Game </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Price
            </Form.Label>
            <Col md="8">
              <Form.Control type="numper" name="price" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Game
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default GameAddModal
