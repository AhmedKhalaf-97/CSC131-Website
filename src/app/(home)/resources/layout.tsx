'use client';

import React from "react";
import Container from "react-bootstrap/Container";
import {usePathname} from "next/navigation";
import {Breadcrumb, BreadcrumbItem} from "react-bootstrap";
import Link from "next/link";

interface ReadableRoutes {
  [index: string]: string
}

const READABLE_ROUTE_NAMES: ReadableRoutes = {
  "resources": "Resources",
  "calculators": "Financial Calculators",
  "faqs": "FAQs",
  "guidestutorials": "Guides & Tutorials",
  "news": "News",
}

export default function ResourcesLayout(
  { children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <Container>

      <BreadcrumbNav/>

      {children}

    </Container>
  );
}

function BreadcrumbNav() {

  const pathname = usePathname();

  const crumbs = pathname.split("/");

  crumbs.shift();

  let accumulatedPath = "/";

  const items = crumbs.map((crumb, index) => {

    const routeLabel = READABLE_ROUTE_NAMES[crumb] ?? crumb.toUpperCase();

    if(index === crumbs.length - 1) return (
      <BreadcrumbItem key={index} active>
        {routeLabel}
      </BreadcrumbItem>
    );

    accumulatedPath = `${accumulatedPath}${crumb}/`;

    return (
      <BreadcrumbItem key={index} linkAs={Link} href={accumulatedPath}>
        {routeLabel}
      </BreadcrumbItem>
    );

  });

  return (
    <Breadcrumb className={"my-3"}>
      {items}
    </Breadcrumb>
  );

}