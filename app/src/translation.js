require.exports = {
  listenForCommentSub: () => {
    $("#submit-comment").on("click", (event) => {
      event.preventDefault()
      console.log("This works.");
    })
  },

  listenForAnswerSub: () => {
    $("#submit-answer").on("click", (event) => {
      event.preventDefault()
      console.log("This works.");
    })
  }
}
