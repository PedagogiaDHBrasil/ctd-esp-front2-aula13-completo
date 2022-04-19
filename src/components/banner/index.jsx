import React from "react";

// CSS-in-JS
const styles = {
  div: {
    padding: "124px 48px",
    background: "url(wallpaper.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  h1: {
    fontSize: "32px",
    color: "white"
  },
  p: {
    fontSize: "16px",
    color: "white",
    lineHeight: "160%"
  },
  button: {
    marginRight: "32px",
    fontSize: "18px",
    borderRadius: "4px",
    border: "none",
    padding: "12px 32px",
    backgroundColor: "purple",
    color: "white",
    cursor: "pointer"
  },
  buttonFavorite: {
    marginRight: "32px",
    fontSize: "18px",
    borderRadius: "4px",
    border: "none",
    padding: "12px 32px",
    backgroundColor: "yellow",
    color: "black",
    cursor: "pointer"
  }
};

const Banner = () => {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>Rick and Morty</h1>
      <p style={styles.p}>
        Rick and Morty (em português Rick e Morty) é uma série de animação
        adulta norte-americana de comédia e ficção científica criada por Justin
        Roiland e Dan Harmon para o bloco de programação noturno Adult Swim,
        exibido no canal Cartoon Network.
      </p>
      <button style={styles.button}>Assistir Trailer</button>
      <button style={styles.buttonFavorite}>Salvar no favoritos</button>
    </div>
  );
};

export default Banner;
