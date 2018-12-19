import React, { useEffect, useState } from "react";
import { getRandomBibleVerse } from "../../../services/server/home";
import { Paragraph1 } from "../../../ui_components/typography";
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
