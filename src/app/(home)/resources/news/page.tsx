
import Articles from "@/app/components/home/Articles";
import {Ratio} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VideoEmbedYoutube from "@/app/components/home/VideoEmbedYoutube";

export default function NewsPage() {
  return (
    <div>

        <Row>
          <Col xl={4} md={6} className={"d-flex justify-content-center my-2"}>
            <Ratio aspectRatio={"4x3"} style={{maxWidth: "480px", maxHeight: "360px"}}>
              <VideoEmbedYoutube src={"https://www.youtube.com/embed/WupGM15C3Qo"}/>
            </Ratio>
          </Col>
          <Col xl={4} md={6} className={"d-flex justify-content-center my-2"}>
            <Ratio aspectRatio={"4x3"} style={{maxWidth: "480px", maxHeight: "360px"}}>
              <VideoEmbedYoutube src={"https://www.youtube.com/embed/AosajbqARUk"}/>
            </Ratio>
          </Col>
        </Row>

        <Articles/>
    </div>
);
}