
//Ingresa la cantidad de empleados que quieras calcular su sueldo anual.
class Empleados {
    constructor(id,nombre,apellido,sueldoMensual){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.sueldoMensual=sueldoMensual;
    }
}

let empleados = [];

let btn1 = document.getElementsByClassName("btn1")[0];
btn1.addEventListener("click",()=>{
    enEmpleados();
})

function enEmpleados(){
    let nombre = prompt("Introduce un nombre");
    let apellido = prompt ("Introduce un apellido");
    let sueldoMensual= Number(prompt("Introduce el sueldo mensual"));
    let empleado = new Empleados(getId(),nombre,apellido,sueldoMensual);
    empleados.push(empleado);
    console.log(empleados);
    

}

function getId(){
    if(empleados.length===0){
        return 1;
    }else{
        let ultimo =empleados[empleados.length-1];
        return ultimo.id+1;
    } 
}

let btn2=document.getElementsByClassName("btn2")[0];
btn2.addEventListener("click",()=>{
    listarEmpleados();
})

function listarEmpleados(){
    empleados.forEach((empleado)=>{
        let empleadito = document.createElement("div2");
        empleadito.innerHTML= (`<b>Empleado:<b/><br>${empleado.nombre} ${empleado.apellido}<br>`);
        div2.appendChild(empleadito);
    })
}

let btn3 = document.getElementsByClassName("btn3")[0];
btn3.addEventListener("click",()=>{

})
