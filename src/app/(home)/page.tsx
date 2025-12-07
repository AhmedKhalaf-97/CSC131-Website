import CarouselSlides from "@/app/components/home/CarouselSlides";
import QuickAccess from "@/app/components/home/QuickAccess";
import Container from "react-bootstrap/Container";
import NewTestimonials from "@/app/components/home/NewTestimonials";

export default function Home() {
    return (
        <>
          <CarouselSlides />

          <Container fluid className={"px-1 px-md-4"}>

            <div className={"d-none d-xl-block py-5"}>
              <NewTestimonials cardsPerSlide={3}/>
            </div>
            <div className={"d-none d-xl-none d-md-block py-5"}>
              <NewTestimonials cardsPerSlide={2}/>
            </div>
            <div className={"d-md-none d-sm-block py-5"}>
              <NewTestimonials cardsPerSlide={1}/>
            </div>

            <QuickAccess/>
          </Container>
        </>
    );
}
