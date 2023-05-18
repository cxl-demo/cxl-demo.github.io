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




const SignIn = document.getElementById("Signin");
const SignUp = document.getElementById("Signup");


//登录功能
SignIn.addEventListener("click", () => {
  //获取本地users.text文件，并转化成json格式
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.txt');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = xhr.responseText;
      const startIndex = data.indexOf('[');
      const endIndex = data.lastIndexOf(']');
      const usersText = data.substring(startIndex, endIndex + 1);
      const users = JSON.parse(usersText);


      //获取表单数据
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      // 遍历数组中的每个用户信息，进行匹配
      for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
          // 如果找到了匹配的用户信息，返回true
          alert(users[i].username + ',登录成功');
          return
        }
      }
      // 如果循环结束后还没有找到匹配的用户信息，返回false
      alert('输出的邮箱或密码有错误')
    }
  };
  xhr.send();

})

//注册功能
SignUp.addEventListener("click", () => {
  //获取本地users.text文件，并转化成json格式
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.txt');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = xhr.responseText;
      const startIndex = data.indexOf('[');
      const endIndex = data.lastIndexOf(']');
      const usersText = data.substring(startIndex, endIndex + 1);
      const users = JSON.parse(usersText);


      //获取表单数据
      var username = document.getElementById('username').value;
      var email = document.getElementById('Email').value;
      var password = document.getElementById('Password').value;

      for (i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          alert("用户名：" + username + " 已存在，请重新输入")
          return
        }
      }

      for (i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          alert("邮箱地址：" + email + " 已存在，请重新输入")
          return
        }
      }

      users.push({
        "username": username,
        "email": email,
        "password": password
      })

      console.log(users);

      alert("注册成功")
    }
  };
  xhr.send();
})
