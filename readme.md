<h1>Entrega Final - Projeto A3 - Sistemas Distribuídos</h1>

<h3>4°Semestre (2023.2) - UNIFACS - Ciências da Computação</h3>

<h3>Instruções:</h3>

<h4>1. Criar ambiente virtual do Python (opcional):</h4>

Linux:

```bash
cd ./src/api && python3 -m venv .venv && source ./.venv/bin/activate && cd ../../
```

Windows:

```bash
cd ./src/api && python3 -m venv .venv && source ./.venv/Scripts/Activate && cd ../../
```

<h4>2. Instalar as dependências </h4>

```bash
cd ./src/api && pip install -r requirements.txt && cd ../frontend && npm install && cd ../../
```

<h4>3. Rodar o servidor da API </h4>

```bash
cd ./src/api && python main.py
```

<h4>4. Em um novo terminal, rodar o client: </h4>

```bash
cd ./src/frontend && npm run dev
```
