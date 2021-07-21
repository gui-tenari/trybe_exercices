// import  {Component} from 'react';


// class CreateTask extends Component {
//     constructor(props) {
//         super(props);
//         this.taskList = ['take a walk', 'drink water', 'clean my bedroom'];
//     }

//     render() {
//         return (
//             this.taskList.map(task => <li>{task}</li>)
//         )
//     }
// }

const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }

export default Task