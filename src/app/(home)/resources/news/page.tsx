'use client';

import Articles from "@/app/components/home/Articles";
import {Ratio} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NewsPage() {
  return (
    <div>

        <Row>
          <Col xl={4} md={6} className={"d-flex justify-content-center my-2"}>
            <Ratio aspectRatio={"4x3"} style={{maxWidth: "480px", maxHeight: "360px"}}>
              <iframe
                id="ytplayer"
                width="480"
                height="360"
                src="https://www.youtube.com/embed/WupGM15C3Qo"
                allowFullScreen/>
            </Ratio>
          </Col>
          <Col xl={4} md={6} className={"d-flex justify-content-center my-2"}>
            <Ratio aspectRatio={"4x3"} style={{maxWidth: "480px", maxHeight: "360px"}}>
              <iframe
                id="ytplayer"
                width="480"
                height="360"
                src="https://www.youtube.com/embed/AosajbqARUk"
                allowFullScreen/>
            </Ratio>
          </Col>
          <Col xl={4} md={6} className={"d-flex justify-content-center my-2"}>
            <Ratio aspectRatio={"4x3"} style={{maxWidth: "480px", maxHeight: "360px"}}>
              <iframe
                id="ytplayer"
                width="480"
                height="360"
                src="https://www.youtube.com/embed/mScpHTIi-kM"
                allowFullScreen/>
            </Ratio>
          </Col>
        </Row>

        <Articles/>
    </div>
);
}