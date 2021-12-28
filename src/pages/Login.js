import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import GamesContext from "../utils/GamesContext"

function Login() {
  const { login } = useContext(GamesContext)

  return (
    <div className="ms-5">
      <h1> LOGIN </h1>
      <Form className="mt-5" onSubmit={login}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="4">
            Email
          </Form.Label>
          <Col md="6">
            <Form.Control type="email" name="email" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="4">
            Password
          </Form.Label>
          <Col md="6">
            <Form.Control type="password" name="password" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-5">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit"> LOGIN </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Login
