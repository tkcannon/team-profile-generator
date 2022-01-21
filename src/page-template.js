function generatePage(employees) {
    html =
        `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./style.css" />
    </head>

    <body>
    <header>
        <h1>My Team</h1>
    </header>

    <section id="team">
    ${generateCards(employees)}
    </section >

    </body >

    </html >
    `;
    return html;
}

function generateCards(employees) {

    let cards = [];

    employees.forEach(employee => {
        var info;
        if (employee.role === 'manager') {
            info = `Office number: ${employee.officeNumber}`
        } else if (employee.role === 'engineer') {
            info = `GitHub: <a href="https://github.com/${employee.github} target="_blank">${employee.github}</a>`
        } else {
            info = `School: ${employee.school}`
        }
        card = (
            `
            <div class="card" >
                <div class="card-head">
                    <h2>${employee.name}</h2>
                    <h3>${employee.role}</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${employee.id}</li>
                        <li>Email: <a href = "mailto: ${employee.email}">${employee.email}</a> </li>
                        <li>${info}</li>
                    </ul>
                </div>
            </div>
        `);
        cards.push(card);
    });

    const cardsSection = cards.join('');
    return cardsSection;
}

module.exports = generatePage;