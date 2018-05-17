import {Controller, Get, Post, Req, Res} from "@nestjs/common";

const fs =require('fs');
let preguntasHtml=fs.readFileSync(__dirname+'/html/preguntasFrecuentes.html', 'utf8');

@Controller()
export class PreguntasFrecuentesController {

    propiedadesPreguntas: pregutasFrecuentes[] = []
    @Post('anadir')
    anadirPreguntas(@Req() req, @Res() res){
        const params = req.query;
        this.propiedadesPreguntas
            .push(new pregutasFrecuentes(params.pregunta,params.respuesta));

        return res.send(this.propiedadesPreguntas);
    }

    @Get('mostrar')
    mostrarPreguntas(@Res () response){




    }


}

export class pregutasFrecuentes{
    constructor(public pregunta: string,
                public respuesta: string){
    }

}