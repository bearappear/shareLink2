$('.B_contact').click(function() {
    let link = $(this).data('link');
    window.open(link)
})
let number1 = '+84857534889';
let number2 = '+84914025948';
let number3 = '+84923091787';
let number4 = number1;
let wxname = 'Tham gia đội nhóm của chúng tôi và ';
function talk(number) {
    number = number || number1;
    // console.log(number);
    window.location.href = "https://zalo.me/" + number;
}