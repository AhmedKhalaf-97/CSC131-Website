
import {
  GeoAlt,
  EnvelopeOpen,
  Telephone,
} from "react-bootstrap-icons";

import Stack from "react-bootstrap/Stack";

import contactInfo from  "../../../../public/data/ContactInfo.json";

const ICONS = [
  GeoAlt,
  EnvelopeOpen,
  Telephone,
];

export default function ContactInfo(
  {
    align
  }: {
    align: "horizontal" | "vertical"
  }
) {

  const joinedStr: string | undefined = align === "horizontal" ? contactInfo.addressLines.join(", ") : undefined;

  const AddressIcon = ICONS[0];
  const EmailIcon = ICONS[1];
  const PhoneIcon = ICONS[2];

  return (
    <Stack direction={align} gap={3}>

      <Stack direction={"horizontal"} gap={2}>
        <AddressIcon size={18}/>
        {joinedStr ?
          <>
            <span className={"d-none d-xl-block"}>{joinedStr}</span>
            <span style={{fontSize: "0.8rem"}} className={"d-none d-lg-block d-xl-none"}>{joinedStr}</span>
          </> :
          <span>{contactInfo.addressLines.map((line, index) => <span key={index}>{line}<br/></span>)}</span>
        }
      </Stack>

      <Stack direction={"horizontal"} gap={2}>
        <EmailIcon size={18}/>
        {align === "horizontal" ?
          <>
            <a href={`mailto:${contactInfo.email}`} className={"d-lg-none d-xl-block text-light"}>{contactInfo.email}</a>
            <a href={`mailto:${contactInfo.email}`} style={{fontSize: "0.8rem"}} className={"d-none d-lg-block d-xl-none text-light"}>{contactInfo.email}</a>
          </> :
          <a href={`mailto:${contactInfo.email}`} className={"text-light"}>{contactInfo.email}</a>
        }
      </Stack>

      <Stack direction={"horizontal"} gap={2}>
        <PhoneIcon size={18}/>
        {align === "horizontal" ?
          <>
            <a href={`tel:${contactInfo.tel}`} className={"d-lg-none d-xl-block text-light"}>{contactInfo.phone}</a>
            <a href={`tel:${contactInfo.tel}`} style={{fontSize: "0.8rem"}} className={"d-none d-lg-block d-xl-none text-light"}>{contactInfo.phone}</a>
          </> :
          <a href={`tel:${contactInfo.tel}`} className={"text-light"}>{contactInfo.phone}</a>
        }
      </Stack>

    </Stack>
  );
}