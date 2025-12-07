'use client';

import Link from "next/link";

import {
  ArrowRight
} from "react-bootstrap-icons";

import {Col, Stack} from "react-bootstrap";
import SocialMediaButtons from "@/app/components/home/SocialMediaButtons";
import ContactInfo from "@/app/components/home/ContactInfo";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Footer() {

    return (
      <>
        <Container fluid className={"bg-dark text-light mt-5 fadeInUp"}>
          <Container>

            <Row className={"justify-content-center"}>

              {/** Get In Touch/Contact **/}
              <Col lg={3} md={4} sm={12} className={"mt-4 mt-lg-0 pt-lg-4 mb-2"}>

                <h4 className={"text-light mb-3"}>Contact</h4>

                <ContactInfo align={"vertical"}/>

                <div className={"mt-3"}>
                  <SocialMediaButtons
                    align={"horizontal"}
                    type={"btn-square"}
                    size={20}
                    variant={"primary"}
                  />
                </div>

              </Col>

              {/** Quick Links **/}
              <Col lg={3} md={4} sm={12} className={"mt-4 mt-lg-0 pt-lg-4 mb-2"}>

                <h4 className={"text-light mb-3"}>Quick Links</h4>

                <div className="link-animated d-flex flex-column justify-content-start">
                  <Stack direction={"vertical"} gap={2}>
                    <Link className={"text-light"} href="/"><ArrowRight className={"text-primary me-2"}/>Home</Link>
                    <Link className={"text-light"} href="/about"><ArrowRight className={"text-primary me-2"}/>About</Link>
                    <Link className={"text-light"} href="/services"><ArrowRight className={"text-primary me-2"}/>Services</Link>
                    <Link className={"text-light"} href="/resources"><ArrowRight className={"text-primary me-2"}/>Resources</Link>
                    <Link className={"text-light"} href="/contact"><ArrowRight className={"text-primary me-2"}/>Contact</Link>
                  </Stack>
                </div>
              </Col>


              {/** Compliance & Legal Disclaimers **/}
              <Col lg={3} md={4} sm={12} className={"mt-4 mt-lg-0 pt-lg-4 mb-2"}>

                <h4 className={"text-light mb-3"}>Compliance</h4>

                <div>
                  <p>
                    Securities offered through LPL Financial<br/>
                    Member SIPC
                    <Link className="text-blue border-bottom ms-2" target="_blank" href="https://www.sipc.org/">sipc.org</Link>
                  </p>
                  <br/>
                  <p>
                    The LPL Financial Registered Representative associated with this
                    site may only discuss and/or transact securities business with
                    residents of the following states: AZ, CA, FL, ID, NV, OH, OR, TX, WA
                  </p>
                </div>
              </Col>

            </Row>

          </Container>
        </Container>

        <Container fluid style={{background: "#061429"}}>

          <Container className={"d-flex align-items-center h-auto justify-content-center"} style={{minHeight: "50px"}}>
            <p className="my-3 text-white">
              Copyright © 2025 Ron Smithey Financial Services - All Rights Reserved
            </p>
          </Container>

        </Container>

      </>
    );
}