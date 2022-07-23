const express = require('express');
const errorsHandlers = require('./middleware/error-middleware');
const routes = require('./routes/routes');
const app = express();

app.use(express.json());
app.use('/api', routes);
app.use(errorsHandlers);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
})