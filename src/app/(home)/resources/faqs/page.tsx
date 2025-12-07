'use client';

import Accordion from 'react-bootstrap/Accordion';

import faqs from "../../../../../public/data/FAQS.json";


export default function Page(){

  const faqItems = faqs.map((item, index) => {

    return (
      <Accordion.Item key={index} eventKey={index.toString()}>
        <Accordion.Header>{item.question}</Accordion.Header>
        <Accordion.Body>{item.answer}</Accordion.Body>
      </Accordion.Item>
    );

  });

  return(
    <>
      <div className="pb-4 mt-5">
        <h1>Frequently Asked Questions</h1>
      </div>

      <Accordion flush>
        {faqItems}
      </Accordion>
    </>
  );

}