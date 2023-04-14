var express = require("express");
const shortid = require("shortid");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync(__dirname + "/../db/db.json");
const db = low(adapter);

var router = express.Router();

// get请求，添加记录页面
router.get("/create", (request, response) => {
  response.render("create");
});

// get请求，列表页面
router.get("/list", (request, response) => {
  let accounts = db.get("accounts").value();
  response.render("list", { accounts });
});

// post请求，提交数据
router.post("/create", (request, response) => {
  let id = shortid.generate();
  db.get("accounts")
    .unshift({ id: id, ...request.body })
    .write();
  response.render("success", { msg: "添加成功", url: "/list" });
});

// 删除记录
router.get("/del_account/:id", (request, response) => {
  let id = request.params.id;
  db.get("accounts").remove({ id: id }).write();
  response.render("success", { msg: "删除成功", url: "/list" });
});

module.exports = router;
