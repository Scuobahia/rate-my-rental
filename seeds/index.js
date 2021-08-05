const seedLandlord = require('./landlords-seeds');
const seedProperties = require('./properties-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: false });
    console.log('--------------');
    await seedProperties();

    console.log('--------------');
    await seedLandlord();

    process.exit(0);
};

seedAll();