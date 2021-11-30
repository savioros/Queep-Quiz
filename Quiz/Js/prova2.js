//Passagem de variaveis para montar o cabeçalho da prova
var nome = sessionStorage.getItem('nome')
var instituicao = sessionStorage.getItem('instituicao')

var nomeAluno = document.querySelector("#nomeAluno")
nomeAluno.innerHTML = "Nome: " + nome
var instituicaoAluno = document.querySelector("#intituicaoAluno")
instituicaoAluno.innerHTML = "Instituição de Ensino: " + instituicao

//#region  Provas Ads
const testeAds = [
    {
        question2:"O Modelo Cascata (Waterfall) de desenvolvimento de software foi definido nos anos 1970. Sobre suas características, assinale a afirmativa correta:",
        a2: "Tem como objetivo inicial estabelecer de forma estável os requisitos do sistema a ser desenvolvido, assim,o projeto somente avança quando os requisitos são aceitos. --",
        b2: "Funciona bem em projetos cujos requisitos não são conhecidos e tampouco estáveis.",
        c2: "É indicado para projetos em que as maiores preocupações são relacionadas com os custos e o tempo de desenvolvimento, e menos com a qualidade do produto.",
        d2: "Os resultados produzidos nas primeiras fases do modelo são direcionados aos codificadores e não aosanalistas de requisitos e projetistas",
        e2: "Todas estão corretas",
        resp: "a2"
    },
    {
        question2: "Sobre o modelo de desenvolvimento de software Scrum, e em especial sobre os perfis previstos no modelo,considere,I - Scrum Master é um facilitador do processo e existe para ajudar a equipe no uso do Scrum. Não tem autoridade sobre a equipe, mas sim sobre o processo e as atividades inerentes a ele \n  II - Product Owner é a pessoa responsável pelo projeto em si e possui dentre suas responsabilidades a de indicar quais são os requisitos mais importantes a serem tratados em cada ciclo de desenvolvimento \n III - Scrum Team é a equipe de desenvolvimento, formada pelas pessoas que executam as tarefas de desenvolvimento do software. \n IV - Project Manager é a pessoa que assume o papel de gerente do projeto na equipe de desenvolvimento, já que o Scrum Master e o Product Owner não possuem essa responsabilidade \n São perfis desse modelo",
        a2:"I, II e III, apenas --",
        b2:"I, III e IV, apenas",
        c2:"II e IV, apenas",
        d2: "II e IV, apenas",
        e2: "Nenhuma das opções",
        resp: "a2"
    },
    {
        question2: "Sobre o modelo de desenvolvimento de software Scrum, e em especial sobre o conceito de Sprint e as atividades desenvolvidas, assinale a afirmativa INCORRETA.",
        a2: "No início de cada Sprint, é feita uma reunião de planejamento do Sprint (Sprint Planning Meeting)",
        b2: "O Sprint é um ciclo de desenvolvimento de poucas semanas de duração, sobre o qual o modelo Scrum é estruturado",
        c2: "A equipe se compromete em desenvolver as funcionalidades planejadas para o Sprint; caso apareçam novas funcionalidades, cabe ao Scrum Master decidir se incorpora no Sprint atual ou aloca para o próximo. --",
        d2: "No início de cada Sprint, são transferidos os elementos do Product Backlog para o Sprint Backlog, ou seja, a lista de itens a serem implementados no ciclo que se inicia",
        e2: "Todas estão corretas",
        resp: "c2"
    },
    {
        question2: "Sobre o modelo de desenvolvimento de software XP (eXtreme Programming) e suas regras/diretrizes de codificação previstas, analise as afirmativas.\n I - Os testes de unidades devem ser produzidos antes do código do programa \n II - O código do programa deve ser escrito de acordo com os padrões aceitos por toda a equipe. \n III - O código do programa deve ser produzido por pares \n IV - Somente um par faz integração do código do programa a cada vez \n Está correto o que se afirma em",
        a2: "I e IV, apenas.",
        b2: "I, II e III, apenas",
        c2: "II, III e IV, apenas",
        d2: "I, II, III e IV --",
        e2: "I, II apenas",
        resp: "d2"
    }, 
    {
        question2: "Considerando a área de testes de software e mais especificamente os testes funcionais, a coluna da esquerda apresenta os tipos de testes funcionais e a da direita, as características de cada um. Numere a coluna da direita de acordo com a da esquerda \n 1 - Teste de Aceitação \n 2 - Teste de Integração. \n  3 - Teste de Regressão  \n  4 - Teste de Sistema  \n 5 - Teste de Unidade \n ( ) É executado quando um sistema que está em operação sofre alguma manutenção que pode acarretar novos defeitos \n ( ) Verifica se um componente individual do software foi implementado corretamente. Normalmente é realizado pelo próprio programador \n ( ) O objetivo principal é a validação do software quanto aos requisitos e não a verificação de defeitos É executado pelo usuário final \n ( ) É realizado depois que as unidades do software estão prontas e devem ser incorporadas em uma nova versão do sistema em desenvolvimento \n ( )É executado pela equipe de desenvolvimento e tem como objetivo verificar se a versão atual do sistema permite executar processos ou casos de uso completos do ponto de vista do usuário final \n",
        a2: "5, 3, 1, 4, 2",
        b2: "3, 5, 1, 2, 4 --",
        c2: "3, 4, 2, 1, 5" ,
        d2: "1, 5, 3, 4, 2",
        e2: "1, 3, 5, 4, 2",
        resp: "b2"    
    },
    {
        question2: "O diagrama abaixo ilustra a estrutura do Processo de Engenharia de Requisitos, cujo principal objetivo é produzir e manter um documento de requisitos de sistema .\n Assinale a alternativa que apresenta correta e respectivamente os estágios para os passos identificados pelos números 1, 2, 3 e 4 e os produtos produzidos no processo, identificados pelos números 5 e 6",
        a2:"Validação de requisitos, Elicitação e análise de requisitos, Especificação de requisitos, Estudo de viabilidade; Requisitos de usuário e de sistema, Modelos de sistema",
        b2: "Estudo de viabilidade, Especificação de requisitos, Elicitação e análise de requisitos, Validação de requisitos; Requisitos de usuário e de sistema, Modelos de sistema.",
        c2: "Estudo de viabilidade, Elicitação e análise de requisitos, Validação de requisitos, Especificação de requisitos; Modelos de sistema, Requisitos de usuário e de sistema.",
        d2: "Estudo de viabilidade, Elicitação e análise de requisitos, Especificação de requisitos, Validação de requisitos; Modelos de sistema, Requisitos de usuário e de sistema. --",
        e2: "Todas estão corretas",
        resp: "d2"
    },
    {
        question2: "Considere o diagrama de classe dado, construído segundo notações da linguagem de modelagem UML(Linguagem de Modelagem Unificada) e relações entre as classes do modelo de desenvolvimento de software orientado a objetos. \n A partir das informações dadas, assinale a afirmativa correta ",
        a2:"A relação de herança estabelecida entre as classes Aluno, AlunoMatriculado e Aluno Trancado não é recomendada, pois representa questões temporais. --",
        b2:"Herança de classes proporciona apenas herança de implementação e não herança de tipo.",
        c2:"Herança de tipo apenas é possível quando uma classe realiza uma Interface",
        d2:"A relação de herança de classe estabelecida entre as classes Aluno, AlunoMatriculado e AlunoTrancado será definida em tempo de execução, para garantir a existência de polimorfismo",
        e2: "Nenhuma das opções",
        resp: "a2"
    },
    {
        question2: "Para o modelo de desenvolvimento de software orientado a objetos, o Modelo de Domínio é um dos elementos mais importantes. O diagrama de classe abaixo, construído segundo notações da linguagem de modelagem UML (Linguagem de Modelagem Unificada), não pode ser considerado um Modelo de Domínio. \n Assinale a justificativa de tal afirmação.",
        a2: " No Modelo de Domínio, não são representadas as cardinalidades das relações.",
        b2: "Os elementos possíveis de um Modelo de Domínio são apenas os conceitos, atributos e relações entre os conceitos. --",
        c2: "A representação do contexto de venda está incorreta no diagrama",
        d2: "As cardinalidades da relação “paga” entre os conceitos Pagamento e Venda estão incorretas",
        e2: "Nenhuma das opções",
        resp: "b2"
    },
    {
        question2: "Sobre o documento de referência de Padrões de Interoperabilidade de Governo Eletrônico (e-PING, versão2015) e mais especificamente a seção que trata da organização e intercâmbio de informações, a coluna da esquerda apresenta os componentes padronizados e a da direita, os padrões adotados para a organização e troca de informações desses componentes. Numere a coluna da direita de acordo com a da esquerda. \n 1 - Linguagem para intercâmbio de dados  \n 2 -Definição dos dados para intercâmbio  \n 3- Descrição de recursos \n 4-Transformação de dados \n 5-- Linguagem de definição de ontologias na web  \n(    ) XSL (Extensible Stylesheet Language) e XSL Transformation (XSLT) \n  (   ) RDF (Resource Description Framework) \n  (    ) XML (Extensible Markup Language) e JSON(Javascript Object Notation) \n  (     )XML Schema Part 0: Primer, XML Schema Part 1: Structures e XML Schema Part 2: Datatypes\n (   ) OWL (Web Ontology Language) \n Assinale a sequência correta.",
        a2: "3, 4, 2, 5, 1",
        b2: " 2, 4, 3, 1, 5",
        c2: "1, 5, 4, 2, 3",
        d2: "4, 3, 1, 2, 5 --",
        e2: "5, 3, 1, 2, 4",
        resp: "d2"                           
    },
    {
        question2: "Uma das principais funções dos sistemas de informação é o apoio às tomadas de decisão nas organizações.Existem diferentes níveis de necessidade de informações em uma organização, originando diferentes tipos de decisão. Sobre os níveis organizacionais e os tipos de decisão, analise as afirmativas \n I - As decisões estruturadas são mais corriqueiras nos níveis organizacionais mais altos, enquanto decisões não estruturadas são mais comuns nos níveis mais baixos das organizações \n II - Decisões não estruturadas são aquelas em que o responsável pela decisão deve usar modelos matemáticos exclusivos para essa finalidade, sendo apoiadas por sistemas de informações que registram e controlam as ações operacionais das organizações. \n III - Decisões estruturadas são decisões repetitivas e rotineiras e envolvem procedimentos pré-definidos, assim não precisam ser consideradas como decisões novas. \n IV - Decisões semiestruturadas reúnem decisões onde parte do problema tem resposta conhecida e precisa, por meio de procedimentos conhecidos, a outra parte depende da capacidade de avaliação do encarregado em decidir \n Está correto o que se afirmar em" ,
        a2: " I, II e III, apenas.",
        b2: "III e IV, apenas. --" ,
        c2: "II e IV, apenas.",
        d2: "I, III e IV, apenas",
        e2: "I, II, III e IV",
        resp: "b2"
    }
]

const testeAds1 = [
    {
        question2: "Com relação aos modelos ágeis de processo, analise o fragmento a seguir. \nEste modelo ágil possui uma abordagem de desenvolvimento de software que premia a ‘manobrabilidade’ durante um jogo cooperativo de invenção e comunicação de recursos limitados, com o principal objetivo de entregar softwares úteis funcionando e com o objetivo secundário de preparar‐se para o jogo seguinte \n Segundo Pressman, esse modelo ágil de processo é denominado",
        a2: "Extreme Programming.",
        b2: "DSDM – Dynamic Systems Development Method – Método de Desenvolvimento Dinâmico de Sistemas.",
        c2: "Scrum",
        d2: "Crystal --",
        e2: "FDD – Feature Driven Development – Desenvolvimento Guiado por Características.",
        resp: "d2"
    },
    {
        question2: "-Segundo Dan Madison, além dos que trabalham diretamente no processo e os que desejam sua mudança, é importante incluir na composição de uma equipe de melhoria de processos, os seguintes participantes \n I. alguém completamente desvinculado do processo sobestudo. \n II. um especialista na área de recursos humanos.\n III. um gestor de atividade correlata que não deseja mudanças \n Assinale \n assinale ",
        a2: "se somente as afirmativas I e II estiverem corretas --",
        b2: "se somente as afirmativas I e III estiverem corretas.",
        c2: "se somente a afirmativa III estiver correta." ,
        d2: "se somente a afirmativa II estiver correta.",
        e2: "se somente a afirmativa I estiver correta.",
        resp: "a2"
    },
    {
        question2: "Com relação à Gerência de Risco do Projeto (Project Risk Management) do PMBOK, assinale a alternativa que indica a descrição mais adequada para o processo “Realizar a análise quantitativa de riscos",
        a2: "Estimar quantitativamente o impacto das opções e ações que visam reduzir as ameaças aos objetivos do projeto. ",
        b2: "Avaliar quantitativamente os riscos que impõem as maiores ameaças ao projeto.",
        c2: "Analisar numericamente o efeito dos riscos identificados nos objetivos do projeto. --",
        d2: "Identificar a causa comum dos riscos, avaliando seu impacto nos objetivos do projeto. ",
        e2: "Avaliar quantitativamente a correlação entre os riscos.",
        resp: "c2"
    },
    {
        question2: "Data warehouses são definidos como",
        a2: "um conjunto de dados integrado, orientados por assunto,variante no tempo e não volátil. --",
        b2: "um conjunto de dados integrado, orientados por departamentos, variante no tempo e não volátil.",
        c2: "um conjunto de regras, orientadas por departamentos, invariante no tempo e não volátil.",
        d2:  "um conjunto de dados integrado, orientados por assunto, variante no tempo e volátil.",
        e2: "um conjunto de regra",
        resp: "a2"
    },
    {
        question2: "Os principais componentes do esquema estrela de modelagem de dados multidimensionais são",
        a2: "a tabela de fatos, os relacionamentos, os atributos e as chaves.",
        b2: "a tabela de fatos, as dimensões, os atributos e a hierarquia de atributos. --",
        c2: "as entidades, os relacionamentos, os atributos e as chaves primárias. ",
        d2: "as entidades, as dimensões, os atributos e as chaves estrangeiras.",
        e2: "as entidades, os auto- relacionamentos, os atributos multidimensionais e as dimensões degeneradas.",
        resp: "b2"
    },
    {
        question2: "As alternativas a seguir apresentam funcionalidades típicas de um datawarehouse, à exceção de uma.\nAssinale‐a.",
        a2: "Roll‐up, Drill‐down.",
        b2: "Slice e Dice, Seleção.",
        c2: "Giro e Ordenação.",
        d2: "Seleção e Merge‐hash. --",
        e2: "Drill‐down e Giro.",
        resp: "d2"
    },
    {
        question2: "A partir das boas práticas relacionadas à Arquitetura Orientada a Serviços (Service Oriented Architecture – SOA), analise as afirmativas a seguir \n I. A especificação WSDL é o padrão que define como especificar o contrato de uso dos serviços. Logo, antes do início da implementação dos serviços, a aplicação da abordagem contract‐first design no desenvolvimento SOA deve ser baseada na especificação de documentos WSDL. \n  II. Um consumidor de serviços usa as informações contidas no documento SOAP para gerar um Proxy local de um serviço remoto. \n  III. Os serviços Web devem, sempre que possível, manter estado entre chamadas. Esse tipo de prática, além de facilitar a implementação do serviço, melhora a escalabilidade da solução SOA. \n Assinale: ",
        a2: "se somente a afirmativa I estiver correta. --",
        b2: "se somente a afirmativa II estiver correta.",
        c2: "se somente a afirmativa III estiver correta.",
        d2: "se somente as afirmativas I e II estiverem corretas.",
        e2: "se todas as afirmativas estiverem corretas.",
        resp: "a2"
    },
    {
        question2: "Em relação ao servidor de aplicação Java EE (Java Enterprise Edition), analise as afirmativas a seguir. \n I. O servidor de aplicação Java EE difere de um servidor web tradicional por fornecer componentes que manipulam páginas JSP, servlets e por gerenciar a conexão com bancos de dados.\n II.O servidor de aplicação Java EE implementa as APIs da plataforma Java EE e fornece os serviços padrão do Java EE. Podemos relacionar o Tomcat, JBoss e WebSphere como exemplos de servidores de aplicação Java EE. \n III. Um dos componentes da plataforma JEE é o Enterprise JavaBeans (EJB), cujos os principais objetivos são fornecer um desenvolvimento rápido e simplificado de aplicações Java baseado em componentes distribuídos, transacionais, seguros e portáveis.\n Assinale ",
        a2: "se somente a afirmativa I estiver correta.",
        b2: "se somente a afirmativa I e II estiverem corretas.",
        c2: "se somente a afirmativa I e III estiverem corretas.",
        d2: "se somente as afirmativas II e III estiverem corretas.",
        e2: "se todas as afirmativas estiverem corretas. --",
        resp: "e2"
    },
    {
        question2: "Os recursos de TI identificados pelo COBIT são Aplicações,Informações, Infraestrutura e Pessoas.   A respeito do conceito de tais recursos, assinale V para a afirmativa verdadeira e F para a falsa. \n (   ) Aplicações: são os sistemas automatizados para os usuários finais e, inclusive, todos os procedimentos manuais que processam informações. \n  Informações: são os dados em todas as suas formas possíveis, a entrada, o processamento e a saída fornecida pelo sistema de informação, em qualquer formato a ser utilizado pelos negócios. \n (   ) Infraestrutura: refere‐se à tecnologia e a todos os recursos que possibilitam o processamento dos aplicativos computacionais.\n (   ) Pessoas: são os funcionários requeridos para planejar, organizar, adquirir, implementar, entregar, suportar, monitorar e avaliar os sistemas de informação e serviços. \n As afirmativas são, respectivamente",
        a2: "V, V, V e V. --",
        b2: "F, F, V e V.",
        c2: "V, V, F e F.",
        d2: "F, V, F e V.",
        e2: "F, V, F e V.",
        resp: "a2"
    },
    {
        question2: "O modelo ITIL recomenda que o Gerenciamento de Serviços de TI utilize alguns acordos para formalizar relações relevantes entre alguns atores envolvidos. A esse respeito, assinale V para a afirmativa verdadeira e F para a falsa. \n  (   ) O Acordo de Nível de Serviço (ANS) é firmado entre o Provedor de Serviço de TI e um Cliente a fim de especificar, para um determinado Serviço de TI, as responsabilidades e   os compromissos assumidos por cada um. \n  (   ) O Acordo de Nível Operacional (ANO) é firmado entre o Provedor de Serviço de TI e os operadores que atuam nos processos ITIL, a fim de especificar os papéis e as responsabilidades assumidos por cada operador em cada processo. \n (   ) O Acordo de Nível Gerencial (ANG) é firmado entre o Provedor de Serviço de TI e outra parte da mesma Organização, a fim de fixar as responsabilidades de ambas as partes no que diz respeito ao envolvimento daquela parte da Organização no suporte a Serviços de TI entregues pelo Provedor de Serviços de TI aos seus Clientes.\n As afirmativas são,respectivamente, ",
        a2: "V, V e V.",
        b2: "F, V e V.",
        c2: "V, F e F. --",
        d2: "V, V e F.",
        e2: "F, F e F",
        resp: "c2"
    }
]

const testeAds2 = [
    {
        question2: "Apresenta um conceito correto associado à Análise e Projeto Orientado a Objetos (OO):",
        a2: "Atributos, também chamados de métodos ou serviços, fornecem uma representação de um dos comportamentos da classe.",
        b2: "Subclasse é uma especialização da superclasse. Uma subclasse pode herdar tanto atributos quanto operações de uma superclasse. --",
        c2: "Classe abstrata, também chamada de classe bean, é uma generalização de um conjunto de classes a ela relacionada.",
        d2: "Métodos são instâncias de uma classe específica que herdam os atributos e operações da classe.",
        e2: "Objeto é uma descrição generalizada que descreve uma coleção de métodos semelhantes e encapsula dados e abstrações procedurais necessárias para descrever alguma classe do mundo real.",
        resp: "b2"
    },
    {
        question2: "Considere que um Analista de Sistemas e sua equipe trabalham utilizando o ciclo de vida clássico de software. Na etapa atual eles estão descrevendo as tarefas técnicas a serem conduzidas no desenvolvimento, levantando os riscos prováveis, os recursos que serão necessários, os produtos de trabalho a serem produzidos, bem como definindo um cronograma de trabalho. A equipe está na fase de",
        a2: "Modelagem.",
        b2: "Construção.",
        c2: "Implantação.",
        d2: "Planejamento. --",
        e2: "Levantamento de Requisitos.",
        resp: "d2"
    },
    {
        question2: "Um Analista de Sistemas e sua equipe realizaram o levantamento de requisitos de um sistema e listaram os seguintes requisitos:\n I. O sistema deve permitir a inclusão, alteração e remoção de funcionários com os atributos da ficha de cadastro, como nome, endereço, CPF, RG, etc. Cada processo tem um único número identificador.\n  II. O sistema não deve revelar aos usuários nenhuma informação pessoal sobre os réus dos processos.\n III. O usuário deve ser capaz de buscar todas as informações sobre um processo armazenado no BD ou selecionar um subconjunto de informações dele. \n IV. O tempo de resposta a um pedido ou consulta de um usuário externo não pode ultrapassar 10 segundos.\n V. O sistema deve implementar o sistema CAPTCHA que requer que o usuário identifique as letras ou dígitos de uma imagem distorcida.\n  São requisitos não funcionais o que consta APENAS em    ",
        a2: "I e II.",
        b2: "III e IV",
        c2: "II, IV e V. --",
        d2: "I, II e III.",
        e2: "III, IV e V.",
        resp: "c2"
    },
    {
        question2: "No Processo Unificado (PU), os requisitos do sistema são especificados através da identificação das necessidades de usuários e clientes e são normalmente expressos em casos de uso representados na notação UML. Estes requisitos são, geralmente, assim distribuídos pelas fases do PU: \n I. Nesta fase os requisitos são analisados, permitindo aos desenvolvedores identificar o real tamanho do sistema. Ao final desta fase 80% dos requisitos do sistema já devem ter sido descritos, porém apenas 5% ou 10% destes requisitos terão sido implementados.\n II. Nesta fase praticamente não há requisitos a serem identificados, a menos que ocorram mudanças nos mesmos.\n III. Os requisitos remanescentes serão identificados e implementados durante esta fase. \n IV. Durante esta fase os requisitos mais importantes são identificados, delimitando o domínio do sistema.\n As fases de I a IV são, correta e respectivamente:  ",
        a2: "Elaboração − Transição − Construção − Concepção. --",
        b2: "Concepção − Elaboração − Transição − Construção.",
        c2: "Construção − Concepção − Elaboração − Transição.",
        d2: "Transição − Construção − Concepção − Elaboração.",
        e2: "Construção − Transição − Elaboração − Concepção.",
        resp: "a2"
    },
    {
        question2: "Considere que o Time Scrum que atua no Ministério Público do Estado da Paraíba se reuniu por 8 horas, ao final de uma Sprint de 1 mês de duração (4 semanas). A reunião foi dividida em duas partes, cada uma com 4 horas, de forma que em cada parte o foco estava na resposta às seguintes questões: \n − Parte 1: O que será entregue como resultado do incremento da próxima Sprint? \n − Parte 2: Como o trabalho necessário para entregar o incremento será realizado?  Eles realizaram a reunião \n  ",
        a2: "Daily Scrum.",
        b2: "Sprint Review.",
        c2: "Sprint Retrospective.",
        d2: "Sprint Planning. --",
        e2: "Sprint Grooming.",
        resp: "d2"
    },
    {
        question2:"Considere a seguinte instrução CSS3, presente em um bloco incorporado em uma página HTML5: div[id$='inferior']{background:#0000FF} \n  É correto afirmar que a cor de fundo azul será aplicada no elemento div cujo valor do atributo id ",
        a2: "inicie com a palavra inferior.",
        b2: "termine com a palavra inferior. --",
        c2: "seja igual à palavra inferior.",
        d2: "contenha, em qualquer parte, a palavra inferior.",
        e2: "não contenha a palavra inferior.",
        resp: "b2"
    },
    { //RESOLVER ISSO
        question2: "A linguagem JavaScript pode ser usada para tratar eventos referentes à entrada de dados em formulários, a ações do usuário e a ações do navegador. Os atributos de evento usados em tags HTML permitem executar comandos ou chamar funções em trechos de código JavaScript internos ou externos à página. Para criar um campo do tipo texto em um formulário HTML de forma que quando o usuário soltar uma tecla que foi pressionada nesse campo seja chamada uma função JavaScript denominada verificar utiliza-se a instrução",
        a2: "'<input type='text' onkeyup='verificar()'> --'",
        b2: "'<input type='text' onkeydown='verificar()'>'",
        c2: "'<input type='text' onkeypress='verificar()'>'",
        d2: "'<input type='text' onkeydrop='verificar()'>'",
        e2: "'<input type='text' onkeyrelease='verificar()'>'",
        resp: "a2"
    },
    {
        question2: "Em relação ao Selenium IDE 2.5.0 é correto afirmar:",
        a2: "O Selenium IDE é um plugin, desta forma pode ser instalado em qualquer navegador, exceto no Firefox.",
        b2: "Como resposta à execução de um script, o Selenium IDE envia suas telas de resultado para até 3 navegadores ao mesmo tempo.",
        c2: "Para executar um script no Selenium IDE basta clicar no botão Execute Script e todas as ações serão executadas no navegador da preferência do usuário.",
        d2: "É uma IDE da Microsoft para desenvolvimento de aplicações web utilizando ASP.NET.",
        e2: "Ao final da execução, o Selenium IDE identifica o script com sucesso ou falha. Um script com erro apresenta o indicativo de qual problema ocorreu na aba de Mensagens.",
        resp: "e2"
    },
    {
        question2: "São padrões de desenvolvimento aplicados a SOA:",
        a2: "WSDL, UDDI, SOAP. --",
        b2: "HTML 2, UDDI, SOAP.",
        c2: "ADSL, XQUERY, WSDL.",
        d2: "XML, UDDI, FCAL.",
        e2: "FCAL, UDP, FDDI.",
        resp: "a2"
    },
    {
        question2: "O GIT possibilita controlar versões de componentes de software com as facilidades de",
        a2: "armazenar alterações de fontes de programas como uma lista de mudanças por arquivo, registrando portanto um conjunto de arquivos e as mudanças feitas a cada arquivo ao longo do tempo.",
        b2: "armazenar alterações de fontes de programas em um único arquivo de registro de alterações subsequentes que funciona como um LOG de modificações de fontes que pode ser aplicado para desfazê-las a qualquer tempo.",
        c2: "replicar cópias de cada componente quando da sua modificação, atualizando repositórios de arquivos locais nas estações de trabalho de cada desenvolvedor catalogado como membro do projeto de software em questão.",
        d2: "navegar no histórico das modificações, consultando diretamente as cópias dos arquivos físicos de cada versão, a partir de um repositório localizado no servidor de programas fonte.",
        e2: "navegar no histórico das versões, consultando snapshots referentes aos arquivos físicos do servidor de fontes que são guardados em um banco de dados local da máquina do desenvolvedor. --",
        resp: "e2"
    }
]
//#endregion

//Questão
let questao2 = document.querySelector('.questao2')
let answerEls2 = document.querySelectorAll('.answer2')
let questionEls2 = document.querySelector('#pergunta2')

//Alternativas
let a2_text = document.querySelector('#a2_text')
let b2_text = document.querySelector('#b2_text')
let c2_text = document.querySelector('#c2_text')
let d2_text = document.querySelector('#d2_text')
let e2_text = document.querySelector('#e2_text')
let submitBtn2 = document.querySelector('#submit2')

//Gera prova de ADS
let currentQuiz2 = 0
let score2 = 0
let tempArray2 = [testeAds, testeAds1, testeAds2]
let provaRandom2 = tempArray2[Math.floor(Math.random() * tempArray2.length)]

function loadQuiz2(){

    deselectAnswers2()

    let currentQuizData2 = provaRandom2[currentQuiz2]

    questionEls2.innerHTML = currentQuizData2.question2
    a2_text.innerHTML = currentQuizData2.a2
    b2_text.innerHTML = currentQuizData2.b2
    c2_text.innerHTML = currentQuizData2.c2
    d2_text.innerHTML = currentQuizData2.d2
    e2_text.innerHTML = currentQuizData2.e2

    submitBtn2.addEventListener('click', () => {
        let answer = getSelect2()
        if(answer){
            if(answer == provaRandom2[currentQuiz2].resp){
                score2++
            }
    
            currentQuiz2++
    
            if(currentQuiz2 < provaRandom2.length){
                loadQuiz2()
            }else{
                questao2.innerHTML = `
                    <div class="box-final">
                        <div class="final-content">
                            <div class="result">
                                <h3>Nota</h3>
                                <h5>${score2}</h5>
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
        if(currentQuiz2 >= provaRandom2.length) clearInterval(temp)
    })
}
loadQuiz2()
temporizador2()

function temporizador2(){
    const startingMinutes = 10
    let time = startingMinutes * 60

    const countdownEl = document.querySelector('.countdown2')

    temp = setInterval(updateCountdown, 1000)

    function updateCountdown(){
        minutes = Math.floor(time / 60)
        seconds = time % 60

        countdownEl.innerHTML = `${minutes}: ${seconds}`
        time-- 

        if(minutes && seconds < 0){
            clearInterval(temp)
            countdownEl.innerHTML = `0${0}: 0${0}`
            questao2.innerHTML = `
                <div class="box-final">
                    <div class="final-content">
                        <div class="result">
                            <h3>Nota</h3>
                            <h5>${score2}</h5>
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

function deselectAnswers2(){
    answerEls2.forEach(answerEl => answerEl.checked = false)
}

function getSelect2(){
    let answer
    answerEls2.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}