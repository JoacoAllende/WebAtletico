export class Partido {

    constructor(id_partido = 0, id_equipoUno = 0, id_equipoDos = 0, golesLocal = 0, golesVisitante = 0, penalesLocal = -1, penalesVisitante = -1, id_grupo = 0, instancia = '', equipoUno = '', equipoDos = '', torneo = 0, anio = 2019){
        this.id_partido = id_partido;
        this.id_equipoUno = id_equipoUno;
        this.id_equipoDos = id_equipoDos;
        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitante;
        this.penalesLocal = penalesLocal;
        this.penalesVisitante = penalesVisitante;
        this.id_grupo = id_grupo;
        this.instancia = instancia;
        this.equipoUno = equipoUno;
        this.equipoDos = equipoDos;
        this.torneo = torneo;
        this.anio = anio;
    } 

    id_partido: Number;
    id_equipoUno: Number;
    id_equipoDos: Number;
    golesLocal: Number;
    golesVisitante: Number;
    penalesLocal: Number;
    penalesVisitante: Number;
    id_grupo: Number;
    instancia: String;
    equipoUno: String;
    equipoDos: String;
    torneo: number;
    anio: number;
}