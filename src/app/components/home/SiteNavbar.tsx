'use client'

import { useState } from 'react';
import {usePathname} from "next/navigation";

import Link from 'next/link';

import {NavItem, NavLink, Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, Stack} from "react-bootstrap";
import {List, X} from "react-bootstrap-icons";

import "./navbarlink.css";

const ROUTES = [
  {label: "Home", href: "/"},
  {label: "About", href: "/about"},
  {label: "Services", href: "/services"},
  {label: "Resources", href: "/resources"},
  {label: "Contact", href: "/contact"}
];

export default function SiteNavbar() {

  const [mobileToggleActive, setMobileToggleActive] = useState(false);

  const currentPath = usePathname();

  const navLinks = ROUTES.map((route, index) => {

    return (
      <NavItem key={index}>
        <NavLink
          as={Link}
          href={route.href}
          active={currentPath === route.href || (currentPath.startsWith(route.href) && route.href !== "/")}
          onClick={() => { if(mobileToggleActive) setMobileToggleActive(false); }}
        >
          {route.label}
        </NavLink>
      </NavItem>
    );

  });

  return (
    <Navbar expand={"lg"} expanded={mobileToggleActive} sticky={"top"} className={"px-5 py-1 bg-dark"}>

      <NavbarBrand as={Link} href={"/"}>
        <h1 className={"text-white"}>Ron Smithey<br/>Financial Services</h1>
      </NavbarBrand>

      <NavbarToggle onClick={() => setMobileToggleActive(!mobileToggleActive)}>
        {mobileToggleActive ? <X size={24} color={"white"}/> : <List size={24} color={"white"}/>}
      </NavbarToggle>

      <NavbarCollapse className={"justify-content-end"}>

        {/* Vertical Stack for mobile */}
        <Stack direction={"vertical"} className={"d-lg-none d-md-flex"}>
          {navLinks}
        </Stack>

        {/* Horizontal Stack for web */}
        <Stack direction={"horizontal"} gap={3} className={"d-lg-flex d-none"}>
          {navLinks}
        </Stack>

      </NavbarCollapse>

    </Navbar>
  );

};