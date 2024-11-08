var user = {
  name: "阿星",
  birth: "2002-5-7",
};
observe(user);

// 显示姓氏
function showName() {
  document.querySelector("h1").textContent = "姓名：" + user.name;
}

// 显示年龄
function showAge() {
  var birthday = new Date(user.birth);
  var today = new Date();
  today.setHours(0), today.setMinutes(0), today.setMilliseconds(0);
  thisYearBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  var age = today.getFullYear() - birthday.getFullYear();
  if (today.getTime() < thisYearBirthday.getTime()) {
    age--;
  }
  document.querySelector("div").textContent = "年龄：" + age;
}

/** 表单更新 */
function handleInput() {
  const input = document.querySelector("input");
  input.addEventListener("input", (event) => {
    // 获取当前输入值
    const value = event.target.value;
    // 更新显示
    user.name = `${value}`;
  });
  showName();
}
// showName();
// showAge();
handleInput();

autorun(showName);
autorun(showAge);
