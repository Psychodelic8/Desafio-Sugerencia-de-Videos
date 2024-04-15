// IIFE
const Multimedia = (function () {
    // Insertar el video en el DOM
    function insertarVideo(url, id) {
        const iframe = document.getElementById(id);
        iframe.setAttribute("src", url);
    }

    // Clase padre Multimedia
    class Multimedia {
        constructor(url) {
            this._url = url;
        }

        setInicio() {
            return "Este método es para realizar un cambio en la URL del video";
        }

        // Insertar video, accesible a las clases hijas
        insertarVideo(id) {
            insertarVideo(this._url, id);
        }
    }

    return Multimedia;
})();