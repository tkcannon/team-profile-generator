const fs = require('fs');

const writeFile = html => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', html, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'index.html created!'
            })
        })
    })
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'style.ccs copied!'
            })
        })
    })
}

module.exports = { writeFile, copyFile};