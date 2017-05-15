exports.seed = (knex, Promise) => {
  return knex('Comments').insert([
    {
      id: 1,
      content: `I just say 'primero entrar, primero salir'`,
      AnswerId: 1,
      UserId: 6,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 2,
      content: 'Thanks!',
      AnswerId: 1,
      UserId: 1,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 3,
      content: 'Looks good!',
      AnswerId: 2,
      UserId: 2,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 4,
      content: 'Maybe this is too literal',
      AnswerId: 3,
      UserId: 5,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 5,
      content: `This just means 'shoe'`,
      AnswerId: 4,
      UserId: 3,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 6,
      content: `Darn, any other suggestions?`,
      AnswerId: 4,
      UserId: 4,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 7,
      content: 'Right on!',
      AnswerId: 5,
      UserId: 4,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 8,
      content: 'Thanks Languini!',
      AnswerId: 5,
      UserId: 5,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    }
  ])
  .catch(e => {
    console.error(e)
  })
}
