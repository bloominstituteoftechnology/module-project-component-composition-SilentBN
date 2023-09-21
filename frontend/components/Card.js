import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: crimson;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-family: "Roboto", sans-serif;
  }

  figure {
    margin: 0;
    padding: 0;
    align-items: center;
  }

  figcaption {
    font-size: 1rem;
    font-style: italic;
    margin-top: 1rem;
  }
`;

export default function Card({ data }) {
  return (
    <CardStyled className="card">
      <h2>{data.title}</h2>
      <p>{data.explanation}</p>
      <figure>
        <img src={data.url} alt={data.title} />
        <figcaption>Cool Picture Taken On {data.date}</figcaption>
      </figure>
    </CardStyled>
  );
}
