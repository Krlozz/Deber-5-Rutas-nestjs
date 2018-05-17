import {Controller, Get, HttpCode, Req, Res} from "@nestjs/common";

const fs = require('fs');
const nombre = 'Carlos Ayala';

@Controller()
export class InicioController {
    @Get('Home')
    buscarHtml(@Req() req, @Res() res){
        let htmlFooter=fs.readFileSync(
            __dirname+'/html/footer.html',
            'utf8');
        let htmlHeader= fs.readFileSync(
            __dirname+'/html/header.html',
            'utf8');
        let htmlContenido= fs.readFileSync(
            __dirname+'/html/contenido.html',
            'utf8');
        htmlContenido = htmlContenido.replace('{{nombre}}',nombre);

        let contenidoTotal= htmlHeader + htmlContenido + htmlFooter;
        // Modificación para status
        /*console.log(res.status(200).send(contenidoTotal));
        return res.status(200).send(contenidoTotal);*/

        const existeContenido = (contenidoTotal);

        // Todo sale bien
        if(existeContenido) {
            console.log(res.status(200).send(contenidoTotal));
            return res.status(200).send(contenidoTotal);
        }else {
            return res.status(500).send({mensaje: 'Existen errores', status: 500})
        }
        // Retorna error
        /*if(existeContenido==null) {
            console.log(res.status(200).send(contenidoTotal));
            return res.status(200).send(contenidoTotal);
        }else {
            return res.status(500).send({mensaje: 'Existen errores', status: 500})
        }*/
    }
}