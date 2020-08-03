import React, { useState } from "react";
// import { Card, CardText, CardBody, CardTitle, Row, Col } from "reactstrap";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import styled from "styled-components";

const Characterbox = styled.div`
  color: brown;
`;

const Character = (props) => {
  const { character } = props;
  console.log(character);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Characterbox>
      <Button color="warning" onClick={toggle} style={{ marginBottom: "1rem" }}>
        {character.name}
      </Button>
      <Collapse isOpen={isOpen}>
        <Card color="warning">
          <CardBody color="warning">
            <p>DOB: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Eye Color: {character.eye_color}</p>
          </CardBody>
        </Card>
      </Collapse>
    </Characterbox>
  );
};

export default Character;
