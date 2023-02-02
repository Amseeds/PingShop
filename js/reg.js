window.onload = function () {
    var checkPhoneNumber = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    var tel = document.querySelector('#tel');
    function regexp(ele, reg, success_msg, error_msg) {
        ele.onblur = function () {
            if (reg.test(ele.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>' + success_msg + '</span>';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>' + error_msg + '</span>';

            }
        };
    }
    regexp(tel, checkPhoneNumber, '用户名合法', '用户名不合法');
    var checkMsg = /^\d{6}$/;
    var msg = document.querySelector('#msg');
    regexp(msg, checkMsg, '验证码合法', '验证码不合法');

    var checkQQ = /[1-9][0-9]{4,}/;
    var qq = document.querySelector('#qq');
    regexp(qq, checkQQ, 'QQ号合法', 'QQ号不合法');

    var checkPsw = /^[a-zA-Z]\w{5,17}$/;
    var psw = document.querySelector('#psw');
    regexp(psw, checkPsw, '密码合法', '密码不合法');

    var confirmpsw = document.querySelector('#confirmpsw');
    confirmpsw.onblur = function () {
        if (confirmpsw.value !== null && confirmpsw.value === psw.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>两次输入的密码一致</span>';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次输入的密码不一致</span>';
        }
    };

};