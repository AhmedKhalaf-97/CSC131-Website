'use client'
import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import {ArrowUp} from "react-bootstrap-icons";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button
      variant={"primary"}
      size={"lg"}
      onClick={scrollToTop}
      className="btn btn-lg-square rounded back-to-top"
      style={{
        display: isVisible ? 'inline' : 'none',
      }}
    >
      <ArrowUp size={20}/>
    </Button>
  );
}