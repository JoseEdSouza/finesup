 CREATE TABLE IF NOT EXISTS users (
  id SERIAL NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR NOT NULL,
  creation_date DATE NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS revenue_categories (
  id SERIAL NOT NULL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS expense_categories (
  id SERIAL NOT NULL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS fixed_revenues (
  id SERIAL NOT NULL,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(140),
  value FLOAT NOT NULL,
  purchase_date DATE NOT NULL,
  limit_date DATE NOT NULL,
  frequency INT,
  user_id INT NOT NULL,
  rev_cat_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (rev_cat_id) REFERENCES revenue_categories(id)
);

CREATE TABLE IF NOT EXISTS fixed_expenses (
  id SERIAL NOT NULL,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(140),
  purchase_date DATE NOT NULL,
  limit_date DATE NOT NULL,
  frequency INT,
  value FLOAT NOT NULL,
  user_id INT NOT NULL,
  ex_cat_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (ex_cat_id) REFERENCES expense_categories(id)
);

CREATE TABLE IF NOT EXISTS boxes (
  user_id INT NOT NULL,
  name VARCHAR(30) NOT NULL,
  description VARCHAR(140),
  actual_value FLOAT NOT NULL,
  final_value FLOAT NOT NULL,
  concluded BOOLEAN NOT NULL,
  creation_date DATE NOT NULL,
  PRIMARY KEY (user_id,name),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS budgets (
  user_id INT NOT NULL,
  ex_cat_id INT NOT NULL,
  actual_value FLOAT NOT NULL,
  final_value FLOAT NOT NULL,
  renewal_date DATE NOT NULL,
  creation_date DATE NOT NULL,
  PRIMARY KEY (user_id,ex_cat_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (ex_cat_id) REFERENCES expense_categories(id)
);

CREATE TABLE IF NOT EXISTS revenues (
  id SERIAL NOT NULL,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(140),
  value FLOAT NOT NULL,
  purchase_date DATE NOT NULL,
  user_id INT NOT NULL,
  rev_cat_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (rev_cat_id) REFERENCES revenue_categories(id)
);

CREATE TABLE IF NOT EXISTS expenses (
  id SERIAL NOT NULL,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(140),
  value FLOAT NOT NULL,
  purchase_date DATE NOT NULL,
  user_id INT NOT NULL,
  ex_cat_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (ex_cat_id) REFERENCES expense_categories(id)
);