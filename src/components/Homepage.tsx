import { Button, Card, Col, Row } from 'react-bootstrap';

export default function App() {
  return (
    <main
      className="col-12 col-md-9 col-lg-7 p-3 px-4 pb-5 p-sm-5 mx-auto"
      style={{ flex: 1, backgroundColor: 'hsl(0, 0%, 25%)' }}
    >
      <h1 className="mb-4 mb-sm-5 mt-3 mt-sm-0 text-light text-center">
        Bem-vindo ao Genshin Planner!
      </h1>

      <Row>
        <Col xs="12" sm="6">
          <Card style={{ height: '100%' }}>
            <Card.Img variant="top" src="img/card-logo-01.jpg" />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Tarefas</Card.Title>
              <Card.Text>
                Veja aqui tudo o que você precisa fazer durante sua rotina no
                jogo. Incluindo tarefas diárias, semanais, de eventos... ou crie
                uma você mesmo.
              </Card.Text>
              <Button className="mt-auto mx-auto w-50" variant="primary">
                Tarefas
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" sm="6" className="mt-3 mt-sm-0">
          <Card style={{ height: '100%' }}>
            <Card.Img variant="top" src="img/card-logo-02.jpg" />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Artefatos</Card.Title>
              <Card.Text>
                Quer verificar como estão seus artefatos? Ou ver quais são os
                recomendados para algum personagem? Aqui é o lugar.
              </Card.Text>
              <Button className="mt-auto mx-auto w-50" variant="primary">
                Artefatos
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" sm="6" className="mt-3">
          <Card style={{ height: '100%' }}>
            <Card.Img variant="top" src="img/card-logo-03.jpg" />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Cálculos</Card.Title>
              <Card.Text>
                Descubra informações interessantes e úteis, como os preços para
                evoluir um personagem, quantas gemas os eventos te darão ao
                longo do mês, e as chances de conseguir um 5⭐.
              </Card.Text>
              <Button className="mt-auto mx-auto w-50" variant="primary">
                Cálculos
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" sm="6" className="mt-3">
          <Card style={{ height: '100%' }}>
            <Card.Img variant="top" src="img/card-logo-04.jpg" />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Calendário</Card.Title>
              <Card.Text>
                Prepare-se para futuros eventos e banners com um calendário para
                organizar suas tarefas e metas.
              </Card.Text>
              <Button className="mt-auto mx-auto w-50" variant="primary">
                Calendário
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </main>
  );
}
