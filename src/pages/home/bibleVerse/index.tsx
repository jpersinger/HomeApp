import React, { useEffect, useState } from "react";
import { Paragraph1 } from "../../../components/typography";
import { getRandomBibleVerse } from "../../../services/server/home";
import { VerseContainer } from "./components";

const BibleVerse = () => {
  const [verse, setVerse] = useState({ chapter: "", verse: "" });

  useEffect(() => {
    getRandomBibleVerse().then(newVerse => {
      setVerse(newVerse);
    });
  }, []);
  return (
    <VerseContainer>
      <Paragraph1>{verse.chapter}</Paragraph1>
      <Paragraph1 style={{ fontStyle: "italic" }}>{verse.verse}</Paragraph1>
    </VerseContainer>
  );
};

export default BibleVerse;
