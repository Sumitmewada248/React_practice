import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import t4 from '../images/do.jpg'
import t2 from '../images/wo.jpg'
import t3 from '../images/t1.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import my from '../images/l.webp';
import my2 from '../images/m.webp';


const Home = () => {
  return (
    <>
      <Carousel>
      <Carousel.Item>
        <img src={t4} />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={t2}/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={t3} />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    
    <div id='product'>
         <Card style={{ width: '30%' }}>
      < img src={my}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Lenovo IdeaPad 3 12th Gen Intel Core i3-1215U 14 Inch (35.5cm) FHD Thin & Light Laptop (8GB/512GB SSD/Win 11/Office 2021/1 Year Warranty/3months Game Pass/Arctic Grey/1.43Kg), 82RJ00FUIN
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '30%' }}>
      < img src={my2}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Silverblue, 12GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '30%' }}>
      < img src={my}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Lenovo IdeaPad 3 12th Gen Intel Core i3-1215U 14 Inch (35.5cm) FHD Thin & Light Laptop (8GB/512GB SSD/Win 11/Office 2021/1 Year Warranty/3months Game Pass/Arctic Grey/1.43Kg), 82RJ00FUIN
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '30%' }}>
      < img src={my2}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Silverblue, 12GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>



    <Card style={{ width: '30%' }}>
      < img src={my}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Lenovo IdeaPad 3 12th Gen Intel Core i3-1215U 14 Inch (35.5cm) FHD Thin & Light Laptop (8GB/512GB SSD/Win 11/Office 2021/1 Year Warranty/3months Game Pass/Arctic Grey/1.43Kg), 82RJ00FUIN
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '30%' }}>
      < img src={my2}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Silverblue, 12GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '30%' }}>
      < img src={my}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Lenovo IdeaPad 3 12th Gen Intel Core i3-1215U 14 Inch (35.5cm) FHD Thin & Light Laptop (8GB/512GB SSD/Win 11/Office 2021/1 Year Warranty/3months Game Pass/Arctic Grey/1.43Kg), 82RJ00FUIN
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

</div>

    </>
  );
}
export default Home;