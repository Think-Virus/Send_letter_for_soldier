$('.content').keyup(function (e){

    let content = $(this).val();
    // 글자수 세기
    if (content.length == 0 || content == '') {
        $('.textCount').text('0자');
    }
    else {
        $('.textCount').text(content.length+ '자');
    }
});
