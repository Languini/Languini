// this is going to hold the js for the post creation page
module.exports = {
  listenForSubmission: () => {
    $("#submit-post").on("click", () => {
      console.log("Hello World!");
    })
  }
}
