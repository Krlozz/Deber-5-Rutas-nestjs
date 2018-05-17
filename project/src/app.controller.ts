import {Get, Controller, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';

const fs = require('fs')
let contador = 0;

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}

    @Get()
    root(): string {
        const nombre = 'Carlos Ayala';
        let html = fs.readFileSync(
            __dirname+'/html/contenido.html',
            'utf8');
        html = html.replace('{{nombre}}',nombre);
        return html;
    }
}
