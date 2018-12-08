export class Equipo {

    constructor(id = 0, nombre = '', puntos = 0, partidosJugados = 0, partidosGanados = 0, partidosEmpatados = 0, partidosPerdidos = 0, golesAFavor = 0, golesEnContra = 0, diferenciaGoles = 0, geupo = 0, posicion = 0, cantAmarillas = 0, cantRojas = 0){
        this.id = id;
        this.nombre = nombre;
        this.puntos = puntos;
        this.partidosJugados = partidosJugados;
        this.partidosGanados = partidosGanados;
        this.partidosEmpatados = partidosEmpatados;
        this.partidosPerdidos = partidosPerdidos;
        this.golesAFavor = golesAFavor;
        this.golesEnContra = golesEnContra;
        this.diferenciaGoles = diferenciaGoles;
        this.grupo = this.grupo;
        this.posicion = posicion;
        this.cantAmarillas = cantAmarillas;
        this.cantRojas = cantRojas;
    } 

    id: Number;
    nombre: String;
    puntos: Number;
    partidosJugados: Number;
    partidosGanados: Number;
    partidosEmpatados: Number;
    partidosPerdidos: Number;
    golesAFavor: Number;
    golesEnContra: Number;
    diferenciaGoles: Number;
    grupo: Number;
    posicion: Number;
    cantAmarillas: Number;
    cantRojas: Number;
}
