-- Seed --
insert into Administradores 
    (nome, email, senha, data_cadastro)
values 
    ('Victor Zanin Rubinec', 'vrubinec@gmail.com', 'psr40370', NOW());

insert into Escolas 
    (nome, endereco, cidade, estado, cep, telefone, email, data_cadastro)
values 
    ('Escola Estadual Monte Verde', 'Rua das Flores, 123', 'São Paulo', 'SP', '01000-000', '(11) 1234-5678', 'escola@gmail.com', NOW());

insert into Professores
    (nome, email, senha, cargo, data_cadastro)
values 
    ('Ana Carolina Silva', 'ana.silva@gmail.com', 'senha123', 'Coordenadora', NOW()),
    ('Marcos Vinícius Almeida', 'marcos.almeida@gmail.com', 'senha456', 'Professor', NOW());

INSERT INTO Alunos 
    (nome, ra, email, senha, idade, sexo, etnia, endereco, cidade, estado, cep, telefone, celular, data_nascimento, data_cadastro)
VALUES 
    ('Pedro Henrique Souza', '123456', 'pedro.souza@gmail.com', 'senha123', 12, 'M', 'Pardo', 'Rua das Flores, 45', 'São Paulo', 'SP', '01234-567', '(11) 9876-5432', '(11) 91234-5678', CURRENT_DATE - INTERVAL '12 years', NOW()),
    ('Mariana Oliveira Costa', '123457', 'mariana.costa@gmail.com', 'senha123', 11, 'F', 'Branca', 'Avenida Paulista, 1234', 'São Paulo', 'SP', '01310-000', '(11) 9876-5433', '(11) 91234-5679', CURRENT_DATE - INTERVAL '11 years', NOW()),
    ('Lucas Pereira Lima', '123458', 'lucas.lima@gmail.com', 'senha123', 13, 'M', 'Negra', 'Rua das Acácias, 789', 'São Paulo', 'SP', '02041-001', '(11) 9876-5434', '(11) 91234-5670', CURRENT_DATE - INTERVAL '13 years', NOW()),
    ('Ana Clara Martins', '123459', 'ana.martins@gmail.com', 'senha123', 12, 'F', 'Amarela', 'Rua dos Pinheiros, 56', 'São Paulo', 'SP', '02510-230', '(11) 9876-5435', '(11) 91234-5671', CURRENT_DATE - INTERVAL '12 years', NOW()),
    ('João Pedro Santos', '123460', 'joao.santos@gmail.com', 'senha123', 11, 'M', 'Branca', 'Rua das Palmeiras, 33', 'São Paulo', 'SP', '03034-000', '(11) 9876-5436', '(11) 91234-5672', CURRENT_DATE - INTERVAL '11 years', NOW()),
    ('Isabela Ferreira Alves', '123461', 'isabela.alves@gmail.com', 'senha123', 13, 'F', 'Indígena', 'Rua das Hortências, 123', 'São Paulo', 'SP', '04050-100', '(11) 9876-5437', '(11) 91234-5673', CURRENT_DATE - INTERVAL '13 years', NOW()),
    ('Gabriel Nogueira Silva', '123462', 'gabriel.silva@gmail.com', 'senha123', 12, 'M', 'Pardo', 'Rua das Magnólias, 456', 'São Paulo', 'SP', '05010-001', '(11) 9876-5438', '(11) 91234-5674', CURRENT_DATE - INTERVAL '12 years', NOW()),
    ('Laura Almeida Rocha', '123463', 'laura.rocha@gmail.com', 'senha123', 11, 'F', 'Branca', 'Rua dos Lírios, 789', 'São Paulo', 'SP', '06010-100', '(11) 9876-5439', '(11) 91234-5675', CURRENT_DATE - INTERVAL '11 years', NOW()),
    ('Rafael Mendes Barbosa', '123464', 'rafael.barbosa@gmail.com', 'senha123', 13, 'M', 'Negra', 'Avenida Brasil, 987', 'São Paulo', 'SP', '07015-000', '(11) 9876-5440', '(11) 91234-5676', CURRENT_DATE - INTERVAL '13 years', NOW());

insert into Turmas
    (nome, data_cadastro)
values 
    ('8°', NOW());

insert into Escola_Professor 
    (id_escola, id_professor, id_turma, data_cadastro)
values 
    (1, 1, 1, NOW()),
    (1, 2, 1, NOW());

insert into Aluno_Turma 
    (id_aluno, id_escola, id_turma, data_cadastro)
values
    (1, 1, 1, NOW()),
    (2, 1, 1, NOW()),
    (3, 1, 1, NOW()),
    (4, 1, 1, NOW()),
    (5, 1, 1, NOW()),
    (6, 1, 1, NOW()),
    (7, 1, 1, NOW()),
    (8, 1, 1, NOW()),
    (9, 1, 1, NOW());

INSERT INTO Questionarios 
    (titulo, tipo, descricao, data_cadastro)
VALUES 
    ('Geografia e Matemática', 'Prova', 'Este questionário aborda temas relacionados à geografia brasileira e conceitos matemáticos básicos. Nas questões de geografia, exploramos a diversidade dos biomas brasileiros, suas características e a extensão territorial das diferentes regiões do país. Já nas perguntas de matemática, focamos na compreensão de perímetros e frações, desafiando os alunos a completar frases que envolvem cálculos simples. O objetivo é avaliar o conhecimento dos alunos sobre a relação entre a geografia e a matemática, proporcionando uma visão integrada dos conteúdos estudados.', NOW());

INSERT INTO Perguntas 
    (titulo, pergunta, tipo, data_cadastro)
VALUES 
    ('Selecione as alternativas corretas', 'Quais destes são biomas brasileiros?', 'checkbox', NOW()),
    ('Selecione a alternativa correta', 'Qual é a maior região do Brasil em extensão territorial?', 'radio', NOW()),
    ('Complete a frase:', 'O Brasil é dividido em _____ regiões.', 'textComplete', NOW()),
    ('Complete a frase:', 'A capital do estado de São Paulo é _____.', 'textComplete', NOW()),
    ('Complete a frase:', 'O perímetro de um quadrado com lados de 3 cm é _____ cm.', 'textComplete', NOW()),
    ('Qual é o valor de X?', '2X + 3 = 9', 'text', NOW());


INSERT INTO Pergunta_Alternativas 
    (id_pergunta, alternativa, correta, data_cadastro)
VALUES 
    (1, 'Amazônia', TRUE, NOW()),
    (1, 'Pampa', TRUE, NOW()),
    (1, 'Deserto do Saara', FALSE, NOW()),
    (1, 'Cerrado', TRUE, NOW()),
    (2, 'Norte', TRUE, NOW()),
    (2, 'Sul', FALSE, NOW()),
    (2, 'Centro-Oeste', FALSE, NOW()),
    (2, 'Nordeste', FALSE, NOW()),
    (3, '5', TRUE, NOW()),
    (4, 'São Paulo', TRUE, NOW()),
    (5, '12', TRUE, NOW()),
    (6, '3', TRUE, NOW());

INSERT INTO Questionario_Pergunta 
    (id_questionario, id_pergunta, data_cadastro)
VALUES 
    (1, 1, NOW()),
    (1, 2, NOW()),
    (1, 3, NOW()),
    (1, 4, NOW()),
    (1, 5, NOW()),
    (1, 6, NOW());

insert into Turma_Questionario 
    (id_turma, id_questionario, data_inicio, data_fim, data_cadastro)
values 
    (1, 1, '2024-10-19 13:00:00', '2024-10-19 15:00:00', NOW());

