import React, { useState, useEffect } from "react";

// CSS-in-JS
const styles = {
  section: {
    padding: "16px 48px",
    display: "flex",
    flexWrap: "wrap",
    gap: "32px",
  },
  article: {
    border: "1px solid #ccc",
    flexGrow: "1",
    textAlign: "center",
    borderRadius: "8px",
    padding: "8px",
  },
  image: {
    borderRadius: "4px",
  },
  h2: {
    fontSize: "32px",
    textAlign: "center",
    marginTop: "56px",
  },
  h3: {
    fontSize: "24px",
  },
} as const;

interface CharacterProps {
  id: number;
  image: string;
  name: string;
  gender: string;
}

const Character = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchCharacter = () =>
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((character) => {
          setCharacter(character.results);
        });
    fetchCharacter();
  }, []);

  return (
    <>
      <h2 style={styles.h2}>Alguns personagens da série</h2>
      <section style={styles.section}>
        {character.map((data: CharacterProps) => {
          return (
            <article key={data.id} style={styles.article}>
              <img src={data.image} alt={data.name} style={styles.image} />
              <div>
                <h3>{data.name}</h3>
                <h3
                  style={
                    data.gender === "Female"
                      ? { color: "red" }
                      : { color: "blue" }
                  }
                >
                  {data.gender}
                </h3>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Character;
