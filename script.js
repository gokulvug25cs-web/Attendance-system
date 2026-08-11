const KEYS={students:"attendance_students",records:"attendance_records"};
function getStudents(){return JSON.parse(localStorage.getItem(KEYS.students)||"[]")}
function saveStudents(v){localStorage.setItem(KEYS.students,JSON.stringify(v))}
function getRecords(){return JSON.parse(localStorage.getItem(KEYS.records)||"[]")}
function saveRecords(v){localStorage.setItem(KEYS.records,JSON.stringify(v))}
function todayKey(){const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function escapeHtml(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function logout(){alert("Demo logout: there is no server account in this local project.")}
if(!getStudents().length){saveStudents([{id:"CS001",name:"Arun Kumar",department:"Computer Science",year:"1st Year"},{id:"CS002",name:"Priya S",department:"Computer Science",year:"1st Year"},{id:"CS003",name:"Rahul M",department:"Computer Science",year:"1st Year"}])}
