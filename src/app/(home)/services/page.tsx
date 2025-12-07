import {
  Icon1CircleFill,
  Icon2CircleFill,
  Icon3CircleFill,
  Icon4CircleFill,
  Icon5CircleFill,
  Icon6CircleFill
} from "react-bootstrap-icons";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const ICONS = [
  Icon1CircleFill,
  Icon2CircleFill,
  Icon3CircleFill,
  Icon4CircleFill,
  Icon5CircleFill,
  Icon6CircleFill
];

const TITLES = [
  "Tax management",
  "Investment management",
  "Retirement strategies",
  "Estate conservation",
  "Insurance and annuity products",
  "Real Estate Management"
];

export default function Page() {

  const items = ICONS.map((Icon, index) => {

    const title = TITLES.at(index) ?? "";

    return (
      <Col key={index} lg={4} md={6}>
        <Stack gap={3} className={"service-item bg-light justify-content-center align-items-center"}>
          <Icon size={48} className={"text-primary"}/>
          <h4 className={"text-center"}>{title}</h4>
          <Button>Learn more</Button>
        </Stack>
      </Col>
    );

  });

  return(
    <Container>

      <div className={"text-center my-3"}>
          <h2 className="fw-bold text-primary text-uppercase">Services</h2>
          <h4 className="mb-0">
            While developing a customized financial program, we will walk you through
            a step-by-step process that will help you feel confident in your decisions.
            Once your goals have been established, we will customize appropriate strategies
            to suit your vision and objectives. We can help you execute a sound financial program
            utilizing the following products and services through LPL Financial:
          </h4>
      </div>

      <Row className={"g-3"}>
        {items}
      </Row>

    </Container>
  );
}