module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Votes', [{
      upvote: true,
      downvote: false,
      AnswerId: 4,
      UserId: 2,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    }, {
      upvote: true,
      downvote: false,
      AnswerId: 5,
      UserId: 4,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    }, {
      upvote: false,
      downvote: true,
      AnswerId: 3,
      UserId: 3,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Votes')
  }
}
