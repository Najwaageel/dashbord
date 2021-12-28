import { useContext } from "react"
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap"
import GamesContext from "../utils/GamesContext"


function GameEditModal(props) {
  const { show, setShow, game } = props
  const { editGame } = useContext(GamesContext)


  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editGame(e, game._id)}>
        <Modal.Header closeButton>
          <Modal.Title> Edit Game </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name" defaultValue={game.name} required />
            </Col>
          </Form.Group>

    
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" defaultValue={game.image} required />
            </Col>
          </Form.Group>

          
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Price
            </Form.Label>
            <Col md="8">
              <Form.Control type="numper" name="price" defaultValue={game.price} required />
            </Col>
          </Form.Group>
          
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit Game
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default GameEditModal
