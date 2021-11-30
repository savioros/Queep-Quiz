//Passagem de variaveis para montar o cabeçalho da prova
var nome = sessionStorage.getItem('nome')
var instituicao = sessionStorage.getItem('instituicao')

var nomeAluno = document.querySelector("#nomeAluno")
nomeAluno.innerHTML = "Nome: " + nome
var instituicaoAluno = document.querySelector("#intituicaoAluno")
instituicaoAluno.innerHTML = "Instituição de Ensino: " + instituicao

//#region Provas Redes
const testeRedes = [ 
    {
        question: "As redes de computadores cabeadas atuais são implementadas por meio de cabos UTP, não blindados, que usam um conector específico, em conformidade com os padrões Fast Ethernet e Gigabit Ethernet. Aimagem e sigla utilizadas para referenciar esse conector estão indicadas na seguinte alternativa:",
        a: "RJ-45 --",
        b: "RG-6",
        c: "USB",
        d: "HDMI",
        e: "VGA",
        resp: "a"
    },
    {
        question: "Em uma rede local, cujas estações de trabalho usam o sistema operacional Windows XP e endereços IP fixos em suas configurações de conexão, um novo host foi instalado e, embora esteja normalmente conectado à rede, não consegue acesso à internet distribuída nessa rede. Considerando que todas as outras estações da rede estão acessando a internet sem dificuldades, um dos motivos que pode estar ocasionando esse problema no novo host é",
        a: "a codificação incorreta do endereço de FTP para o domínio registrado na internet.",
        b: "a falta de registro da assinatura digital do host nas opções da internet.",
        c: "um erro no Gateway padrão, informado nas propriedades do Protocolo TCP/IP desse host. --",
        d: "um erro no cadastramento da conta ou da senha do próprio host.",
        e: "um defeito na porta do switch onde a placa de rede desse host está conectada.",
        resp: "c"
    },
    {
        question: "Para conectar sua estação de trabalho a uma rede local de computadores controlada por um servidor de domínios, o usuário dessa rede deve informar uma senha e um[a]",
        a: "endereço de FTP válido para esse domínio.",
        b: "endereço MAC de rede registrado na máquina cliente.",
        c: "porta válida para a intranet desse domínio.",
        d: "conta cadastrada e autorizada nesse domínio. --",
        e: "certificação de navegação segura registrada na intranet.",
        resp: "d"
    },
    {
        question: "Hoje, nas Redes Locais (LAN) cabeadas, o meio de transmissão mais utilizado é o",
        a: "Cabo de par trançado. --",
        b: "Cabo de fibra óptica.",
        c: "Cabo coaxial.",
        d: "Cabo Ethernet.",
        e: "Cabo fino 10BASE-T.",
        resp: "a"
    },
    {
        question: "Qual a função de um roteador em uma rede de computadores, e em qual nível de camada ele trabalha no modelo TCP/IP.",
        a: "Ligar computadores em uma rede local, trabalhando em camada 2 (enlace)",
        b: "Espalhar pacotes para todos hosts de uma LAN, trabalha em camada 2 (enlace)",
        c: "Interligar redes de computadores, com diferentes rotas, trabalhando em camada 3 (rede) --",
        d: "Interagir diretamente com aplicação de redes, tais como um web browser, em camada 1 (aplicação)",
        e: "Nenhuma das opções",
        resp: "c"
    },
    {
        question: "No contexto das redes de computadores com acesso à internet e no que diz respeito à arquitetura TCP/IP, três protocolos são empregados no serviço de e-mail, caracterizados a seguir. I. É usado para o envio de mensagens na internet, por meio do uso da porta 25, que é a padrão para envio de mensagens, havendo a alternativa de uso das portas 465 e 587.  II. É usado na recepção de mensagens , particularmente para sincronização no servidor, por meio da porta 143 com conexões sem criptografia e, como alternativa, a porta 993 para conexões seguras com criptografia TLS/SSL. No seu funcionamento, é um protocolo que sempre mantém cópia das mensagens no servidor.  III. É usado na recepção de mensagens, por meio da porta 110 com conexões sem criptografia e, como alternativa, a porta 995 para conexões seguras com criptografia TLS/SSL. No seu funcionamento, é um protocolo que baixa as mensagens e as apaga do servidor. Os protocolos caracterizados em I, II e III são conhecidos, respectivamente, pelas siglas:",
        a: "SMNP, POP3 e HTTP",
        b: "SMTP, POP3 e IMAP --",
        c: "SMNP, SSH e IMAP",
        d: "SMTP, SSH e HTTP",
        e: "Nenhuma das opções",
        resp: "b"
    },
    {
        question: "Os clusters envolvem a execução de aplicações que acessam e modificam dados compartilhados. Como resultado é mais difícil tornar tolerantes a falhas instalações de clusters, pois requerem software de monitoramento de falhas e infraestrutura especial. Clusters de alta disponibilidade incluem dois ou mais computadores e discos compartilhados. Sobre este tema considere: I. Qualquer aplicação pode ser armazenada nos computadores ou no disco compartilhado, mas os dados devem ser armazenados no disco compartilhado. II. Se a aplicação falhar e não puder ser reiniciada ou se o computador inteiro falhar, o acesso exclusivo do nó aos dados da aplicação será encerrado e concedido a outro nó do cluster. A aplicação será reiniciada neste novo nó. III. Se a aplicação falhar e for reiniciada perderá as informações de estado que se encontravam na memória do sistema que falhou, mas poderá continuar a funcionar com base no estado que gravou pela última vez no disco compartilhado. Está correto o que se afirma em",
        a: "I e II, apenas.",
        b: "III, apenas.",
        c: "II, apenas.",
        d: "I e III, apenas.",
        e: "I, II e III. --",
        resp: "e"
    },
    {
        question: "São elementos ativos em uma rede de computadores",
        a: "Aqueles que não modificam/alteram os dados durante o tratamento dos mesmos",
        b: "Aqueles que inserem modificações significativas aos blocos de dados por ele tratados --",
        c: "Aqueles que apenas concentram sinais elétricos",
        d: "Aqueles que repetem o sinal elétrico",
        e: "Todas as opções",
        resp: "b"
    },
    {
        question: "No cenário tecnológico atual, existem dispositivos que incorporam hardware e software com o objetivo de conectar e promover a troca de dados com outros dispositivos e sistemas pela internet. Tais dispositivos variam de objetos domésticos a ferramentas industriais bastante sofisticadas. Assinale a alternativa que apresenta o nome dessa tecnologia.",
        a: "Internet das coisas. --",
        b: "Tecnolgia 5G.",
        c: "Banco de dados.",
        d: "Data center.",
        e: "Nuvem",
        resp: "a"
    },
    {
        question: "Apesar de os navegadores serem as ferramentas dominantes na internet, vários serviços possuem ferramentas próprias mais adequadas e, inclusive, mais otimizadas para protocolos específicos. Um desses protocolos foi desenvolvido para a transferência de arquivos, sendo usado a partir de programas como FileZilla. Esse protocolo é conhecido como",
        a: "FTP --",
        b: "IMAP",
        c: "POP3",
        d: "SSH",
        e: "TELNET2",
        resp: "a"
    }
]

const testeRedes1 = [ 
    {
        question: "Considerando o modelo de referência OSI, marque a alternativa correta em relação à camada onde um as atividades de um HUB são implementadas",
        a: "Física e enlace --",
        b: "Transporte e Rede",
        c: "Aplicação e Apresentação",
        d: "Sessão",
        e: "Nenhuma das opções",
        resp: "a"
    },
    {
        question: "Assinale a alternativa com a correta complementação: URL, Universal Resource Locator, é o nome dado a um",
        a: "endereço Web utilizado para acessar e identificar páginas eletrônicas na Web. --",
        b: "protocolo de rede para acesso às páginas eletrônicas.",
        c: "aplicativo utilizado para buscar as páginas eletrônicas na Web.",
        d: "endereço de e-mail utilizado para acessar e identificar a caixa postal eletrônica dos usuários.",
        e: "aplicativo que identifica os arquivos criados com o navegador Mozilla.",
        resp: "a"
    },
    {
        question: "Sobre Redes de Computadores, assinale a alternativa CORRETA. ",
        a: "O switch é um equipamento que recebe a informação de um computador de origem e a repassa apenas ao computador de destino. --",
        b: "Em uma rede do tipo Anel, as decisões de encaminhamento são centralizadas em um nó e cada estação é conectada a esse nó central. ",
        c: "Cada computador conectado à internet possui um endereço IP(Internet Protocol) único em seu país, o qual poderá se repetir em um computador de outro país.",
        d: "O Protocolo TCP (Transmission Control Protocol) não fornece confiabilidade na transmissão, pois envia os datagramas requisitados pela aplicação sem nenhuma garantia de que esses chegarão ao seu destino.",
        e: "O Protocolo UDP(User Datagram Protocol) é baseado em conexão, provê fluxo confiável de dados e divide o fluxo de dados em segmentos.",
        resp: "a"
    },
    {
        question: "São máscaras padrão de redes, respectivamente de classe A, B e C",
        a: "255.255.255.0, 255.255.0.0 255.0.0.0",
        b: "255.255.0.0, 255.0.0.0, 255.255.255.0",
        c: "0.0.0.0, 255.0.0.0, 255.255.0.0",
        d: "255.0.0.0, 255.255.0.0, 255.255.255.0 --",
        e: "Nenhuma das opções",
        resp: "d"
    },
    {
        question: "Leia atentamente a frase abaixo: \n 'Os dispositivos desta topologia são conectados em série formando um circuito fechado. Os dados são transmitidos unidirecionalmente de nó em nó até atingir o seu destino'. \n Assinale a alternativa correta para qual topologia possui tais características:",
        a: "Anel --",
        b: "Barramento",
        c: "Cisco",
        d: "Eclipse",
        e: "P2P",
        resp: "a"
    },
    {
        question: "Nas questões que avaliem conhecimentos de informática, a menos que seja explicitamente informado o contrário, considere que: todos os programas mencionados estejam em configuração-padrão, em português; o mouse esteja configurado para pessoas destras; expressões como clicar, clique simples e clique duplo refiram-se a cliques com o botão esquerdo do mouse; e teclar corresponda à operação de pressionar uma tecla e, rapidamente, liberá-la, acionando-a apenas uma vez. Considere também que não haja restrições de proteção, de funcionamento e de uso em relação aos programas, arquivos, diretórios, recursos e equipamentos mencionados. As redes de computadores mostradas na figura acima possuem endereços conhecidos como IP (Internet Protocol). Sabendo-se que há versões diferentes de IP, é correto afirmar que os endereços mostrados na figura estão representados no formato",
        a: "IPv2.",
        b: "IPv4.",
        c: "IPv5.",
        d: "IPv6. --",
        e: "IPv8.",
        resp: "d"
    },
    {
        question: "No que diz respeito aos conceitos básicos das redes de computadores, o termo topologia diz respeito ao layout físico empregado na implementação da rede e à forma como são feitas as conexões, havendo diversas configurações, sendo uma delas a mais empregada pelas características e vantagens que propicia. A figura abaixo ilustra o esquema básico dessa topologia: \n Do ponto de vista físico, essa topologia é conhecida por ",
        a: "anel ou cíclica.",
        b: "malha ou mesh.",
        c: "distribuída ou descentralizada.",
        d: "árvore ou hierárquica.",
        e: "estrela ou radial. --",
        resp: "e"
    },
    {
        question: "Um IP é um (uma):",
        a: "Interface.",
        b: "endereço de rede. --",
        c: "linguagem de programação.",
        d: "Roteador.",
        e: "Modelo da CPU.",
        resp: "b"
    },
    {
        question: "Considere o trecho a seguir: O protocolo da internet _____, foi desenvolvido para permitir a recuperação de correios eletrônicos, mensagens de servidores e de e-mail. Assinale a alternativa que completa CORRETAMENTE a lacuna:",
        a: "HTTP",
        b: "POP --",
        c: "SMTP",
        d: "TCP",
        e: "FTP",
        resp: "b"
    },
    {
        question: "Analise as afirmativas a seguir: I- A intranet é uma rede de computadores pública, que oferece, essencialmente, os mesmos serviços da internet, mas restrita a uma corporação.  II- File Transfer Protocol (FTP) é um formato utilizado para enviar e baixar arquivos em uma conexão de internet. III- HTML é uma linguagem padrão para construir e publicar páginas na web. Estão CORRETAS as afirmativas:",
        a: "I e II apenas.",
        b: "I e III apenas.",
        c: "II e III apenas. --",
        d: "I, II e III.",
        e: "Nenhuma das opções",
        resp: "c"
    }
]

const testeRedes2 = [
    {
        question: "Em servidores FTP, configurados para funcionar em modo passivo ou ativo, a porta 21/TCP é utilizada, por padrão, no lado do servidor para",
        a: "conexão e controle (troca de comandos e respostas entre cliente e servidor). --",
        b: "transferência de dados (arquivos trocados entre cliente e servidor).",
        c: "envio de dados encriptados (troca de informações sensíveis protegidas por criptografia).",
        d: "resolução de nomes (conversão de nomes em endereços IP).",
        e: "Todas estão erradas",
        resp: "a"
    },
    {
        question: "Uma extensão, definida nas RFCs 2045 e 2056, foi incorporada ao protocolo SMTP, para permitir, dentre outras novas funcionalidades, a incorporação de anexos às mensagens de correio eletrônico e a escrita de e-mails no formato HTML. Essas informações dizem respeito à extensão",
        a: "MIME. --",
        b: "POP3.",
        c: "IMAP.",
        d: "SMTPS.",
        e: "Nenhuma das opções",
        resp: "a"
    },
    {
        question: "Dentre os tipos de firewalls disponíveis, os proxies de serviços diferenciam-se dos firewalls tradicionais (filtros de pacotes) principalmente por atuarem, também, na camada de",
        a: "transporte.",
        b: "rede.",
        c: "enlace.",
        d: "aplicação. --",
        e: "fisica",
        resp: "d"
    },
    {
        question: "Analise as afirmações a seguir sobre o serviço de proxy reverso. \n I. Um proxy reverso se diferencia de um proxy convencional, porque o primeiro faz uso de IP com registro PTR válido. \n  II. Um cenário comum para um proxy reverso é o seu posicionamento como front-end para o servidor  web, permitindo a diminuição no tempo de resposta a requisições. \n III. O uso de um proxy reverso tem como consequência a diminuição da carga gerada pelas requisições a um servidor. \n IV. O proxy reverso não pode ser utilizado como front-end para um conjunto de servidores, devendo sempre estar recebendo e encaminhando requisições direcionadas a apenas um servidor. \n Estão corretas as afirmativas",
        a: "II e IV.",
        b: "I e IV.",
        c: "I e III.",
        d: "II e III. --",
        e: "Todas as opções estão corretas",
        resp: "d"
    },
    {
        question: "Analise as afirmativas a seguir a respeito de serviços de acesso e terminal remoto em ambiente Windows Server. \n I. O uso de port-forward permite que vários servidores RDP sejam acessíveis, mesmo utilizando um roteador implementando NAT 1:N com um único endereço IPv4 público. \n II. O Remote Desktop Services é a evolução do Terminal Services. \n III. O protocolo RDP ainda não dá suporte ao protocolo IPv6. \n IV. A porta padrão utilizada pelo Remote Desktop Services é a UDP 3389. \n Estão corretas as afirmativas",
        a: "I e II. --",
        b: "III e IV.",
        c: "II e IV.",
        d: "I e III.",
        e: "Todas as opções estão corretas",
        resp: "a"
    },
    {
        question: "Analise as afirmativas a seguir a respeito do protocolo/serviço DNS. \n I. Um servidor POP3 depende diretamente de um registro MX para que seja localizado por outros servidores de e-mail. \n II. A consulta DNS é realizada obrigatoriamente na porta UDP 53.\n III. A transferência de zona utiliza uma conexão TCP na porta 53. \n IV. Tanto nslookup quanto dig são binários de clientes DNS de linha de comando. \n Estão corretas as afirmativas",
        a: "II e III.",
        b: "I e IV.",
        c: "III e IV. --",
        d: "I e II",
        e: "Todas as opções estão erradas",
        resp: "c"
    },
    {
        question: "Ao monitorar os bytes trafegados de uma máquina interligada a outra com um cabo cross, o usuário notou que, ao transferir um arquivo de 1 megabyte de tamanho entre as máquinas, foi transferido um pouco mais e não exatamente 1 megabyte. Isso se deve ao",
        a: "driver errado da placa de rede.",
        b: "overhead gerado pelos protocolos de rede usados. --",
        c: "disco fragmentado na máquina de destino.",
        d: "sistema operacional desatualizado.",
        e: "Nenhuma das opções",
        resp: "b"
    },
    {
        question: "A unidade de dados que um Hub (Repetidor) trabalha é chamada de",
        a: "segmento.",
        b: "quadro.",
        c: "pacote.",
        d: "bit. --",
        e: "Nenhuma das opções",
        resp: "d"
    },
    {
        question: "O aplicativo de correio eletrônico pode ser configurado para enviar mensagens e acessar as caixas de mensagens que estão no servidor de correio. Um dos protocolos de comunicação mais utilizados para acessar as mensagens da caixa de entrada é o",
        a: "SMTP",
        b: "IMAP --",
        c: "SMB",
        d: "SSH",
        e: "RDP",
        resp: "b"
    },
    {
        question: "Cada serviço/protocolo de aplicação em redes TCP/IP utiliza, por padrão, porta e protocolo de transporte específicos para conexão dos clientes nos servidores. As portas/protocolos de transporte padrões utilizados pelos serviços SSH, Telnet e SMTP são, respectivamente",
        a: "21/TCP, 22/TCP e 25/TCP.",
        b: "22/TCP, 23/TCP e 25/TCP. --",
        c: "20/TCP, 21/TCP e 22/TCP.",
        d: "23/TCP, 25/TCP e 26/TCP.",
        e: "23/TCP, 25/TCP e 22/TCP.",
        resp: "b"
    }
]
//#endregion

//Questão
let questao = document.querySelector('.questao')
let answerEls = document.querySelectorAll('.answer')
let questionEls = document.querySelector('#pergunta')

//Alternativas
let a_text = document.querySelector('#a_text')
let b_text = document.querySelector('#b_text')
let c_text = document.querySelector('#c_text')
let d_text = document.querySelector('#d_text')
let e_text = document.querySelector('#e_text')
let submitBtn = document.querySelector('#submit')

//Gera prova de Redes
let currentQuiz = 0
let score = 0
let tempArray = [testeRedes, testeRedes1, testeRedes2]
let provaRandom = tempArray[Math.floor(Math.random() * tempArray.length)]

//Inicia o Quiz
function loadQuiz(){

    deselectAnswers()

    let currentQuizData = provaRandom[currentQuiz]

    questionEls.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
    e_text.innerHTML = currentQuizData.e
    
    submitBtn.addEventListener('click', () => {
        let answer = getSelect()
        if(answer){
            if(answer == provaRandom[currentQuiz].resp){
                score++
            }
    
            currentQuiz++
    
            if(currentQuiz < provaRandom.length){
                loadQuiz()
            }else{
                questao.innerHTML = `
                    <div class="box-final">
                        <div class="final-content">
                            <div class="result">
                                <h3>Nota</h3>
                                <h5>${score}</h5>
                            </div>
                        </div>
                        <div class="final-description">
                            <p>
                                Seu futuro só depende de você e como diria Charles Chaplin "A persistência é o caminho do êxito", então caso não esteja satisfeito com seu resultado você 
                                pode refazer o teste clicando no botão abaixo. 
                                
                                A equipe Queep Quiz agradece a preferência e a confiança nos nossos serviços! 
                            </p>
                            <button id="backBtn" onclick="location.reload()">Refazer a prova</button>
                        </div>
                    </div>
                `
            }
        }
        if(currentQuiz >= provaRandom.length) clearInterval(temp)
    })

}
loadQuiz()
temporizador()

function temporizador(){
    const startingMinutes = 10
    let time = startingMinutes * 60

    const countdownEl = document.querySelector('.countdown')

    temp = setInterval(updateCountdown, 1000)

    function updateCountdown(){
        minutes = Math.floor(time / 60)
        seconds = time % 60

        countdownEl.innerHTML = `${minutes}: ${seconds}`
        time-- 

        if(minutes && seconds < 0){
            clearInterval(temp)
            countdownEl.innerHTML = `0${0}: 0${0}`
            questao.innerHTML = `
                <div class="box-final">
                    <div class="final-content">
                        <div class="result">
                            <h3>Nota</h3>
                            <h5>${score}</h5>
                        </div>
                    </div>
                    <div class="final-description">
                        <p>
                            Seu futuro só depende de você e como diria Charles Chaplin "A persistência é o caminho do êxito", então caso não esteja satisfeito com seu resultado você 
                            pode refazer o teste clicando no botão abaixo. 
                            
                            A equipe Queep Quiz agradece a preferência e a confiança nos nossos serviços! 
                        </p>
                        <button id="backBtn" onclick="location.reload()">Refazer a prova</button>
                    </div>
                </div>
            `
        }
    }
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelect(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}