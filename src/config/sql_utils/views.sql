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
        p.id as id_pergunta,
        p.enunciado as enunciado_pergunta,
        p.tipo as tipo_pergunta,
        q.id as id_questionario,
        q.titulo as titulo_questionario
    from
        Perguntas p
        join Questionario_Pergunta qp on p.id = qp.id_pergunta
        join Questionarios q on qp.id_questionario = q.id;

create view V_Alternativas_Pergunta as
    select 
        a.id as id_alternativa,
        a.descricao as descricao_alternativa,
        a.correta as correta_alternativa,
        p.id as id_pergunta,
        p.enunciado as enunciado_pergunta
    from
        Alternativas a
        join Pergunta_Alternativa pa on a.id = pa.id_alternativa
        join Perguntas p on pa.id_pergunta = p.id;
