// 02-nterfaces.ts

interface Usuario{
    nombre: string;
    apellido: string;
    edad?: number;  //opcional1
    sueldo?: number;//opcional2
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje:string) => string | 'BN';
    calcularImpuesto: (impuesto:number) => number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
}

let user: Usuario = {
    nombre: 'David',
    apellido: 'Morales',
    casado: false,
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: impuesto => {
        return this.sueldo + this.sueldo * impuesto;
    },
    estadoActual: () => {
        switch ((this.estado)) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}
