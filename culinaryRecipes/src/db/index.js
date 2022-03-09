import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase('myRecipes_db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY NOT NULL, user TEXT NOT NULL, title TEXT NOT NULL, instructions TEXT NOT NULL, photo TEXT NOT NULL, ingredients TEXT NOT NULL, difficulty BOOLEAN NOT NULL, steps NUMBER )',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const insertRecipes = (
  user,
  title,
  ingredients,
  photo,
  instructions,
  difficulty,
  steps,
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO recipes (user, title, ingredients, photo, instructions, difficulty, steps) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [user, title, ingredients, photo, instructions, difficulty, steps],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const fetchRecipes = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM recipes',
        [],
        (_, result) => {
          let data = [];
          let len = result.rows.length;
          for (let i = 0; i < len; i++) {
            let row = result.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const deleteRecipe = id => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM recipes WHERE id = ?',
        [id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};
