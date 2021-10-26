const Team = require("../lib/Team");

const displayTeam = (members = []) => {
  let HTML = '';
  members.forEach((member) => {
    if (member.role === 'manager') {
      HTML += `<div class="card" style="width: 18rem;">
        <div class="card-top bg-primary text-white">
          <div class="p-3">
            <h2>${member.name}</h2>
            <h4><i class="fas fa-mug-hot"></i> Manager</h4>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${member.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${member.email}">${member.email}</a></li>
            <li class="list-group-item">Office #: ${member.officeNumber}</li>
          </ul>
        </div>
      </div>`;
    } else if (member.role === 'engineer') {
      HTML += `<div class="card" style="width: 18rem;">
        <div class="card-top bg-primary text-white">
          <div class="p-3">
            <h2>${member.name}</h2>
            <h4><i class="fas fa-glasses"></i> Engineer</h4>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${member.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${member.email}">${member.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></li>
          </ul>
        </div>
      </div>`;
    } else if (member.role === 'intern') {
      HTML += `<div class="card" style="width: 18rem;">
        <div class="card-top bg-primary text-white">
          <div class="p-3">
            <h2>${member.name}</h2>
            <h4><i class="fas fa-user-graduate"></i> Intern</h4>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${member.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${member.email}">${member.email}</a></li>
            <li class="list-group-item">School: ${member.school}</li>
          </ul>
        </div>
      </div>`;
    }
  });
  return HTML;
} 

module.exports = (team = Team) => {
  const manager = team.getEmployeeByRole('manager');
  const engineers = team.getEmployeeByRole('engineer');
  const interns = team.getEmployeeByRole('intern');
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="./css/style.css">
    </head>
    <body>
      <header class="container-fluid">
        <h1 class="d-flex justify-content-center align-items-center h-100">My Team</h1>
      </header>
      <main class="container d-flex justify-content-around">
        ${displayTeam(manager)}
        ${displayTeam(engineers)}
        ${displayTeam(interns)}
      </main>
    </body>
  </html>`;
};