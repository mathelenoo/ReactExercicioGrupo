import { useState } from 'react';
import { Container, Dropdown, Row, Col, ListGroup } from 'react-bootstrap';
import './style.css';

const Carros = () => {
  const carros = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla' },
    { id: 2, marca: 'Honda', modelo: 'Civic' },
    { id: 3, marca: 'Ford', modelo: 'Mustang' },
    { id: 4, marca: 'Chevrolet', modelo: 'Camaro' },
    { id: 5, marca: 'Nissan', modelo: 'Altima' },
    { id: 6, marca: 'Volkswagen', modelo: 'Golf' },
    { id: 7, marca: 'BMW', modelo: 'M3' },
    { id: 8, marca: 'Mercedes-Benz', modelo: 'C-Class' },
  ];

  const marcas = [...new Set(carros.map(carro => carro.marca))];
  const [marcaEscolhida, setMarcaEscolhida] = useState('');

  const handleBusca = (marca) => {
    setMarcaEscolhida(marca);
  };

  const carrosFiltrados = carros.filter((carro) => carro.marca === marcaEscolhida);

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Dropdown onSelect={handleBusca}>
            <Dropdown.Toggle variant="custom" id="dropdown-basic" className="btn-custom">
              {marcaEscolhida || 'Selecione a marca'}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              {marcas.map((marca, index) => (
                <Dropdown.Item key={index} eventKey={marca} className="dropdown-item">
                  {marca}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {carrosFiltrados.map((carro) => (
              <ListGroup.Item key={carro.id} className="list-group-item">
                {carro.marca} - {carro.modelo}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Carros;
