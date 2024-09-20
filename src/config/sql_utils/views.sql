create view V_Login_Aluno as
select
    id as id_aluno,
    ra as ra_aluno,
    nome as nome_aluno,
    senha as senha_aluno
from
    Alunos;

create view V_Questionarios_Alunos as
select
    q.id as id_questionario,
    a.id as id_aluno,
    t.nome as nome_turma,
    q.titulo as titulo_questionario,
    q.tipo as tipo_questionario,
    q.descricao as descricao_questionario,
    tq.data_inicio as data_inicio_questionario,
    tq.data_fim as data_fim_questionario
from
    Alunos a
    join Aluno_Turma at on a.id = at.id_aluno
    join Turmas t on at.id_turma = t.id
    join Turma_Questionario tq on t.id = tq.id_turma
    join Questionarios q on tq.id_questionario = q.id;

create view V_Info_Questionario as
select
    q.id as id_questionario,
    q.titulo as titulo_questionario,
    q.tipo as tipo_questionario,
    q.descricao as descricao_questionario,
    tq.data_inicio as data_inicio_questionario,
    tq.data_fim as data_fim_questionario,
    t.nome as nome_turma
from
    Questionarios q
    join Turma_Questionario tq on q.id = tq.id_questionario
    join Turmas t on tq.id_turma = t.id;

create view V_Perguntas_Questionario as
select
    q.id as id_questionario,
    p.id as id_pergunta,
    p.titulo as titulo_pergunta,
    p.pergunta,
    p.tipo
from
    Questionarios q
    join Questionario_Pergunta qp on q.id = qp.id_questionario
    join Perguntas p on qp.id_pergunta = p.id;

create view V_Alternativas_Pergunta as
select
    p.id as id_pergunta,
    pa.id as id_alternativa,
    pa.alternativa,
    pa.correta as correta_alternativa
from
    Perguntas p
    join Pergunta_Alternativas pa on p.id = pa.id_pergunta;

CREATE VIEW V_Verificacao_Respostas AS
SELECT
    p.id AS id_pergunta,
    pa.id AS id_alternativa,
    pa.alternativa,
    pa.correta,
FROM
    Perguntas p
    JOIN Pergunta_Alternativas pa ON p.id = pa.id_pergunta;

CREATE VIEW V_Informacoes_Resultados AS
SELECT
    ra.id_aluno,
    at.id_turma,
    tq.id_questionario,
    SUM(
        CASE
            WHEN ra.acerto = 1 THEN 1
            ELSE 0
        END
    ) AS acertos,
    COUNT(ra.id) AS total_respostas,
    COALESCE(
        ROUND(
            SUM(
                CASE
                    WHEN ra.acerto = 1 THEN 1
                    ELSE 0
                END
            ) * 1.0 / COUNT(ra.id) * 10,
            -- Multiplicando por 10
            2 -- Número de casas decimais para arredondar
        ),
        0
    ) AS nota
FROM
    Respostas_Aluno ra
    JOIN Aluno_Turma at ON ra.id_aluno = at.id_aluno
    JOIN Turma_Questionario tq ON at.id_turma = tq.id_turma
GROUP BY
    ra.id_aluno,
    at.id_turma,
    tq.id_questionario;

CREATE VIEW V_Resultado_Aluno AS
SELECT
    ra.id_aluno,
    q.titulo AS questionario_titulo,
    ra.nota AS nota_obtida
FROM
    Resultados_Aluno ra
    JOIN Questionarios q ON ra.id_questionario = q.id;

CREATE VIEW V_Perguntas_Respostas AS
SELECT
    ra.id_aluno,
    p.id AS id_pergunta,
    ra.acerto AS acerto_percentual
FROM
    Respostas_Aluno ra
    JOIN Perguntas p ON ra.id_pergunta = p.id;

CREATE VIEW V_Notas_Aluno AS
SELECT
    ra.id_aluno,
    q.id AS id_questionario,
    q.titulo AS questionario_titulo,
    ra.nota AS nota_obtida,
    ra.data_cadastro AS data_realizacao
FROM
    Resultados_Aluno ra
    JOIN Questionarios q ON ra.id_questionario = q.id
    JOIN Turma_Questionario tq ON ra.id_questionario = tq.id_questionario AND ra.id_turma = tq.id_turma;
