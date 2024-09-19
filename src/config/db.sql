-- Administradores --
create table Administradores (
    id SERIAL PRIMARY KEY,
    nome varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    senha varchar(255) NOT NULL,
    data_cadastro TIMESTAMP NOT NULL
);

-- Professores/Escolas --
create table Escolas (
    id SERIAL PRIMARY KEY,
    nome varchar(255) NOT NULL,
    endereco varchar(255) NOT NULL,
    cidade varchar(255) NOT NULL,
    estado varchar(255) NOT NULL,
    cep varchar(255) NOT NULL,
    telefone varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    data_cadastro TIMESTAMP NOT NULL
);

create table Professores (
    id SERIAL PRIMARY KEY,
    nome varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    senha varchar(255) NOT NULL,
    cargo varchar(255) NOT NULL,
    data_cadastro TIMESTAMP NOT NULL
);

create table Turmas (
    id SERIAL PRIMARY KEY,
    nome varchar(255) NOT NULL,
    data_cadastro TIMESTAMP NOT NULL
);

create table Escola_Professor (
    id SERIAL PRIMARY KEY,
    id_escola INT NOT NULL,
    id_professor INT NOT NULL,
    id_turma INT NOT NULL,
    data_cadastro TIMESTAMP NOT NULL,
    foreign key (id_escola) references Escolas(id),
    foreign key (id_professor) references Professores(id),
    foreign key (id_turma) references Turmas(id)
);

-- Alunos --
create table Alunos (
    id SERIAL PRIMARY KEY,
    ra varchar(255) NOT NULL,
    nome varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    senha varchar(255) NOT NULL,
    idade INT NOT NULL,
    sexo varchar(1) NOT NULL,
    etnia varchar(255) NOT NULL,
    endereco varchar(255) NOT NULL,
    cidade varchar(255) NOT NULL,
    estado varchar(255) NOT NULL,
    cep varchar(255) NOT NULL,
    telefone varchar(255) NOT NULL,
    celular varchar(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    data_cadastro TIMESTAMP NOT NULL
);

create table Aluno_Turma (
    id SERIAL PRIMARY KEY,
    id_aluno INT NOT NULL,
    id_escola INT NOT NULL,
    id_turma INT NOT NULL,
    data_cadastro TIMESTAMP NOT NULL,
    foreign key (id_aluno) references Alunos(id),
    foreign key (id_turma) references Turmas(id),
    foreign key (id_escola) references Escolas(id)
);

-- Questionários --
create table Questionarios (
    id SERIAL PRIMARY KEY,
    titulo varchar(255) NOT NULL,
    tipo varchar(255) NOT NULL,
    descricao TEXT NOT NULL,
    data_cadastro TIMESTAMP NOT NULL
);

create table Perguntas (
    id SERIAL PRIMARY KEY,
    titulo varchar(255) NOT NULL,
    pergunta TEXT NOT NULL,
    tipo varchar(255) NOT NULL,
    data_cadastro TIMESTAMP NOT NULL
);

create table Questionario_Pergunta (
    id SERIAL PRIMARY KEY,
    id_questionario INT NOT NULL,
    id_pergunta INT NOT NULL,
    data_cadastro TIMESTAMP NOT NULL,
    foreign key (id_questionario) references Questionarios(id),
    foreign key (id_pergunta) references Perguntas(id)
);

create table Pergunta_Alternativas (
    id SERIAL PRIMARY KEY,
    id_pergunta INT NOT NULL,
    alternativa TEXT NOT NULL,
    correta BOOLEAN NOT NULL,
    data_cadastro TIMESTAMP NOT NULL,
    foreign key (id_pergunta) references Perguntas(id)
);

create table Turma_Questionario (
    id SERIAL PRIMARY KEY,
    id_turma INT NOT NULL,
    id_questionario INT NOT NULL,
    data_inicio TIMESTAMP NOT NULL,
    data_fim TIMESTAMP NOT NULL,
    data_cadastro TIMESTAMP NOT NULL,
    foreign key (id_turma) references Turmas(id),
    foreign key (id_questionario) references Questionarios(id)
);

-- Resultados --
CREATE TABLE Respostas_Aluno (
    id SERIAL PRIMARY KEY,
    id_aluno INT NOT NULL,
    id_pergunta INT NOT NULL,
    resposta TEXT NOT NULL,
    acerto DECIMAL(10,2) NOT NULL,
    data_cadastro TIMESTAMP NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES Alunos(id),
    FOREIGN KEY (id_pergunta) REFERENCES Perguntas(id)
);

CREATE TABLE Resultados_Aluno (
    id SERIAL PRIMARY KEY,
    id_aluno INT NOT NULL,
    id_turma INT NOT NULL,
    id_questionario INT NOT NULL,
    nota DECIMAL(10,2) NOT NULL, 
    data_cadastro TIMESTAMP NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES Alunos(id),
    FOREIGN KEY (id_turma) REFERENCES Turmas(id),
    FOREIGN KEY (id_questionario) REFERENCES Questionarios(id)
);


-- Logs --
-- create table Logs (
--     id SERIAL PRIMARY KEY,
--     id_usuario INT NOT NULL,
--     acao varchar(255) NOT NULL,
--     data_cadastro TIMESTAMP NOT NULL,
--     foreign key (id_usuario) references Administradores(id)
-- );

