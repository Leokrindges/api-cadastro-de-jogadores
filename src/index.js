import express from 'express';
const app = express();
app.use(express.json());


const times = [
    {
        nomeTime: 'Grêmio',
        cidade: 'Porto Alegre',
        estadio: 'Arena do Grêmio',
        jogadores: [
            {
                foto: '',
                nome: 'Pedro Germel',
                idade: 38,
                posicao: 'zagueiro',
            },
            {
                foto: '',
                nome: 'Marcelo Groeh',
                idade: 38,
                posicao: 'Goleiro',
            },
            {
                foto: '',
                nome: 'Maicon',
                idade: 35,
                posicao: 'Volante',
            },
            {
                foto: '',
                nome: 'Douglas',
                idade: 37,
                posicao: 'Meia',
            },
            {
                foto: '',
                nome: 'Luan',
                idade: 26,
                posicao: 'Meia',
            },
            {
                foto: '',
                nome: 'Renato Portalupi',
                idade: 57,
                posicao: 'Técnico',
            },
        ],
        nomeTime: 'Internacional',
        cidade: 'Porto Alegre',
        estadio: 'Beira Rio',
        jogadores: [
            {
                foto: '',
                nome: 'Rodrigo Moledo',
                idade: 30,
                posicao: 'zagueiro',
            },
            {
                foto: '',
                nome: 'Marcelo Lomba',
                idade: 29,
                posicao: 'Goleiro',
            },
            {
                foto: '',
                nome: 'Rodrigo Dourado',
                idade: 30,
                posicao: 'Volante',
            },
            {
                foto: '',
                nome: 'Dalessandro',
                idade: 37,
                posicao: 'Meia',
            },
            {
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

app.get('/times', (request, response) => {
    return response.json(times);

});

app.listen(8080, () => console.log("Servidor iniciado"));