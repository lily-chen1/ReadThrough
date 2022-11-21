import React from "react";
import { connectHits } from "react-instantsearch-core";
import styled from "styled-components";
import { Hit } from "./Hit";

const HitsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

function Hits({ hits }) {
  return (
    <HitsContainer>
      {hits.map((hit) => (
        <Hit key={hit.ObjectID} hit={hit} />
      ))}
    </HitsContainer>
  );
}

export default connectHits(Hits);
