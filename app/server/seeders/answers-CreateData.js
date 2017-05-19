module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [
      {
        content: 'Primero en entrar primero en salir',
        TranslationId: 1,
        UserId: 1,
        createdAt: '08/19/2014 00:00:00',
        updatedAt: '08/19/2014 00:00:00'
      },
      {
        content: 'Aperçu',
        TranslationId: 2,
        UserId: 1,
        createdAt: '08/19/2014 00:00:00',
        updatedAt: '08/19/2014 00:00:00'
      },
      {
        content: 'Derin seribaşı',
        TranslationId: 3,
        UserId: 1,
        createdAt: '08/19/2014 00:00:00',
        updatedAt: '08/19/2014 00:00:00'
      },
      {
        content: 'Calçado',
        TranslationId: 4,
        UserId: 1,
        createdAt: '08/19/2014 00:00:00',
        updatedAt: '08/19/2014 00:00:00'
      },
      {
        content: 'Kunststück',
        TranslationId: 5,
        UserId: 1,
        createdAt: '08/19/2014 00:00:00',
        updatedAt: '08/19/2014 00:00:00'
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers')
  }
}
