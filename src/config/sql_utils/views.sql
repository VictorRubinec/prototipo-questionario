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
    q.titulo as titulo_questionario,
    p.id as id_pergunta,
    p.pergunta,
    p.tipo,
from
    Questionarios q
    join Questionario_Pergunta qp on q.id = qp.id_questionario
    join Perguntas p on qp.id_pergunta = p.id;

create view V_Alternativas_Pergunta as
select
    p.id as id_pergunta,
    p.pergunta,
    pa.id as id_alternativa,
    pa.alternativa,
from
    Perguntas p
    join Pergunta_Alternativas pa on p.id = pa.id_pergunta;