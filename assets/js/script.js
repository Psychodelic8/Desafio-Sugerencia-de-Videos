const musicaPlayer = new Reproductor(
    "https://www.youtube.com/embed/c1KfDkPmB-8",
    "musica"
);
const peliculasPlayer = new Reproductor(
    "https://www.youtube.com/embed/pFoKb6rwp2s",
    "peliculas"
);
const seriesPlayer = new Reproductor(
    "https://www.youtube.com/embed/V0_Lp4xFiQA",
    "series"
);

//Métodos
musicaPlayer.playMultimedia();
peliculasPlayer.playMultimedia();
seriesPlayer.playMultimedia();

//Tiempo de inicio
musicaPlayer.setInicio(30); // Partir en el Segundo 30
musicaPlayer.playMultimedia(); // Reproducir el video de música con el tiempo de inicio cambiado