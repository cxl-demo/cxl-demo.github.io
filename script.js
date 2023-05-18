const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

firstForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

//用户数据
var users = [
  { "username": "张三", "email": "123@qq.com", "password": "123456" },
  { "username": "李四", "email": "456@qq.com", "password": "654321" },
  { "username": "王五", "email": "789@qq.com", "password": "abcdef" }
]



const SignIn = document.getElementById("Signin");
const SignUp = document.getElementById("Signup");


//登录功能
SignIn.addEventListener("click", () => {

  //获取表单数据
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // 遍历数组中的每个用户信息，进行匹配
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      // 如果找到了匹配的用户信息，返回true
      alert('登录成功');
      return
    }
  }
  // 如果循环结束后还没有找到匹配的用户信息，返回false
  alert('输出的邮箱或密码有错误')

})

//注册功能
SignUp.addEventListener("click", () => {

  //获取表单数据
  var username = document.getElementById('username').value;
  var email = document.getElementById('Email').value;
  var password = document.getElementById('Password').value;

  //检查用户名是否重复
  for (i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      alert("用户名：" + username + " 已存在，请重新输入")
      return
    }
  }

  //检查邮箱地址是否重复
  for (i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      alert("邮箱地址：" + email + " 已存在，请重新输入")
      return
    }
  }
  //新增用户信息
  users.push({
    "username": username,
    "email": email,
    "password": password
  })

  alert("注册成功")
})
