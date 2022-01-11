import { Component, OnInit } from '@angular/core';
import { UserJphService } from 'src/app/servicios/http/user-jph.service';

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

  constructor(    
    private readonly userJphService:UserJphService,
    ) { }

  ngOnInit(): void {
    this.userJphService
    .buscarTodos()
    .subscribe({
      next:(datos)=>{
        console.log({datos});
      },
      error: (error) => {
        console.error({error})
      }
    }
    )
  }

}
