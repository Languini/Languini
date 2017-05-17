exports.seed = (knex, Promise) => {
  return knex('Answers').insert([
    {
      id: 1,
      content: 'Primero en entrar primero en salir',
      votes: 2,
      TranslationId: 1,
      UserId: 1,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 2,
      content: 'Aperçu',
      votes: 1,
      TranslationId: 2,
      UserId: 1,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 3,
      content: 'Derin seribaşı',
      votes: 0,
      TranslationId: 3,
      UserId: 1,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 4,
      content: 'Calçado',
      votes: -1,
      TranslationId: 4,
      UserId: 1,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 5,
      content: 'Kunststück',
      votes: 5,
      TranslationId: 5,
      UserId: 1,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    }
  ])
  .catch(e => {
    console.error(e)
  })
}
