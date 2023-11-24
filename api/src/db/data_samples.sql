-- Inserir dados na tabela 'users'
INSERT INTO users (name, email, password, creation_date)
VALUES (
        'User 1',
        'user1@email.com',
        md5('password1'),
        '2023-01-01'
    ),
    (
        'User 2',
        'user2@email.com',
        md5('password2'),
        '2023-01-02'
    ),
    (
        'User 3',
        'user3@email.com',
        md5('password3'),
        '2023-01-03'
    ),
    (
        'User 4',
        'user4@email.com',
        md5('password4'),
        '2023-01-04'
    ),
    (
        'User 5',
        'user5@email.com',
        md5('password5'),
        '2023-01-05'
    ),
    (
        'User 6',
        'user6@email.com',
        md5('password6'),
        '2023-01-06'
    ),
    (
        'User 7',
        'user7@email.com',
        md5('password7'),
        '2023-01-07'
    ),
    (
        'User 8',
        'user8@email.com',
        md5('password8'),
        '2023-01-08'
    ),
    (
        'User 9',
        'user9@email.com',
        md5('password9'),
        '2023-01-09'
    ),
    (
        'User 10',
        'user10@email.com',
        md5('password10'),
        '2023-01-10'
    );
INSERT INTO revenue_categories (name)
VALUES ('CashBack'),
    ('Vendas'),
    ('Bônus'),
    ('Estorno'),
    ('Renda'),
    ('Rendimento'),
    ('Correção de Saldo'),
    ('Investimento entrada'),
    ('Câmbio entrada'),
    ('Outros entrada');
INSERT INTO expense_categories (name)
values ('Alimentação'),
    ('Lazer'),
    ('Roupas'),
    ('Mercado'),
    ('Transporte'),
    ('Saúde'),
    ('Viagem'),
    ('Pets'),
    ('Moradia'),
    ('Contas'),
    ('Educação'),
    ('Imposto'),
    ('Investimento saída'),
    ('Câmbio saída'),
    ('Outros saída');
-- Inserir dados na tabela 'fixed_revenues'
INSERT INTO fixed_revenues (
        name,
        description,
        value,
        purchase_date,
        limit_date,
        frequency,
        user_id,
        rev_cat_id
    )
VALUES (
        'Fixed Revenue 1',
        'Description 1',
        1000.00,
        '2023-01-01',
        '2023-02-01',
        1,
        1,
        1
    ),
    (
        'Fixed Revenue 2',
        'Description 2',
        1500.00,
        '2023-01-02',
        '2023-02-02',
        2,
        1,
        2
    ),
    (
        'Fixed Revenue 3',
        'Description 3',
        800.00,
        '2023-01-03',
        '2023-02-03',
        1,
        2,
        3
    ),
    (
        'Fixed Revenue 4',
        'Description 4',
        1200.00,
        '2023-01-04',
        '2023-02-04',
        3,
        2,
        4
    ),
    (
        'Fixed Revenue 5',
        'Description 5',
        900.00,
        '2023-01-05',
        '2023-02-05',
        2,
        3,
        5
    ),
    (
        'Fixed Revenue 6',
        'Description 6',
        1100.00,
        '2023-01-06',
        '2023-02-06',
        1,
        3,
        6
    ),
    (
        'Fixed Revenue 7',
        'Description 7',
        1300.00,
        '2023-01-07',
        '2023-02-07',
        1,
        4,
        7
    ),
    (
        'Fixed Revenue 8',
        'Description 8',
        700.00,
        '2023-01-08',
        '2023-02-08',
        2,
        4,
        8
    ),
    (
        'Fixed Revenue 9',
        'Description 9',
        1400.00,
        '2023-01-09',
        '2023-02-09',
        3,
        5,
        9
    ),
    (
        'Fixed Revenue 10',
        'Description 10',
        1000.00,
        '2023-01-10',
        '2023-02-10',
        1,
        5,
        10
    );
-- Inserir dados na tabela 'fixed_expenses'
INSERT INTO fixed_expenses (
        name,
        description,
        purchase_date,
        limit_date,
        frequency,
        value,
        user_id,
        ex_cat_id
    )
VALUES (
        'Fixed Expense 1',
        'Description 1',
        '2023-01-01',
        '2023-02-01',
        1,
        500.00,
        1,
        1
    ),
    (
        'Fixed Expense 2',
        'Description 2',
        '2023-01-02',
        '2023-02-02',
        2,
        750.00,
        1,
        2
    ),
    (
        'Fixed Expense 3',
        'Description 3',
        '2023-01-03',
        '2023-02-03',
        1,
        400.00,
        2,
        3
    ),
    (
        'Fixed Expense 4',
        'Description 4',
        '2023-01-04',
        '2023-02-04',
        3,
        600.00,
        2,
        4
    ),
    (
        'Fixed Expense 5',
        'Description 5',
        '2023-01-05',
        '2023-02-05',
        2,
        450.00,
        3,
        5
    ),
    (
        'Fixed Expense 6',
        'Description 6',
        '2023-01-06',
        '2023-02-06',
        1,
        550.00,
        3,
        6
    ),
    (
        'Fixed Expense 7',
        'Description 7',
        '2023-01-07',
        '2023-02-07',
        1,
        650.00,
        4,
        7
    ),
    (
        'Fixed Expense 8',
        'Description 8',
        '2023-01-08',
        '2023-02-08',
        2,
        350.00,
        4,
        8
    ),
    (
        'Fixed Expense 9',
        'Description 9',
        '2023-01-09',
        '2023-02-09',
        3,
        700.00,
        5,
        9
    ),
    (
        'Fixed Expense 10',
        'Description 10',
        '2023-01-10',
        '2023-02-10',
        1,
        500.00,
        5,
        10
    );
-- Inserir dados na tabela 'boxes'
INSERT INTO boxes (
        user_id,
        name,
        description,
        actual_value,
        final_value,
        concluded,
        creation_date
    )
VALUES (
        1,
        'Box 1',
        'Box Description 1',
        1000.00,
        2000.00,
        true,
        '2023-01-01'
    ),
    (
        2,
        'Box 2',
        'Box Description 2',
        1500.00,
        2500.00,
        false,
        '2023-01-02'
    ),
    (
        3,
        'Box 3',
        'Box Description 3',
        800.00,
        1800.00,
        true,
        '2023-01-03'
    ),
    (
        4,
        'Box 4',
        'Box Description 4',
        1200.00,
        2200.00,
        true,
        '2023-01-04'
    ),
    (
        5,
        'Box 5',
        'Box Description 5',
        900.00,
        1900.00,
        false,
        '2023-01-05'
    ),
    (
        1,
        'Box 6',
        'Box Description 6',
        1100.00,
        2100.00,
        true,
        '2023-01-06'
    ),
    (
        2,
        'Box 7',
        'Box Description 7',
        1300.00,
        2300.00,
        true,
        '2023-01-07'
    ),
    (
        3,
        'Box 8',
        'Box Description 8',
        700.00,
        1700.00,
        false,
        '2023-01-08'
    ),
    (
        4,
        'Box 9',
        'Box Description 9',
        1400.00,
        2400.00,
        true,
        '2023-01-09'
    ),
    (
        5,
        'Box 10',
        'Box Description 10',
        1000.00,
        2000.00,
        true,
        '2023-01-10'
    );
-- Inserir dados na tabela 'budgets'
INSERT INTO budgets (
        user_id,
        ex_cat_id,
        actual_value,
        final_value,
        renewal_date,
        creation_date
    )
VALUES (
        1,
        1,
        1000.00,
        2000.00,
        '2023-02-01',
        '2023-01-01'
    ),
    (
        2,
        2,
        1500.00,
        2500.00,
        '2023-02-02',
        '2023-01-02'
    ),
    (
        3,
        3,
        800.00,
        1800.00,
        '2023-02-03',
        '2023-01-03'
    ),
    (
        4,
        4,
        1200.00,
        2200.00,
        '2023-02-04',
        '2023-01-04'
    ),
    (
        5,
        5,
        900.00,
        1900.00,
        '2023-02-05',
        '2023-01-05'
    ),
    (
        1,
        6,
        1100.00,
        2100.00,
        '2023-02-06',
        '2023-01-06'
    ),
    (
        2,
        7,
        1300.00,
        2300.00,
        '2023-02-07',
        '2023-01-07'
    ),
    (
        3,
        8,
        700.00,
        1700.00,
        '2023-02-08',
        '2023-01-08'
    ),
    (
        4,
        9,
        1400.00,
        2400.00,
        '2023-02-09',
        '2023-01-09'
    ),
    (
        5,
        10,
        1000.00,
        2000.00,
        '2023-02-10',
        '2023-01-10'
    );
-- Inserir dados na tabela 'revenues'
INSERT INTO revenues (
        name,
        description,
        value,
        purchase_date,
        user_id,
        rev_cat_id
    )
VALUES (
        'Revenue 1',
        'Description 1',
        100.00,
        '2023-01-01',
        1,
        1
    ),
    (
        'Revenue 2',
        'Description 2',
        150.00,
        '2023-01-02',
        1,
        2
    ),
    (
        'Revenue 3',
        'Description 3',
        80.00,
        '2023-01-03',
        2,
        3
    ),
    (
        'Revenue 4',
        'Description 4',
        120.00,
        '2023-01-04',
        2,
        4
    ),
    (
        'Revenue 5',
        'Description 5',
        90.00,
        '2023-01-05',
        3,
        5
    ),
    (
        'Revenue 6',
        'Description 6',
        110.00,
        '2023-01-06',
        3,
        6
    ),
    (
        'Revenue 7',
        'Description 7',
        130.00,
        '2023-01-07',
        4,
        7
    ),
    (
        'Revenue 8',
        'Description 8',
        70.00,
        '2023-01-08',
        4,
        8
    ),
    (
        'Revenue 9',
        'Description 9',
        140.00,
        '2023-01-09',
        5,
        9
    ),
    (
        'Revenue 10',
        'Description 10',
        100.00,
        '2023-01-10',
        5,
        10
    );
-- Inserir dados na tabela 'expenses'
INSERT INTO expenses (
        name,
        description,
        value,
        purchase_date,
        user_id,
        ex_cat_id
    )
VALUES (
        'Expense 1',
        'Description 1',
        50.00,
        '2023-01-01',
        1,
        1
    ),
    (
        'Expense 2',
        'Description 2',
        75.00,
        '2023-01-02',
        1,
        2
    ),
    (
        'Expense 3',
        'Description 3',
        40.00,
        '2023-01-03',
        2,
        3
    ),
    (
        'Expense 4',
        'Description 4',
        60.00,
        '2023-01-04',
        2,
        4
    ),
    (
        'Expense 5',
        'Description 5',
        45.00,
        '2023-01-05',
        3,
        5
    ),
    (
        'Expense 6',
        'Description 6',
        55.00,
        '2023-01-06',
        3,
        6
    ),
    (
        'Expense 7',
        'Description 7',
        65.00,
        '2023-01-07',
        4,
        7
    ),
    (
        'Expense 8',
        'Description 8',
        35.00,
        '2023-01-08',
        4,
        8
    ),
    (
        'Expense 9',
        'Description 9',
        70.00,
        '2023-01-09',
        5,
        9
    ),
    (
        'Expense 10',
        'Description 10',
        50.00,
        '2023-01-10',
        5,
        10
    );