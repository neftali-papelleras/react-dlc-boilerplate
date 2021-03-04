const mysql = require('mysql');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'database-1.cc3ubbxjyhgj.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'somebodystopme',
  database: 'mydb',
});

connection.connect();

const query = `
SELECT roles.name, materials.title 
FROM materials
JOIN role_materials
ON materials.id = role_materials.material_id
JOIN roles
ON role_materials.role_id = roles.id
ORDER BY roles.name ASC;`;

connection.query(query, (error, results) => {
  if (error) throw error;

  let materials = {};

  results.forEach((item) => {
    materials = {
      ...materials,
      [item.name]: materials[item.name] ? [
        ...materials[item.name],
        {
          title: item.title,
        },
      ] : [{
        title: item.title,
      }],
    };
  });

  fs.writeFileSync('./src/materials.json', JSON.stringify(materials));

  //   fs.readFile('./src/materials.json', (err, data) => {
  //     if (err) throw err;

  //     const materials = JSON.parse(data);
  //     console.log(materials['Advisor Teacher']);
  //   });
});

connection.end();
