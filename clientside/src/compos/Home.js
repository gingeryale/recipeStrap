import React, { Component } from 'react';
import {  Carousel,  CarouselItem,  CarouselControl,  CarouselIndicators,  CarouselCaption, Container, Row, Col } from 'reactstrap';


const items = [
  {
    src: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/4/5/2/FNM_050112-Ree-Breakfast-004_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1371606623131.jpeg',
    altText: 'Food You Can Use',
    caption: 'Food You Can Use'
  },
  {
    src: 'http://www.annezouroudi.com/wp-content/uploads/spanokopita-4.jpg',
    altText: 'Ingerdients You Can Taste',
    caption: 'Ingerdients You Can Taste'
  },
  {
    src: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/9/23/1/FNM_110114-Pumpkin-Cranberry-Cheesecake-Recipe_s4x3.jpg.rend.hgtvcom.966.725.jpeg',
    altText: 'Desserts You Can Dish',
    caption: 'Desserts You Can Dish'
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }



  render() {

    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className="carouselImg"
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption className="text-warning" captionText={item.caption} />
        </CarouselItem>
        
      );
    });

    return (
      <div>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className="homepageCarousel"
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}  />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      <br />
       <Container>
       <Row>
         <Col>
         <h1>RecipeStrap</h1>
         <p>Home to ReactStrap and pictures of food off the web</p>
         </Col>
       </Row>
       </Container></div>
    );
   
  }
}

export default Home;
