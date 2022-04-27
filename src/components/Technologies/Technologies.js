import { DiHtml5, DiCss3, DiReact, DiRedis, DiMongodb } from "react-icons/di";
import { SiTypescript, SiJavascript } from "react-icons/si";

import { IoLogoNodejs } from "react-icons/io5";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      {/* html */}
      <ListItem>
        <picture>
          <DiHtml5 size="3rem" color="#e96128" />
        </picture>
        <ListContainer>
          <ListTitle>HTML</ListTitle>
          <ListParagraph>1.5 years</ListParagraph>
        </ListContainer>
      </ListItem>
      {/* css */}
      <ListItem>
        <picture>
          <DiCss3 size="3rem" color="#2965f1" />
        </picture>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
          <ListParagraph>1.5 years</ListParagraph>
        </ListContainer>
      </ListItem>
      {/* javascript */}
      <ListItem>
        <picture>
          <SiJavascript size="3rem" color="#edd718" />
        </picture>
        <ListContainer>
          <ListTitle>JS</ListTitle>
          <ListParagraph>1.5 years</ListParagraph>
        </ListContainer>
      </ListItem>
      {/* typescript */}
      <ListItem>
        <picture>
          <SiTypescript size="3rem" color="#2f74c0" />
        </picture>
        <ListContainer>
          <ListTitle>TS</ListTitle>
          <ListParagraph>3 months</ListParagraph>
        </ListContainer>
      </ListItem>
      {/* react js */}
      <ListItem>
        <picture>
          <DiReact size="3rem" color="#5ed3f3" />
        </picture>
        <ListContainer>
          <ListTitle>React JS</ListTitle>
          <ListParagraph>10 months</ListParagraph>
        </ListContainer>
      </ListItem>
      {/* node js */}
      <ListItem>
        <picture>
          <IoLogoNodejs size="3rem" color="#74ac5b" />
        </picture>
        <ListContainer>
          <ListTitle>Node JS</ListTitle>
          <ListParagraph>1 year</ListParagraph>
        </ListContainer>
      </ListItem>
      {/* redis */}
      <ListItem>
        <picture>
          <DiMongodb size="3.5rem" color="#4ca449" />
        </picture>
        <ListContainer>
          <ListTitle>Mongo Db</ListTitle>
          <ListParagraph>4 months</ListParagraph>
        </ListContainer>
      </ListItem>
      {/* express js */}
      <ListItem>
        <picture></picture>
        <ListContainer>
          <ListTitle>Express js </ListTitle>
          <ListParagraph>11 months</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
