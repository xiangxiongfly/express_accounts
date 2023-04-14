const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

// 初始化
// db.defaults({ posts: [], user: {} }).write();

// 添加数据
// db.get("posts").push({ id: 1, title: "hello world" }).write();

// 获取单挑数据
// let result = db.get("posts").find({ id: 1 }).value();
// console.log(result);

// 获取所有数据
// let results = db.get("posts").value();
// console.log(results);

// 删除数据
// let result = db.get("posts").remove({ id: 2 }).write();
// console.log("删除 " + result);

// 修改数据
// db.get("posts").find({ id: 2 }).assign({ title: "修改了" }).write();

// 使用简写语法
db.set("user.name", "小明").write();
