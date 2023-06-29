window.onload = function () {
  // LocalStorageからデータを取得
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  // データが存在すれば、入力フィールドにセット
  if (storedEmail && storedPassword) {
    document.getElementById("email").value = storedEmail;
    document.getElementById("pass").value = storedPassword;
  }

  // ボタンクリック時にLocalStorageに保存
  document
    .querySelector(".button-submission")
    .addEventListener("click", function (e) {
      e.preventDefault(); // Form submissionを停止
      const email = document.getElementById("email").value;
      const password = document.getElementById("pass").value;
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    });
};
