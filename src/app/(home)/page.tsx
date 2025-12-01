import CarouselSlides from "@/app/components/home/CarouselSlides";
import QuickAccess from "@/app/components/home/QuickAccess";
import Testimonials from "@/app/components/home/Testimonials";
import Container from "react-bootstrap/Container";

export default function Home() {
    return (
        <>
          <CarouselSlides />

          <Container>
            <Testimonials/>
            <QuickAccess/>
          </Container>
        </>
    );
}
