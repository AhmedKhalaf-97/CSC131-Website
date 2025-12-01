
import {
  TwitterX,
  Facebook,
  Linkedin,
  Youtube,
  Icon
} from "react-bootstrap-icons";

import links from "../../../../public/data/SocialMediaLinks.json";

import { Button, Stack } from "react-bootstrap";

const ICONS: Icon[] = [
  TwitterX,
  Facebook,
  Linkedin,
  Youtube
];

export default function SocialMediaButtons(
  {
    align,
    type,
    size,
    variant
  }: {
    align: "horizontal" | "vertical",
    type: "btn-square" | "rounded-circle",
    size: number,
    variant: "primary" | "outline-light"
  }
) {

  const renderedLinks = Object.entries(links).map(
    (value, index) => {

      const Icon = ICONS[index];

      return (
        <Button
          key={index}
          href={value[1]}
          target={"_blank"}
          variant={variant}
          size={"sm"}
          className={`${type} ${type === "btn-square" ? "d-flex" : ""} justify-content-center align-items-center`}>
            <Icon size={size}/>
        </Button>
      )
    }
  );

  return <Stack gap={2} direction={align}>{renderedLinks}</Stack>
}