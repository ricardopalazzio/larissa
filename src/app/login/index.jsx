import React, { PureComponent } from 'react';
import { Button, Form, Container, Row, Col } from 'reactstrap';

class Login extends PureComponent {
  render() {
    return (
      <Form>
        <Container>
          <Row>
            <Col md={12}>
              <Button
                color="success"
                outline
                type="submit"
                className="square"
                block
              >
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    )
  }
}
export default Login;