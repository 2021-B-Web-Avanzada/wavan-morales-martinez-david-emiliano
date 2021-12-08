// 04-clases.ts

class Persona {
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string ='Humano';
    protected nombreYApellido = ''; // Duck Typing --> String

    constructor(
        nombreParametro:string,
        apellidoParametro:string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }

    private mostrarNombreApellido(): string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona {

    // Definimos el constructor de la clase
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string,
        public estadoCivil: string
    ) {
        super(nombreParametro, apellidoParametro);
    }
}

const david = new Usuario(
    'David',
    'Morales',
    '1722793881',
    'Casado'
);

david.nombre;
david.apellido;
david.cedula;
david.estadoCivil;

