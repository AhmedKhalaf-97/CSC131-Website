'use client';

import testimonials from "../../../../public/data/Testimonials.json";
import {Card, Carousel, CarouselItem} from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

export default function NewTestimonials(
  {
    cardsPerSlide
  } : {
    cardsPerSlide?: number
  }
) {

  const CPS = cardsPerSlide ?? 1;

  const testimonialCards = testimonials.map(
    (testimonial, index) => {
      return (
          <TestimonialCard
            key={index}
            name={testimonial.clientName}
            age={testimonial.age}
            statement={testimonial.statement}
            width={`${(100 / CPS).toPrecision(2)}%`}
          />
      );
    }
  );

  const carouselItems = Array.from({ length: Math.ceil( testimonialCards.length / CPS ) }).map(
    (_, index) => {
      return (
        <CarouselItem key={index}>
          <div className={"d-flex justify-content-center"} style={{ height: "25rem"}}>
            <Stack direction={"horizontal"} gap={3} style={{ width: "80%"}}>
              {testimonialCards.slice(index * CPS, (index * CPS) + CPS)}
            </Stack>
          </div>
        </CarouselItem>
      );
    }
  );

  return (
    <Carousel
      data-bs-theme={"dark"}
      interval={5000}
      className={"w-100"}
      touch
      slide
    >
      {carouselItems}
    </Carousel>
  );
}

function TestimonialCard(
  {
    name,
    age,
    statement,
    width
  } : {
    name: string,
    age: number,
    statement: string,
    width: string
  }
) {

  return (
    <Card
      bg={"light"}
      data-bs-theme={"light"}
      style={{ height: "22rem", width: width}}
      className={"align-self-start p-3 border-0 shadow rounded-3"}
    >
      <Card.Title><h4>{name}</h4></Card.Title>
      <Card.Subtitle>Age {age}</Card.Subtitle>
      <Card.Body
        style={{ scrollbarWidth: "thin", scrollbarColor: "grey transparent" }}
        className={"overflow-y-auto"}
      >
        {statement}
      </Card.Body>
    </Card>
  );

}