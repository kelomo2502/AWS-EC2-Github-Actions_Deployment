const app = require('./app');
const services = require("./services")

const PORT = 3000;
app.use(services)
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
