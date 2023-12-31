import express from 'express';

//gerador de ids
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());


const times = [
    {
        idTime: uuidv4(),
        nomeTime: 'Grêmio',
        cidade: 'Porto Alegre',
        estadio: 'Arena do Grêmio',
        jogadores: [
            {
                idJogador: uuidv4(),
                foto: '',
                nome: 'Pedro Germel',
                idade: 38,
                posicao: 'zagueiro',
            },
            {
                idJogador: uuidv4(),
                foto: '',
                nome: 'Marcelo Groeh',
                idade: 38,
                posicao: 'Goleiro',
            },
            {
                idJogador: uuidv4(),
                foto: '',
                nome: 'Maicon',
                idade: 35,
                posicao: 'Volante',
            },
            {
                idJogador: uuidv4(),
                foto: '',
                nome: 'Douglas',
                idade: 37,
                posicao: 'Meia',
            },
            {
                idJogador: uuidv4(),
                foto: '',
                nome: 'Luan',
                idade: 26,
                posicao: 'Meia',
            },
            {
                idJogador: uuidv4(),
                foto: '',
                nome: 'Renato Portalupi',
                idade: 57,
                posicao: 'Técnico',
            },
        ],

        idTime: uuidv4(),
        nomeTime: 'Internacional',
        cidade: 'Porto Alegre',
        estadio: 'Beira Rio',
        jogadores: [
            {
                idJogador: uuidv4(),
                foto: '',
                nome: 'Rodrigo Moledo',
                idade: 30,
                posicao: 'zagueiro',
            },
            {
                idJogador: uuidv4(),
                foto: '',
                nome: 'Marcelo Lomba',
                idade: 29,
                posicao: 'Goleiro',
            },
            {
                idJogador: uuidv4(),
                foto: '',
                nome: 'Rodrigo Dourado',
                idade: 30,
                posicao: 'Volante',
            },
            {
                idJogador: uuidv4(),
                foto: '',
                nome: 'Dalessandro',
                idade: 37,
                posicao: 'Meia',
            },
            {
                idJogador: uuidv4(),
                foto: '',
                nome: 'Abel Brago',
                idade: 65,
                posicao: 'Técnico',
            },
        ],


    }
]

app.get('/', (request, response) => {
    return response.json('OK');

});

//BUSCA TIMES E SEUS JOGADORES
app.get('/times', (req, res) => {
    return res.json(times);

});

//CRIA TIME
app.post('/times/', (req, res) => {
    const body = req.body

    console.log(body);

    const novoTime = {
        idTime: uuidv4(),
        nomeTime: body.nomeTime,
        cidade: body.cidade,
        estadio: body.estadio,
        jogadores: []
    }
    times.push(novoTime)
    return res.status(200).json(times)

})

app.listen(8080, () => console.log("Servidor iniciado"));