'use client';

import React, {useState, useTransition} from "react";
import {Button, Form, Alert, Col, Spinner} from "react-bootstrap";
import Link from "next/link";
import Row from "react-bootstrap/Row";

const MAX_MESSAGE_LENGTH = 400;

const personalServices = [
  "Comprehensive Planning",
  "401 (k) Rollovers",
  "College Planning",
  "Estate Planning",
  "Minimize Estate Taxes",
  "Disability Insurance",
  "Health Insurance",
  "Life Insurance",
  "Long Term Care",
  "Retirement Planning",
  "Roth IRA",
  "Traditional IRA",
  "Real Estate Review",
  "Other"
];

const businessServices = [
  "Consulting",
  "Disability Insurance Plans",
  "Health Insurance Plans",
  "Key Employee/Partner Protection",
  "Life Insurance Plans",
  "Retirement Plans",
  "Sell, buy or start a business"
];

export function CustomerInquiryForm() {

  const [isPending, startTransition] = useTransition();

  const [status, setStatus] = useState<string | null>(null);
  const [messageLength, setMessageLength] = useState(0);
  const [selectedPersonalServices, setSelectedPersonalServices] = useState<string[]>([]);
  const [selectedBusinessServices, setSelectedBusinessServices] = useState<string[]>([]);

  const handlePersonalCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedPersonalServices((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  const handleBusinessCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedBusinessServices((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

  e.preventDefault();

  startTransition(async () => {

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("personalServices", selectedPersonalServices.join(", "));
    formData.append("businessServices", selectedBusinessServices.join(", "));

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("Message sent successfully.");
      form.reset();
      setSelectedPersonalServices([]);
      setSelectedBusinessServices([]);
      setMessageLength(0);
    } else {
      setStatus("Failed to send message. Please try again later.");
    }

  });
};

  if(status)
    return <Alert variant="info">{status} <Link href={"/"}>Back to home</Link></Alert>;

  return (
    <div className={"d-flex flex-column"}>

      <div className={"d-flex flex-column w-75 align-self-center"}>
      <h2 className="mb-4">Send a message:</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>

            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="fullName" required />

            <Form.Label className="mt-2">Email</Form.Label>
            <Form.Control type="email" name="contactEmail" required />

            <Form.Label className="mt-2">Phone (Optional)</Form.Label>
            <Form.Control type="tel" name="contactPhone" />

          </Form.Group>

          <Form.Group>
            <Row className={"mt-3"}>
              <Col lg={3} sm={4}>
                <strong className={"text-dark"}>Personal Focus Areas:</strong>
                {personalServices.map((service) => (
                  <Form.Check type="checkbox" key={service}>
                    <Form.Check.Input
                      type="checkbox"
                      value={service}
                      onChange={handlePersonalCheckbox}
                    />
                    <Form.Check.Label>{service}</Form.Check.Label>
                  </Form.Check>
                ))}
              </Col>

              <Col lg={3} sm={4}>
                <strong className={"text-dark"}>Business Focus Areas:</strong>
                {businessServices.map((service) => (
                  <Form.Check type="checkbox" key={service}>
                    <Form.Check.Input
                      type="checkbox"
                      value={service}
                      onChange={handleBusinessCheckbox}
                    />
                    <Form.Check.Label>{service}</Form.Check.Label>
                  </Form.Check>
                ))}
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Form.Label className="mt-2">Message (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={4}
              maxLength={MAX_MESSAGE_LENGTH}
              placeholder="Enter any additional details..."
              onChange={(e) => setMessageLength(e.target.value.length)}
              style={{resize: "none"}}
            />
            <small className="form-text text-muted">
              {MAX_MESSAGE_LENGTH - messageLength} characters remaining
            </small>
          </Form.Group>

          <Button type="submit" className="mt-3" disabled={isPending}>
            {isPending ?
              <Spinner animation={"border"} size={"sm"}/> :
              "Submit"
            }
          </Button>

        </Form>
      </div>
    </div>
  );
}
