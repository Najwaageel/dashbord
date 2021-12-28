import { Button, Image, ListGroup, Modal } from "react-bootstrap"


function GameViewModal(props) {
  const { show, setShow, game } = props


  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> View Game </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>


          <ListGroup.Item>
            <strong> Name: </strong> {game.name}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong> Image: </strong>{" "}
            <img src={game.image} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>

          <ListGroup.Item>
            <strong> Price: </strong> {game.price}
          </ListGroup.Item>          


          
    
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GameViewModal
