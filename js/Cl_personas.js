export default class Cl_personas {
    constructor(nombre, sexo, ingreso) {
        this.nombre = nombre
        this.sexo = sexo
        this.ingreso = ingreso
    }

set ingreso(ingreso){
    this._ingreso = ingreso}

get ingreso(){
    return this._ingreso

}

set sexo(sexo){
    this._sexo = sexo}

get sexo(){
    return this._sexo

}

set nombre(nombre){
    this._nombre = nombre}

get nombre(){
    return this._nombre

}

}