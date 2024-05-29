const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let loans = [];

// Crear prestamo nuevo
app.post('/loans', (req, res) => {
    const loan = req.body;
    loan.id = loans.length ? loans[loans.length - 1].id + 1 : 1;
    loans.push(loan);
    res.status(201).json(loan);
});

// obtener todos los prestamos
app.get('/loans', (req, res) => {
    res.json(loans);
});

// obtener prestamo por id
app.get('/loans/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const loan = loans.find(l => l.id === id);
    if (loan) {
        res.json(loan);
    } else {
        res.status(404).send('Prastamo no encontrado');
    }
});

// actualizar prestamo por id
app.put('/loans/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const loanIndex = loans.findIndex(l => l.id === id);
    if (loanIndex !== -1) {
        loans[loanIndex] = { ...loans[loanIndex], ...req.body };
        res.json(loans[loanIndex]);
    } else {
        res.status(404).send('Prastamo no encontrado');
    }
});

// Dborrar prestamo por id
app.delete('/loans/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const loanIndex = loans.findIndex(l => l.id === id);
    if (loanIndex !== -1) {
        loans.splice(loanIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Prastamo no encontrado');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
