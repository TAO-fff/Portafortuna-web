document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector(".submit-btn"); // 送信ボタン
    const errorMessage = document.getElementById("error-message"); // エラーメッセージ
    const requiredFields = document.querySelectorAll("input[required], textarea[required]"); // 必須項目（input + textarea）
    const optionalFields = document.querySelectorAll(".optional-input"); // 必須ではない項目

    // 必須項目をチェックする関数
    function checkRequiredFields() {
        let allFilled = true;

        // 必須項目がすべて埋まっているかチェック
        requiredFields.forEach(field => {
            // チェックボックスの場合も確認する
            if (field.type === "checkbox") {
                // チェックボックスが未チェックの場合は未入力扱い
                if (!field.checked) {
                    allFilled = false;
                }
            } else {
                // 他の必須フィールドが空の場合も未入力扱い
                if (!field.value.trim()) {
                    allFilled = false;
                }
            }
        });

        // 必須項目がすべて埋まっていた場合の処理
        if (allFilled) {
            submitBtn.disabled = false; // すべて埋まっていればボタン有効化
            errorMessage.style.display = "none"; // エラーメッセージ非表示
        } else {
            submitBtn.disabled = true; // 未入力があればボタン無効化
            errorMessage.style.display = "block"; // エラーメッセージ表示
        }
    }

    // 入力時にリアルタイムでチェック
    requiredFields.forEach(field => {
        field.addEventListener("input", checkRequiredFields); // フィールド入力時
    });

    // チェックボックスの変更時にもチェック
    requiredFields.forEach(field => {
        if (field.type === "checkbox") {
            field.addEventListener("change", checkRequiredFields); // チェックボックスの状態が変わった時
        }
    });

    checkRequiredFields(); // 初回チェック
});

// thanksページ移動
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
  
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // デフォルトのフォーム送信を防ぐ
  
        var formData = new FormData(form);
        var actionUrl = form.getAttribute("action"); // Googleフォームの送信先URL
  
        fetch(actionUrl, {
          method: "POST",
          body: formData,
          mode: "no-cors", // GoogleフォームのCORS制限を回避する
        }).then(() => {
          window.location.href = "thanks.html"; // 送信完了後にthanks.htmlへリダイレクト
        }).catch(error => {
          console.error("送信エラー:", error);
        });
      });
    }
  });
  
  