module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        content: `I just say 'primero entrar, primero salir'`,
        AnswerId: 1,
        UserId: 6,
        createdAt: '08/19/2014 00:00:00',
        updatedAt: '08/19/2014 00:00:00'
      },
      {
        content: 'Thanks!',
        AnswerId: 1,
        UserId: 1,
        createdAt: '08/19/2014 00:00:00',
        updatedAt: '08/19/2014 00:00:00'
      },
      {
        content: 'Looks good!',
        AnswerId: 2,
        UserId: 2,
        createdAt: '08/19/2014 00:00:00',
        updatedAt: '08/19/2014 00:00:00'
      },
      {
        content: 'Maybe this is too literal',
        AnswerId: 3,
        UserId: 5,
        createdAt: '08/19/2014 00:00:00',
        updatedAt: '08/19/2014 00:00:00'
      },
      {
        content: `This just means 'shoe'`,
        AnswerId: 4,
        UserId: 3,
        createdAt: '08/19/2014 00:00:00',
        updatedAt: '08/19/2014 00:00:00'
      },
      {
        content: `Darn, any other suggestions?`,
        AnswerId: 4,
        UserId: 4,
        createdAt: '08/19/2014 00:00:00',
        updatedAt: '08/19/2014 00:00:00'
      },
      {
        content: 'Right on!',
        AnswerId: 5,
        UserId: 4,
        createdAt: '08/19/2014 00:00:00',
        updatedAt: '08/19/2014 00:00:00'
      },
      {
        content: 'Thanks Languini!',
        AnswerId: 5,
        UserId: 5,
        createdAt: '08/19/2014 00:00:00',
        updatedAt: '08/19/2014 00:00:00'
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments')
  }
}
