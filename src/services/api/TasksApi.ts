import axios from "axios"
export const TasksApi = {
  fetchTasks(): any {
    return axios.get('http://localhost:3000/tasks').then(({data}) => data);
  },
  addTasks(payload: any) {
    return axios.post('http://localhost:3000/tasks',  payload).then(({data}) => data);
  },
  deleteTask(payload: any) {
    return axios.delete(`http://localhost:3000/tasks/${payload}`).then(({data}) => data);
  },
  updateText(id:string, text:string) {
    return axios.patch('http://localhost:3000/tasks/' + id, { 
        text: text,
      }
    ).then(({data}) => data);
  },
  updateDone(id:string, done:boolean) {
    return axios.patch('http://localhost:3000/tasks/' + id, { 
      isDone: done,
      }
    ).then(({data}) => data);
  },
  updateChosen(id:string, chosen:boolean) {
    return axios.patch('http://localhost:3000/tasks/' + id, { 
      isChosen: chosen,
      }
    ).then(({data}) => data);
  },
  fetchSearch(payload: any): Promise<any> {
    return axios.get('http://localhost:3000/tasks?q='+payload).then(({data}) => data);
  },
};

/*
  axios.patch('http://localhost:3001/tasks/' + id, {
            text: text,
        })
*/