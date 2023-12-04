let langButton = document.querySelector("#lang-select"),
    selectedLangBox = document.querySelector("#selected-lang-box"),
    header_1 = document.querySelector("#E-D-H-1"),
    header_3 = document.querySelector("#E-D-H-3"),
    header_5 = document.querySelector("#E-D-H-5"),
    main = document.querySelector("main"),
    input_field_container = document.querySelector("#input-fields-container"),
    input_p_user = document.querySelector("#input-p-user"),
    input_p_pass = document.querySelector("#input-p-pass"),
    email_field = document.querySelector("#email-field"),
    pass_field = document.querySelector("#pass-field"),
    submit_button = document.querySelector("#submit-button"),
    footer_text = document.querySelector("footer p"),
    attr = 'ar',
    english = false;

let language = {
    en: {
        selectedLangBox:  "ع",
        header_1: "Login",
        header_3: "Please Enter Your Email And Password",
        input_p_user: 'Username or Email Address',
        input_p_pass: 'Password',
        email_field: 'Enter Email Address',
        pass_field: 'Enter Password',
        submit_button: 'Login',
        footer_text: 'This website by a team of institute students under the supervision of <b>Mr. Mohamed Shaban</b>.',
    },
    ar: {
        selectedLangBox: "En",
        header_1 : "تسجيل الدخول",
        header_3: "يرجى إدخال البيانات التالية للحصول على معلوماتك",
        input_p_user:  'اسم المستخدم أو البريد الإلكتروني',
        input_p_pass: 'كلمة السر',
        email_field: 'ادخل البريد الاكتروني',
        pass_field: 'ادخل كلمة المرور',
        submit_button: 'تسجيل الدخول',
        footer_text: 'تم بواسطة فريق من طلاب المعهد تحت إشراف <b>أ. محمد شعبان</b> - معيد بقسم نظم'
    }
}

function changeLanguage(){
    if(!english){
        selectedLangBox.style.cssText = "transform: translateX(-100%);";
        main.style.cssText = "animation: Ar_to_En_main 0.6s ease-in-out forwards !important;";
        footer_text.style.cssText = "animation: Ar_to_En_main 0.6s ease-in-out forwards !important;";
        input_field_container.style.cssText = "direction: rtl !important";
        email_field.style.cssText = 'text-align: right !important';
        pass_field.style.cssText = 'text-align: right !important';
    }else{
        selectedLangBox.style.cssText = "transform: translateX(0%);";
        main.style.cssText = "animation: En_to_Ar_main 0.6s ease-in-out forwards !important;";
        footer_text.style.cssText = "animation: En_to_Ar_main 0.6s ease-in-out forwards !important;";
        input_field_container.style.cssText = 'direction: ltr !important;';
        email_field.style.cssText = 'text-align: left !important';
        pass_field.style.cssText = 'text-align: left !important';
    }
    selectedLangBox.textContent = language[attr].selectedLangBox;
    header_1.textContent = language[attr].header_1;
    header_3.textContent = language[attr].header_3;
    input_p_user.textContent = language[attr].input_p_user;
    input_p_pass.textContent = language[attr].input_p_pass;
    email_field.placeholder = language[attr].email_field;
    pass_field.placeholder = language[attr].pass_field;
    submit_button.textContent = language[attr].submit_button;
    footer_text.innerHTML = language[attr].footer_text;
}

langButton.addEventListener("click",function(){
    english = !english;
    attr = english ? 'en':'ar';
    changeLanguage();
});


function enableSubmitButton() {
    submit_button.disabled = false;
    submit_button.style.cursor = 'pointer';
    submit_button.style.backgroundColor = '#039be5';
    submit_button.style.color = 'white';
    if (email_field.value == '' || pass_field.value == '') {
        submit_button.disabled = true;
        submit_button.style.cursor = 'not-allowed';
        submit_button.style.backgroundColor = '#5faacf';
        submit_button.style.color = 'white';
    }
}

email_field.addEventListener("keyup",function(){
    enableSubmitButton();
});

pass_field.addEventListener("keyup",function(){
    enableSubmitButton();
});

enableSubmitButton();
changeLanguage();