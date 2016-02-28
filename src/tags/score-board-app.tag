<score-board-app>
<navbar></navbar>
<score-display tasks={this.state.tasks}></score-display>
<script>
    var actions = require('../actions.js');
    var store = this.opts.store;

    this.on('mount',function(){
      store.dispatch(actions.loadTasks());
    })

    store.subscribe(function(){
      this.state = store.getState();
      this.update();
    }.bind(this));

  </script>
</score-board-app>
