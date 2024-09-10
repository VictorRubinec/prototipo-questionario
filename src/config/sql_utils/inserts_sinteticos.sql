-- Seed --
insert into Administradores 
    (nome, email, senha) 
values 
    ('Victor Zanin Rubinec', 'vrubinec@gmail.com', 'Psr40370');

insert into Escolas 
    (endereco, cidade, estado, cep, telefone, email, data_cadastro)
values 
    ('Rua das Flores, 123', 'São Paulo', 'SP', '01000-000', '(11) 1234-5678', 'contato@escola1.com', NOW()),
    ('Av. Central, 456', 'Rio de Janeiro', 'RJ', '20000-000', '(21) 2345-6789', 'contato@escola2.com', NOW()),
    ('Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', 'contato@escola3.com', NOW());

insert into Turmas 
    (nome, data_cadastro)
values 
    ('Turma A', NOW()),
    ('Turma B', NOW()),
    ('Turma C', NOW()),
    ('Turma D', NOW()),
    ('Turma E', NOW()),
    ('Turma F', NOW()),
    ('Turma G', NOW()),
    ('Turma H', NOW()),
    ('Turma I', NOW());

insert into Escola_Turma 
    (id_escola, id_turma, data_cadastro)
values 
    (1, 1, NOW()),
    (1, 2, NOW()),
    (1, 3, NOW()),
    (2, 4, NOW()),
    (2, 5, NOW()),
    (2, 6, NOW()),
    (3, 7, NOW()),
    (3, 8, NOW()),
    (3, 9, NOW());

insert into Professores 
    (nome, email, senha, data_cadastro)
values 
    ('Professor A', 'professorA@escola1.com', 'senha123', NOW()),
    ('Professor B', 'professorB@escola1.com', 'senha123', NOW()),
    ('Professor C', 'professorC@escola1.com', 'senha123', NOW()),
    ('Professor D', 'professorD@escola2.com', 'senha123', NOW()),
    ('Professor E', 'professorE@escola2.com', 'senha123', NOW()),
    ('Professor F', 'professorF@escola2.com', 'senha123', NOW()),
    ('Professor G', 'professorG@escola3.com', 'senha123', NOW()),
    ('Professor H', 'professorH@escola3.com', 'senha123', NOW()),
    ('Professor I', 'professorI@escola3.com', 'senha123', NOW());

insert into Escola_Professor 
    (id_escola, id_professor, data_cadastro)
values
    (1, 1, NOW()),
    (1, 2, NOW()),
    (1, 3, NOW()),
    (2, 4, NOW()),
    (2, 5, NOW()),
    (2, 6, NOW()),
    (3, 7, NOW()),
    (3, 8, NOW()),
    (3, 9, NOW());

insert into Turma_Professor
    (id_turma, id_professor, data_cadastro)
values 
    (1, 1, NOW()),
    (2, 2, NOW()),
    (3, 3, NOW()),
    (4, 4, NOW()),
    (5, 5, NOW()),
    (6, 6, NOW()),
    (7, 7, NOW()),
    (8, 8, NOW()),
    (9, 9, NOW());

insert into Alunos 
    (nome, email, senha, idade, sexo, turma, etnia, endereco, cidade, estado, cep, telefone, celular, data_cadastro)
values 
    ('Aluno 1', 'aluno1@escola1.com', 'senha123', 12, 'M', 'Turma A', 'Branco', 'Rua das Flores, 123', 'São Paulo', 'SP', '01000-000', '(11) 1234-5678', '(11) 91234-5678', NOW()),
    ('Aluno 2', 'aluno2@escola1.com', 'senha123', 13, 'F', 'Turma A', 'Negro', 'Rua das Flores, 123', 'São Paulo', 'SP', '01000-000', '(11) 1234-5678', '(11) 91234-5678', NOW()),
    ('Aluno 3', 'aluno3@escola1.com', 'senha123', 14, 'M', 'Turma A', 'Pardo', 'Rua das Flores, 123', 'São Paulo', 'SP', '01000-000', '(11) 1234-5678', '(11) 91234-5678', NOW()),
    ('Aluno 4', 'aluno4@escola1.com', 'senha123', 15, 'M', 'Turma B', 'Branco', 'Rua das Flores, 123', 'São Paulo', 'SP', '01000-000', '(11) 1234-5678', '(11) 91234-5678', NOW()),
    ('Aluno 5', 'aluno5@escola1.com', 'senha123', 14, 'F', 'Turma B', 'Negro', 'Rua das Flores, 123', 'São Paulo', 'SP', '01000-000', '(11) 1234-5678', '(11) 91234-5678', NOW()),
    ('Aluno 6', 'aluno6@escola1.com', 'senha123', 16, 'M', 'Turma C', 'Indígena', 'Rua das Flores, 123', 'São Paulo', 'SP', '01000-000', '(11) 1234-5678', '(11) 91234-5678', NOW()),
    ('Aluno 7', 'aluno7@escola1.com', 'senha123', 13, 'M', 'Turma C', 'Branco', 'Rua das Flores, 123', 'São Paulo', 'SP', '01000-000', '(11) 1234-5678', '(11) 91234-5678', NOW()),
    ('Aluno 8', 'aluno8@escola2.com', 'senha123', 12, 'F', 'Turma A', 'Pardo', 'Av. Central, 456', 'Rio de Janeiro', 'RJ', '20000-000', '(21) 2345-6789', '(21) 92345-6789', NOW()),
    ('Aluno 9', 'aluno9@escola2.com', 'senha123', 14, 'F', 'Turma A', 'Negro', 'Av. Central, 456', 'Rio de Janeiro', 'RJ', '20000-000', '(21) 2345-6789', '(21) 92345-6789', NOW()),
    ('Aluno 10', 'aluno10@escola2.com', 'senha123', 13, 'M', 'Turma B', 'Branco', 'Av. Central, 456', 'Rio de Janeiro', 'RJ', '20000-000', '(21) 2345-6789', '(21) 92345-6789', NOW()),
    ('Aluno 11', 'aluno11@escola2.com', 'senha123', 15, 'F', 'Turma B', 'Indígena', 'Av. Central, 456', 'Rio de Janeiro', 'RJ', '20000-000', '(21) 2345-6789', '(21) 92345-6789', NOW()),
    ('Aluno 12', 'aluno12@escola2.com', 'senha123', 16, 'M', 'Turma C', 'Pardo', 'Av. Central, 456', 'Rio de Janeiro', 'RJ', '20000-000', '(21) 2345-6789', '(21) 92345-6789', NOW()),
    ('Aluno 13', 'aluno13@escola2.com', 'senha123', 12, 'M', 'Turma C', 'Negro', 'Av. Central, 456', 'Rio de Janeiro', 'RJ', '20000-000', '(21) 2345-6789', '(21) 92345-6789', NOW()),
    ('Aluno 14', 'aluno14@escola2.com', 'senha123', 13, 'M', 'Turma A', 'Branco', 'Av. Central, 456', 'Rio de Janeiro', 'RJ', '20000-000', '(21) 2345-6789', '(21) 92345-6789', NOW()),
    ('Aluno 15', 'aluno15@escola3.com', 'senha123', 14, 'F', 'Turma A', 'Indígena', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 16', 'aluno16@escola3.com', 'senha123', 12, 'M', 'Turma B', 'Branco', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 17', 'aluno17@escola3.com', 'senha123', 13, 'F', 'Turma B', 'Pardo', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 18', 'aluno18@escola3.com', 'senha123', 14, 'M', 'Turma C', 'Negro', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 19', 'aluno19@escola3.com', 'senha123', 15, 'F', 'Turma C', 'Branco', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 20', 'aluno20@escola3.com', 'senha123', 16, 'M', 'Turma A', 'Pardo', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 21', 'aluno21@escola3.com', 'senha123', 12, 'M', 'Turma B', 'Negro', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 22', 'aluno22@escola3.com', 'senha123', 13, 'F', 'Turma C', 'Branco', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 23', 'aluno23@escola3.com', 'senha123', 14, 'M', 'Turma A', 'Indígena', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 24', 'aluno24@escola3.com', 'senha123', 15, 'M', 'Turma B', 'Branco', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 25', 'aluno25@escola3.com', 'senha123', 16, 'F', 'Turma C', 'Pardo', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 26', 'aluno26@escola3.com', 'senha123', 12, 'M', 'Turma A', 'Negro', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 27', 'aluno27@escola3.com', 'senha123', 13, 'F', 'Turma B', 'Branco', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 28', 'aluno28@escola3.com', 'senha123', 14, 'M', 'Turma C', 'Indígena', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 29', 'aluno29@escola3.com', 'senha123', 15, 'M', 'Turma A', 'Branco', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW()),
    ('Aluno 30', 'aluno30@escola3.com', 'senha123', 12, 'F', 'Turma C', 'Indígena', 'Praça da Liberdade, 789', 'Belo Horizonte', 'MG', '30000-000', '(31) 3456-7890', '(31) 93456-7890', NOW());

insert into Aluno_Turma 
    (id_aluno, id_turma, data_cadastro)
values 
    (1, 1, NOW()),
    (2, 1, NOW()),
    (3, 1, NOW()),
    (4, 2, NOW()),
    (5, 2, NOW()),
    (6, 3, NOW()),
    (7, 3, NOW()),
    (8, 1, NOW()),
    (9, 1, NOW()),
    (10, 2, NOW()),
    (11, 2, NOW()),
    (12, 3, NOW()),
    (13, 3, NOW()),
    (14, 1, NOW()),
    (15, 1, NOW()),
    (16, 2, NOW()),
    (17, 2, NOW()),
    (18, 3, NOW()),
    (19, 3, NOW()),
    (20, 1, NOW()),
    (21, 2, NOW()),
    (22, 3, NOW()),
    (23, 1, NOW()),
    (24, 2, NOW()),
    (25, 3, NOW()),
    (26, 1, NOW()),
    (27, 2, NOW()),
    (28, 3, NOW()),
    (29, 1, NOW()),
    (30, 3, NOW());

insert into Questionarios 
    (titulo, tipo, descricao, data_cadastro)
values 
    ('Questionário 1', 'Tipo 1', 'Descrição do Questionário 1', NOW()),
    ('Questionário 2', 'Tipo 2', 'Descrição do Questionário 2', NOW()),
    ('Questionário 3', 'Tipo 3', 'Descrição do Questionário 3', NOW()),
    ('Questionário 4', 'Tipo 4', 'Descrição do Questionário 4', NOW()),
    ('Questionário 5', 'Tipo 5', 'Descrição do Questionário 5', NOW());

INSERT INTO Turma_Questionario 
    (id_turma, id_questionario, data_inicio, data_fim, data_cadastro)
VALUES 
    (1, 1, NOW(), NOW() + INTERVAL '1 day', NOW()),
    (1, 2, NOW(), NOW() + INTERVAL '1 day', NOW()),
    (1, 3, NOW(), NOW() + INTERVAL '1 day', NOW()),
    (2, 4, NOW(), NOW() + INTERVAL '1 day', NOW()),
    (2, 5, NOW(), NOW() + INTERVAL '1 day', NOW());

