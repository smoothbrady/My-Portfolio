import React from "react";
import { Container, Header, Icon, IconGroup, Popup } from "semantic-ui-react";
import ReactTypingEffect from "react-typing-effect";

const PortfolioHeader = () => {
  return (
    <div>
      <Container fluid textAlign="center" className="header">
        <Header
          as="h1"
          content="Braeden Obholz"
          style={{ fontSize: "4em", marginTop: "1em" }}
        >
          Braeden Obholz
          <Header.Subheader>
            <ReactTypingEffect
              text={[
                "Full Stack Developer",
                "Back-End Developer",
                "Front-End Developer",
              ]}
              style={{ fontSize: "1.7em", margin: "1em" }}
            ></ReactTypingEffect>
          </Header.Subheader>
          <Header.Subheader>
            <IconGroup
              size="big"
              style={{ marginBottom: ".5em", marginTop: ".5em" }}
            >
              <a
                href="https://github.com/smoothbrady"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <Popup
                  content="GitHub"
                  trigger={
                    <Icon className="devicon-github-original" color="purple" />
                  }
                />
              </a>
              <a
                href="https://www.linkedin.com/in/braeden-obholz/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Popup
                  content="LinkedIn"
                  trigger={
                    <Icon className="devicon-linkedin-plain" color="blue" />
                  }
                />
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/BraedenObholzResume.pdf`}
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
              >
                <Popup
                  content="My Resume"
                  trigger={<Icon name="file alternate" color="red" />}
                />
              </a>
            </IconGroup>
          </Header.Subheader>
        </Header>
      </Container>
    </div>
  );
};
export default PortfolioHeader;
