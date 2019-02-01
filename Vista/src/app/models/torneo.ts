import { EquipoParticipo } from './equipoParticipo';

export class Torneo {
    constructor(id = 1, descripcion = '', cantEquipos = 1, primero = '', segundo = '', tercero = '', cuarto = '', goleador = '', cantGoles = 1){
        this.id = id;
        this.descripcion = descripcion;
        this.cantEquipos = cantEquipos;
        this.primero = primero;
        this.segundo = segundo;
        this.tercero = tercero;
        this.cuarto = cuarto;
        this.goleador = goleador;
        this.cantGoles = cantGoles;
    }

    id : Number;
    descripcion : String;
    cantEquipos : Number;
    primero : String;
    segundo : String;
    tercero : String;
    cuarto : String;
    goleador : String;
    cantGoles : Number;
    equiposParticipo : EquipoParticipo[];
}