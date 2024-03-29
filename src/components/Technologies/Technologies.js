import React from "react";
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri"
import { AiOutlineApi } from "react-icons/ai"
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  Btn3,
} from "../../styles/GlobalComponents";
import { CgChevronDoubleDownO } from "react-icons/cg";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import Link from "next/link";

const Technologies = () => (
  <Section id="tech">
    <Btn3>
      <Link href="#tech">
        <CgChevronDoubleDownO />
      </Link>
    </Btn3>
    <SectionDivider style={{ marginBottom: "3%" }} />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My main stack is Flutter, I love it. But I am also proficient in and work
      with HTML/CSS. As for the back-end I use Node.JS and Express.
      Additionally, I am competent in API and NoSQL database (MongoDB).
    </SectionText>
    <List>
      <ListItem>
        <RiFlutterFill
          style={{
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <span
              style={{
                fontWeight: "bolder",
                fontStyle: "italic",
              }}
            >
              Experience with
            </span>{" "}
            <br />
            <br />  Flutter <br /> React Native<br /> Android <br /> iOS <br /> HTML 5 <br /> JavaScript <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall
          style={{
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Experience with
            </span>{" "}
            <br /> <br /> Node.js <br /> Express <br /> API
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase
          style={{
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Experience with
            </span>{" "}
            <br /> <br /> MongoDB <br /> Firebase <br /> Postgres
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiOutlineApi
          style={{
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>APIs</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Experience with
            </span>{" "}
            <br /> Stripe <br /> Salt-Edge <br /> iBeacon <br /> AltBeacon <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
