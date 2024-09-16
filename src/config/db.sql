create database Questionario;

use database Questionario;

-- Administradores --
create table Administradores (
    id int primary key auto_increment,
    nome varchar(255) not null,
    email varchar(255) not null,
    senha varchar(255) not null,
    data_cadastro datetime not null
);

-- Professores/Escolas --
create table Escolas (
    id int primary key auto_increment,
    endereco varchar(255) not null,
    cidade varchar(255) not null,
    estado varchar(255) not null,
    cep varchar(255) not null,
    telefone varchar(255) not null,
    email varchar(255) not null,
    data_cadastro datetime not null,
);

create table Professores (
    id int primary key auto_increment,
    nome varchar(255) not null,
    email varchar(255) not null,
    senha varchar(255) not null,
    cargo varchar(255) not null,
    data_cadastro datetime not null
);

create table Turmas (
    id int primary key auto_increment,
    nome varchar(255) not null,
    data_cadastro datetime not null,
);

create table Escola_Turma (
    id int primary key auto_increment,
    id_escola int not null,
    id_turma int not null,
    data_cadastro datetime not null,
    foreign key (id_escola) references Escolas(id),
    foreign key (id_turma) references Turmas(id)
);

create table Escola_Professor (
    id int primary key auto_increment,
    id_escola int not null,
    id_professor int not null,
    data_cadastro datetime not null,
    foreign key (id_escola) references Escolas(id),
    foreign key (id_professor) references Professores(id)
);

create table Turma_Professor (
    id int primary key auto_increment,
    id_turma int not null,
    id_professor int not null,
    data_cadastro datetime not null,
    foreign key (id_turma) references Turmas(id),
    foreign key (id_professor) references Professores(id)
);

-- Alunos --
create table Alunos (
    id int primary key auto_increment,
    nome varchar(255) not null,
    ra varchar(255) not null,
    email varchar(255) not null,
    senha varchar(255) not null,
    idade int not null,
    sexo varchar(1) not null,
    turma varchar(255) not null,
    etnia varchar(255) not null,
    endereco varchar(255) not null,
    cidade varchar(255) not null,
    estado varchar(255) not null,
    cep varchar(255) not null,
    telefone varchar(255) not null,
    celular varchar(255) not null,
    data_nascimento date not null,
    data_cadastro datetime not null
);

create table Aluno_Turma (
    id int primary key auto_increment,
    id_aluno int not null,
    id_turma int not null,
    data_cadastro datetime not null,
    foreign key (id_aluno) references Alunos(id),
    foreign key (id_turma) references Turmas(id)
);

-- Questionários --
create table Questionarios (
    id int primary key auto_increment,
    titulo varchar(255) not null,
    tipo varchar(255) not null,
    descricao text not null,

    data_cadastro datetime not null
);

create table Questionario_Pergunta (
    id int primary key auto_increment,
    id_questionario int not null,
    id_pergunta int not null,
    data_cadastro datetime not null,
    foreign key (id_questionario) references Questionarios(id),
    foreign key (id_pergunta) references Perguntas(id)
);

create table Perguntas (
    id int primary key auto_increment,
    pergunta text not null,
    data_cadastro datetime not null
);

create table Pergunta_Alternativas (
    id int primary key auto_increment,
    id_pergunta int not null,
    alternativa text not null,
    correta boolean not null,
    data_cadastro datetime not null,
    foreign key (id_pergunta) references Perguntas(id)
);

create table Turma_Questionario (
    id int primary key auto_increment,
    id_turma int not null,
    id_questionario int not null,
    data_inicio datetime not null,
    data_fim datetime not null,
    data_cadastro datetime not null,
    foreign key (id_turma) references Turmas(id),
    foreign key (id_questionario) references Questionarios(id)
);

-- Resultados --
create table Resultados (
    id int primary key auto_increment,
    id_aluno int not null,
    id_questionario int not null,
    nota double(10,2) not null,
    data_cadastro datetime not null,
    foreign key (id_aluno) references Alunos(id),
    foreign key (id_questionario) references Questionarios(id)
);

-- Logs --
create table Logs (
    id int primary key auto_increment,
    id_usuario int not null,
    acao varchar(255) not null,
    data_cadastro datetime not null,
    foreign key (id_usuario) references Administradores(id)
);

