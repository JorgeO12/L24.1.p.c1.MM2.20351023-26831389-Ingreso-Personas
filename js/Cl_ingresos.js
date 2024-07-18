export default class Cl_ingresos {
    constructor() {
        this.ingresomujeres = 0;
        this.cntmujeres = 0;
        this.ingresomayor = 0;
        this.nommayor = "";
    }

procesar(p) {
    if (p.sexo == "F") {
        this.ingresomujeres += p.ingreso;
        this.cntmujeres++;
    }
    if (p.ingreso > this.ingresomayor) {
        this.ingresomayor = p.ingreso;
        this.nommayor = p.nombre;
    }

}

promedio() {
    return this.ingresomujeres / this.cntmujeres;

}

}

