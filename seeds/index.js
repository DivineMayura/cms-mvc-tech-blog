
const seedBlogs = require('./sampleBlog');
const seedUser = require("./sampleUser");
const seedComment = require("./sampleComment");
// const seedProducts = require('./product-seeds');
// const seedTags = require('./tag-seeds');
// const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');


  await seedUser();
  console.log('\n----- COMMENTS SEEDED -----\n');




  await seedBlogs();
  console.log('\n----- BLOGS SEEDED -----\n');


  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');
  // await seedTags();
  // console.log('\n----- TAGS SEEDED -----\n');



  process.exit(0);
};

seedAll();
