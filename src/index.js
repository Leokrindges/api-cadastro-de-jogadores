import express, { response } from 'express';

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
        capacidade: 55000,
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
    },
    {

        idTime: uuidv4(),
        nomeTime: 'Internacional',
        cidade: 'Porto Alegre',
        estadio: 'Beira Rio',
        capacidade: 50000,
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
app.get('/times/', (req, res) => {
    const nomeDoTime = req.query.nomeTime


    //se a query vem vazia mostra todo o array
    if (nomeDoTime === undefined) {
        return res.status(200).json(times);
    }

    //filtra se o valor da query existe no array
    const listaTime = times.filter((nome) => {
        return nome.nomeTime.toLowerCase().includes(nomeDoTime.toLowerCase())
    })

    //se não existir time
    if (listaTime.length === 0) {
        return res.status(400).json("Time não encontrado!")
    }
    //se exisitr exibe o time
    return res.status(200).json(listaTime);
});

//CRIA TIME
app.post('/times/', (req, res) => {
    const body = req.body

    if (!body.nomeTime) return res.status(400).json("Nome do time não informado!")

    if (!body.cidade) return res.status(400).json("Nome da cidade não informada!")

    if (!body.estadio) return res.status(400).json("Nome do estadio não informado!")

    const novoTime = {
        idTime: uuidv4(),
        nomeTime: body.nomeTime,
        cidade: body.cidade,
        estadio: body.estadio,
        jogadores: []
    }
    times.push(novoTime)
    return res.status(200).json('Time criado com sucesso!')

})


//ATUALIZA ESTÁDIO OU CAPACIDADE DO ESTÁDIO DE UM TIME
app.put('/times/:idTime/', (req, res) => {
    const info = req.query
    const estadio = info.estadio;
    const capacidade = info.capacidade;
    const timeId = req.params.idTime

    //procura um id que seja igual ao passado na route params
    const pegaPosicaoDoTime = times.findIndex(time => {
        return time.idTime === timeId
    })

    //se não encontrar id igual
    if (pegaPosicaoDoTime === -1) {
        return res.status(400).json("Time não encontrado!")
    }

    //se a query parms não vier vazia atribui o valor 
    if (estadio != undefined) {
        times[pegaPosicaoDoTime].estadio = estadio

    }

    //se a query parms não vier vazia atribui o valor 
    if (capacidade != undefined) {
        times[pegaPosicaoDoTime].capacidade = capacidade
    }

    //se não vier nenhum dado na query params emite erro, pois pelo menos um deve ser enviado
    if (estadio === undefined && capacidade === undefined) {
        return res.status(400).json("Nome do estádio ou capacidade devem ser informados")
    }

    res.status(200).json("Atualizado com sucesso!")
})

app.listen(8080, () => console.log("Servidor iniciado"));