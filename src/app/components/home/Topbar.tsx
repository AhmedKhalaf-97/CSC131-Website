'use client';

import { Col, Container, Row } from "react-bootstrap";
import SocialMediaButtons from "@/app/components/home/SocialMediaButtons";
import ContactInfo from "@/app/components/home/ContactInfo";

export default function Topbar() {

  return (
    <Container fluid className={"bg-dark text-light px-3 px-md-5 py-3 d-none d-lg-block"}>
      <Row className={"d-flex justify-content-between align-items-center text-center text-lg-start"}>

        <Col lg={9}>
          <ContactInfo align={"horizontal"}/>
        </Col>

        <Col lg={3} className={"d-flex justify-content-center justify-content-lg-end mt-2 mt-lg-0"}>

          <SocialMediaButtons
            align={"horizontal"}
            type={"rounded-circle"}
            size={14}
            variant={"outline-light"}
          />

        </Col>

      </Row>
    </Container>
  );
}
