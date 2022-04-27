import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText
          style={{ color: "#fff", fontSize: "24px", lineHeight: "32px" }}
        >
          Hi there &#128075; , my name is Yashraj Jaiswal , and I am a Full
          Stack / MERN Developer
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
