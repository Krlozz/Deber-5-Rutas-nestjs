import {Controller, Get, HttpCode, Req, Res} from "@nestjs/common";

const fs = require('fs');

const nombre = 'Carlos Ayala';

@Controller()
export class InicioController {
    @Get('Home')
    @HttpCode(200)
    mostrar(@Req()request, @Res() response){
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

        let cadena= htmlHeader + htmlContenido + htmlFooter;
        console.log(response.status(200).send(cadena));
        return response.status(200).send(cadena);

    }
}