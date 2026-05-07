import CardView from './components/CardView/CardView';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from './data/books.json';


function App() {
  return (
    <>
      <h1>
        Example main header
      </h1>
      
      <Row xs={1} md={4} className="g-4">
        {data.map((_, idx) => (
          <Col key={idx}>
            <CardView title={data[idx].Title} price={data[idx].Price} imgSrc={data[idx].Image} subtitle={data[idx].Author} />
          </Col>
        ))}
      </Row>
      <h1>
        footer
      </h1>
    </>
  )
}

export default App
