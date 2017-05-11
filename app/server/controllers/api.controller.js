exports.match = (uid, userScore, callback) => {
  const candidates = []
  database.readUsers(usersStore => {
    const usersArr = []
    for (let prop in usersStore) {
      if (prop === uid) { continue }
      usersArr.push(usersStore[prop])
    }
    usersArr.forEach(otherUser => {
      candidates.push(Math.abs(parseInt(userScore) - parseInt(otherUser.score)))
    })
    let match = candidates[0]
    for (let i = 1; i < candidates.length; i++) {
      if (match > candidates[i]) {
        match = candidates[i]
      }
    }
    callback(usersArr[candidates.indexOf(match)])
  })
}

exports.reduceScores = req => {
  let score = 0
  for (let i = 1; i <= 10; i++) {
    score += parseInt(req.body[`q${i}`])
  }
  return score
}

exports.getUsers = (req, res) => {
  database.readUsers(usersStore => {
    const usersArr = []
    for (let prop in usersStore) {
      usersArr.push(usersStore[prop])
    }
    res.status(200).json(usersArr)
  })
}
