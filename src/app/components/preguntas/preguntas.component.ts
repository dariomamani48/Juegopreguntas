import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
listPregunta: Pregunta[]=[]
  constructor(public _preguntaService : PreguntaService) { }

  ngOnInit(): void {
    this.listPregunta=this._preguntaService.getPreguntas();
  }
  obtenerPregunta(){
    return this.listPregunta[this._preguntaService.indexPregunta].descripcionPregunta
  }
  respuestaSeleccionada(respuesta:Respuesta, indexRta:number){
    if(this._preguntaService.pregConfirmada === true){
      return;
    }
     this._preguntaService.opcionSeleccionada= respuesta;
     this._preguntaService.deshabilitarBtn=false
     this._preguntaService.indexRespuesta!=indexRta;
  }

  AddClassOption(respuesta: Respuesta) {
    if(respuesta=== this._preguntaService.opcionSeleccionada && !this._preguntaService.pregConfirmada){
       return 'active text-light'
    }
    if(respuesta=== this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta===1){
      return 'list-group-item-success'
    }
    if(respuesta=== this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta===0){
      return 'list-group-item-danger'
    }else{
      return ''
    }
  }
  iconCorrecta(respuesta:Respuesta){
    if(respuesta=== this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta===1){
      return true
    }else{
      return false
    }
  }
  iconIncorrecta(respuesta:Respuesta){
    if(respuesta=== this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta===0){
      return true
    }else{
      return false
    }
  }
}
