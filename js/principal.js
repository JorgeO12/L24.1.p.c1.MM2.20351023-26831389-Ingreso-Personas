/**
 * Dado el nombre, sexo (F-M) y el ingreso de varias personas. Determinar e imprimir: promedio
de ingreso de las mujeres, el monto de ingreso mayor y quien lo tiene.
Se dispone de los siguientes datos de varias personas: (nombre, sexo, ingreso) (Mary, F,
150), (José, M, 135), (Carlos, M, 160), (Pedro, M, 75), (Rosa, F, 120), (Carmen, F, 120)
Promedio de ingreso de las mujeres: 130
Nombre de la persona con mayor ingreso: Carlos con un ingreso de 160$ 

 */

import Cl_personas from "./Cl_personas.js";
import Cl_ingresos from "./Cl_ingresos.js";

let p1 = new Cl_personas("Mary", "F", 150);
let p2 = new Cl_personas("José", "M", 135);
let p3 = new Cl_personas("Carlos", "M", 160);
let p4 = new Cl_personas("Pedro", "M", 75);
let p5 = new Cl_personas("Rosa", "F", 120);
let p6 = new Cl_personas("Carmen", "F", 120);

let i = new Cl_ingresos();
i.procesar(p1);
i.procesar(p2);
i.procesar(p3);
i.procesar(p4);
i.procesar(p5);
i.procesar(p6);

let salida = document.getElementById("salida");

salida.innerHTML = `
Promedio de ingreso de las mujeres: ${i.promedio()}
<br>Nombre de la persona con mayor ingreso: ${i.nommayor} con un ingreso de ${i.ingresomayor}$</p>
`;