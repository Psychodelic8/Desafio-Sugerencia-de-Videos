class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    playMultimedia() {
        // InsertarVideo de Multimedia
        this.insertarVideo(this._id);
    }

    setInicio(tiempo) {
        const urlWithStartTime = `${this._url}?start=${tiempo}`;
        super.setInicio(); // Clase padre
        this._url = urlWithStartTime;
    }
}