create database Questionario;

use database Questionario;

create table Usuario (
    id int primary key auto_increment,
    cargo varchar(255) not null,
    nome varchar(255) not null,
    email varchar(255) not null,
    senha varchar(255) not null
);

create table Pergunta (
    id int primary key auto_increment,
    tipo varchar(255) not null,
    pergunta varchar(255) not null,
);

create table Alternativa (
    id int primary key auto_increment,
    id_pergunta int not null,
    alternativa varchar(255) not null,
    correta boolean not null,
    foreign key (id_pergunta) references Pergunta(id)
);

create table Prova (
    id int primary key auto_increment,
    nome varchar(255) not null,
);

create table PerguntasProva (
    id int primary key auto_increment,
    id_pergunta int not null,
    id_prova int not null,
    foreign key (id_pergunta) references Pergunta(id),
    foreign key (id_prova) references Prova(id)
);