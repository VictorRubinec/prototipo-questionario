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