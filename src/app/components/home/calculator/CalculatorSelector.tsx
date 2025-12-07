'use client';

import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import CalculatorField from "./calculatorField";
import calculatorData from "../data/calculatorData.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CalculatorSelector() {
  const calculators = [
    {
      id: "loanCredit",
      title: "Loan & Credit Cards",
      calcs: [
        "Loan Payoff",
        "Home Affordability",
        "Mortage Refinancing",
        "Mortage Acceleration",
        "Credit Card Debt",
        "Lease Payment",
        "Car Affordability",
      ],
      keys: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      id: "saveInvest",
      title: "Saving & Investing",
      calcs: [
        "College Funding",
        "Saving Goals",
        "Savings Accumulation",
        "Taxable Equivalent Yield",
      ],
      keys: [8, 9, 10, 11],
    },
    {
      id: "retireInflation",
      title: "Retirement & Inflation",
      calcs: [
        "Cost of Retirement",
        "Required Minimum Distributions",
        "Impact of Inflaction",
        "Retirement Plan Early Distribution",
        "Retirement Portfolio Lifespan"
      ],
      keys: [12, 13, 14, 15, 16],
    },
    {
      id: "taxesIRA",
      title: "Taxes & IRAS",
      calcs: [
        "Federal Income Tax",
        "Tax-Deferred Savings",
        "Roth IRA Conversion",
        "Estate Taxes",
      ],
      keys: [17, 18, 19, 20],
    },
  ];

  const [selectedAccordion, setSelectedAccordion] = useState("");
  const [selectedCalc, setSelectedCalc] = useState<number | null>(null);
  const selectedData = calculatorData.find((calc) => calc.id === selectedCalc);

  return (
      <Row>

        <Col md={4} className={"mb-4"}>

          <Accordion activeKey={selectedAccordion}>
            {calculators.map((category, idx) => (
              <Accordion.Item eventKey={idx.toString()} key={category.id}>
                <Accordion.Header onClick={() => selectedAccordion === idx.toString() ? setSelectedAccordion("") : setSelectedAccordion(idx.toString())}>{category.title}</Accordion.Header>
                <Accordion.Body>
                  {category.calcs.map((calc, index) => (
                    <Button
                      key={index}
                      variant="outline-dark"
                      className="d-block mb-2 w-100 text-start"
                      onClick={() => {setSelectedCalc(category.keys[index]); setSelectedAccordion("")}}
                    >
                      {calc}
                    </Button>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

        </Col>

        <Col md={8}>
          {selectedData ? (
            <Card>
              <Card.Body>
                <CalculatorField key={selectedCalc} data={selectedData} />
              </Card.Body>
            </Card>
          ): (
            <div className={"d-flex h-50 align-items-center justify-content-center"}>
              <h5>Select a calculator to try out</h5>
            </div>
          )}
        </Col>

      </Row>
  );
};