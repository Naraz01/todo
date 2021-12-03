import { TasksApi } from "@/services/api/TasksApi"

export default {
  state: {
    tasks: []
  },
  getters: {
    getTasks: (state:any) => {
      return state.tasks;
    }
  },
  mutations: {
    SET_TASKS(state:any, payload:any):void {
      state.tasks = payload
    },
    ADD_TASK( state:any, payload:any ):void {
      state.tasks = [...state.tasks, payload];
    },
    DELETE_TASK( state:any, payload:number ):void {
      const data = state.tasks.filter((item:any) => {
        return item.id != payload
      });
      state.tasks = data;
    },
    UPDATE_TEXT(state:any, payload:any):void {
      const data = state.tasks.map((item:any) => {
        if (item.id == payload.id) {
          item.text = payload.text
          return item;
        }
        return item;
      })
      state.tasks = data;
    },
    SELECT_DONE(state:any, payload:any):void {
      const data = payload.filter((item:any) => {
        return item.isDone === true;
      });
      state.tasks = data;
    },
    SELECT_CHOSEN(state:any, payload:any):void {
      const data = payload.filter((item:any) => {
        return item.isChosen === true;
      });
      state.tasks = data;
    }, 
    UPDATE_DONE(state:any, payload:any):void {
      const data = state.tasks.map((item:any) => {
        if (item.id == payload.id) {
          item.isDone = payload.text
          return item;
        }
        return item;
      })
      state.tasks = data;
    },
    FETCH_SEARCH(state:any, payload:any):void {
      state.tasks = payload;
    }
  },
  actions: {
    async fetchTasksAction(context:any) {
      try {
        const items = await TasksApi.fetchTasks()
        context.commit("SET_TASKS", items)
      } catch {
        console.log("error fetchTasksAction")
      }
    },
    async addTasksAction(context:any, payload: string) {
      try {
        const items = await TasksApi.addTasks(payload);
        context.commit("ADD_TASK", items);
      } catch {
        console.log("error addTasksAction")
      }
    },
    async deleteTasksAction(context:any, payload: number) {
      try {
        await TasksApi.deleteTask(payload);
        context.commit("DELETE_TASK", payload);
      } catch {
        console.log("error deleteTasksAction")
      }
    },
    async updateTextAction(context:any, data:any) {
      try {
        await TasksApi.updateText(data.id, data.text);
        context.commit("UPDATE_TEXT", data);
      } catch {
        console.log("error deleteTasksAction")
      }
    },
    async selectDone(context:any) {
      try {
        const items = await TasksApi.fetchTasks()
        context.commit("SELECT_DONE", items)
      } catch {
        console.log("error selectDone")
      }
    },
    async selectChosen(context:any) {
      try {
        const items = await TasksApi.fetchTasks()
        context.commit("SELECT_CHOSEN", items)
      } catch {
        console.log("error selectChosen")
      }
    },
    async updateDoneAction(context:any, data:any) {
      try {
        await TasksApi.updateDone(data.id, data.isDone);
        context.commit("UPDATE_DONE", data);
      } catch {
        console.log("error updateDoneAction")
      }
    },
    async updateChosenAction(context:any, data:any) {
      try {
        await TasksApi.updateChosen(data.id, data.isChosen);
        context.commit("UPDATE_DONE", data);
      } catch {
        console.log("error updateChosenAction")
      }
    },
    async fetchSearchAction(context:any, payload:string) {
      try {
        const items = await TasksApi.fetchSearch(payload)
        context.commit("FETCH_SEARCH", items);
      } catch {
        console.log("error fetchSearchAction")
      }
    }
  },
}