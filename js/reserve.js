// ページが読み込まれたときに実行
window.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.submit-btn');
    const errorMessage = document.getElementById('error-message');
    const requiredFields = form.querySelectorAll('.required-field input, .required-field textarea');
    
    function validateForm() {
      let isValid = true;
  
      requiredFields.forEach(field => {
        if (field.type === 'radio' || field.type === 'checkbox') {
          const group = form.querySelectorAll(`input[name="${field.name}"]`);
          const isChecked = Array.from(group).some(input => input.checked);
          if (!isChecked) {
            isValid = false;
          }
        } else if (!field.value.trim()) {
          isValid = false;
        }
      });
  
      if (isValid) {
        submitBtn.removeAttribute('disabled');
        errorMessage.style.display = 'none';
      } else {
        submitBtn.setAttribute('disabled', 'disabled');
        errorMessage.style.display = 'block';
      }
    }
  
    // フォームの入力が変更されたら検証
    requiredFields.forEach(field => {
      field.addEventListener('input', validateForm);
      field.addEventListener('change', validateForm);
    });
  
    // 初期状態で検証
    validateForm();
  });
  
