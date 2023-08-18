import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('data')
export class DataController {
  @Post('send')
  sendData(@Body() data: any, @Res() res: Response) {
    console.log('Datos recibidos:', data);

    // Configura los encabezados CORS aquí
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // Configura el origen permitido
    res.header('Access-Control-Allow-Methods', 'POST'); // Configura los métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Content-Type'); // Configura las cabeceras permitidas

    return res.status(200).json({ message: 'Datos recibidos correctamente' });
  }
}
