import { v4 as uuidv4} from "uuid";

const list  = document.getElementById("list") as HTMLUListElement;
const form = document.getElementById("new-form") as HTMLFormElement;
const input = document.getElementById("new-title") as HTMLInputElement;
type Task = {
  id : string ,
  title : string ,
  completed : boolean , 
  createdAt : Date
}
const tasks : Task[] = loadtasks();
tasks.forEach(addListItem);

form?.addEventListener("submit" , function(e){
  e.preventDefault();
  if(input?.value == "" || input?.value == null)return;
  const newtask : Task = {
    id : uuidv4(),
    title : input.value,
    completed : false,
    createdAt : new Date(),
  }
  tasks.push(newtask);
  savetasks();
  addListItem(newtask);
  input.value = "";
})
function addListItem(task : Task){
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.addEventListener("change" , function(){
    task.completed = checkbox.checked;
    savetasks();
  })
  label.append(checkbox , task.title)
  item.append(label);
  list?.append(item);
}
function savetasks(){
  localStorage.setItem("Tasks" , JSON.stringify(tasks));
}
function loadtasks(){
  const taskJSON = localStorage.getItem("Tasks");
  if(taskJSON == null)
    return []
  else
    return JSON.parse(taskJSON);
}