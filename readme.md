<h1>Entrega Final - Projeto A3 - Sistemas Distribuídos</h1>

<h3>4°Semestre (2023.2) - UNIFACS - Ciências da Computação</h3>

<h3>Instruções:</h3>

<h3>É necessário ter o Python, pip e o node instalado.</h3>

[Download do Python](https://www.python.org/downloads/)
[Download do Node](https://nodejs.org/en)

Para instalar o pip:
```bash
cd src/api && pip install -r requirements.txt
```

<h4>1. Clonar o projeto com o git e usar na sua IDE de preferência.</h4>

```bash
git clone https://github.com/nicklima-amigos/EntregaFinalA3-SD.git
```

<h4>2. Criar ambiente virtual do Python (opcional):</h4>

Linux:

```bash
cd ./src/api && python3 -m venv .venv && source ./.venv/bin/activate && cd ../../
```

Windows (PowerShell):

```bash
cd .\src\api && python -m venv .venv && .\.venv\Scripts\Activate && cd ..\..\
```

<h4>3. Instalar as dependências dentro da pasta raiz do projeto </h4>

```bash
npm install && npm run install:all
```

<h4>4. Executar server e client </h4>

```bash
npm run start:all
```

<h4>5. Acessar a documentação da API no Swagger no seu navegador</h4>

```bash
http://localhost:8000/docs
```