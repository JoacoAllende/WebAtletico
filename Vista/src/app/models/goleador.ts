export class Goleador {

    constructor(id = 0, nombre = '', apellido = '', numero = 0, goles = 0, equipo = '', torneo = 0, anio = 2019){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.numero = numero;
        this.goles = goles;
        this.equipo = equipo;
        this.torneo = torneo;
        this.anio = anio;
    }

    id: number;
    nombre: string;
    apellido: string;
    numero: number;
    goles: number;
    equipo: string;
    torneo: number;
    anio: number;
}
