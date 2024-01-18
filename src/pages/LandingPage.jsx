import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function LandingPage() {

  const navigateByUrl = useNavigate()


  return (
    <>
      <Row className='mt-5 align-items-center justify-content w-100'>
        <Col></Col>
        <Col lg={4}>
          <h3>Welcome To <span className='text-warning'>Media Player</span> </h3>
          <p style={{ textAlign: 'justify' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis dolores sed vel molestias tempore facere sequi, ex blanditiis ut fugit harum suscipit odio qui optio ad ullam atque fuga.</p>
          <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-info'>Get Started</button>
        </Col>
        <Col lg={6}>
          <img className='img-fluid' src="https://media1.tenor.com/images/33a46f727dbe790d436616a1f56fce9c/tenor.gif?itemid=7412752" alt="player" />
        </Col>
        <Col></Col>
      </Row>

      <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>
        <div className="cards  mt-5 mb-5 d-flex align-item-center justify-content-between w-100">
          <Card className='p-4' style={{ width: '18rem' }}>
            <Card.Img width={'300px'} height={'300px'} variant="top" src="https://scitechdaily.com/images/Music-Rhythm-Frequency-Waveform.gif" />
            <Card.Body>
              <Card.Title>Managing Vedios</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-4' style={{ width: '18rem' }}>
            <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media1.tenor.com/images/018d7b37b92de9de39a83b671b2e3564/tenor.gif?itemid=11755946" />
            <Card.Body>
              <Card.Title>Categorized Vedios</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='p-4' style={{ width: '18rem' }}>
            <Card.Img width={'300px'} height={'300px'} variant="top" src="https://cdn.dribbble.com/users/6190/screenshots/4263671/browserpreview_tmp-1.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>


        </div>
      </div>

      <div className="container b-5 mt-5 border-rounded p-5 border-info
     d-flex align-items-center justify-content-between w-100">
        <div className='col-lg-5'>
          <h3 className='mb-5 text-warning '>Simple,powerful & Fast</h3>
          <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam molestias enim officiis dolore sequi dolorem, blanditiis facilis sint rem voluptatem voluptate eveniet cum molestiae, voluptatum nesciunt at provident repudiandae.</h6>
          <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Categorized Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam molestias enim officiis dolore sequi dolorem, blanditiis facilis sint rem voluptatem voluptate eveniet cum molestiae, voluptatum nesciunt at provident repudiandae.</h6>
          <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam molestias enim officiis dolore sequi dolorem, blanditiis facilis sint rem voluptatem voluptate eveniet cum molestiae, voluptatum nesciunt at provident repudiandae.</h6>
        </div>
        <div className="video col-lg-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/srTZcfltD0s?si=HQBVNLsY8iidzkPm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

      </div>



    </>
  )
}

export default LandingPage