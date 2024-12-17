const app = require('./app');
const services = require("./services")
const contact = require("./contact")

const PORT = 3000;
app.use(services);
app.use(contact);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
