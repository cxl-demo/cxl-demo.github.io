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


//登录
// 定义一个数组，用于存放用户信息
var users = [
  { email: '123@qq.com', password: '123456' },
  { email: '456@qq.com', password: '654321' },
  { email: '789@qq.com', password: 'abcdef' }
];


//验证email与密码是否正确
function validate() {

var email = document.getElementById('email');
var password = document.getElementById('password');

  // 遍历数组中的每个用户信息，进行匹配
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      // 如果找到了匹配的用户信息，返回true
      alert('登录成功');
      console.log('登陆成功')
    }
  }

  // 如果循环结束后还没有找到匹配的用户信息，返回false
  alert('输出的邮箱或密码有错误')
  console.log('登陆失败')
}
