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
      selected_answers: []
    },
    methods: {
      check_answer: function() {
        this.feedback = this.selected_answers.sort().join(',') == this.solution ? "Correct!" : "False!"
      }
    }
  })
})
