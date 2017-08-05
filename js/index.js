window.addEventListener('load', function () {
  var multichoice = new Vue({
    el: '#app',
    data: {
      question: "Duis quorum quem quorum multos labore?",
      answers: [{id: 'a', text: "cillum magna noster magna"},
                {id: 'b', text: "irure summis anim"},
                {id: 'c', text: "ipsum sunt tempor fugiat cillum"},
                {id: 'd', text: "nisi multos magna quem"}],
      max_answers: 2,
      solution: 'c',
      feedback: '',
      feedback_class: '',
      selected_answers: []
    },
    methods: {
      is_disabled: function(answer) {
        return this.selected_answers.length >= this.max_answers && this.selected_answers.indexOf(answer.id) === -1;
      },
      check_answer: function() {
        if (this.selected_answers.sort().join(',') == this.solution) {
          this.feedback = "Correct!"
          this.feedback_class = "correct"
        }
        else {
          this.feedback = "False!"
          this.feedback_class = "false"
        }
      }
    }
  })
})
