export class Goleador {

    constructor(id = 0, nombre = '', apellido = '', numero = 0, goles = 0, equipo = ''){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.numero = numero;
        this.goles = goles;
        this.equipo = equipo;
    }

    id: number;
    nombre: string;
    apellido: string;
    numero: number;
    goles: number;
    equipo: string;
}
