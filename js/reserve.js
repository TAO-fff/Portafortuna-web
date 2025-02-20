// ページが読み込まれたときに実行
window.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  const submitBtn = form.querySelector('button[type="submit"]');
  
  // 必須項目（required属性が付いている）の入力をチェック
  const requiredInputs = form.querySelectorAll('input[required], textarea[required], input[type="radio"][required], input[type="checkbox"][required]');

  // チェック関数
  function checkRequiredInputs() {
    let isValid = true;

    requiredInputs.forEach(input => {
      if (input.type === 'radio' || input.type === 'checkbox') {
        const group = form.querySelectorAll(`input[name="${input.name}"]`);
        const isChecked = Array.from(group).some(radio => radio.checked);
        if (!isChecked) {
          isValid = false;
        }
      } else if (!input.value) {
        isValid = false;
      }
    });

    // 送信ボタンを有効/無効にする
    submitBtn.disabled = !isValid;
  }

  // 入力項目が変更されたときにチェックを実行
  requiredInputs.forEach(input => {
    input.addEventListener('input', checkRequiredInputs);
    input.addEventListener('change', checkRequiredInputs);
  });

  // 最初にチェックを実行してボタンの初期状態を設定
  checkRequiredInputs();
});
