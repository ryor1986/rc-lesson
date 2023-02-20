$(function() {
    // // 郵便番号入力時の住所入力補完
    // $('input#postCode').change(function() {
    //     getAddressByPostCode();
    // });

    // // 雑誌の選択
    // $('select#magazine').change(function() {
    //     $('#date').val('');
    //     $('select#date option.date').hide();
    //     $('select#date option.date').wrap('<span>');
    //     let magazine = $('#magazine option:selected').attr('id');
    //     $('.' + magazine).show();
    //     $('.' + magazine).unwrap();
    // });

    // // 雑誌の初期値選択
    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // let magazine = urlParams.get('magazine');
    // if (magazine !== null) {
    //     $('select#magazine option#' + magazine).prop('selected', true);
    //     $('select#magazine').change();
    // }

    // // 同行者有無の選択
    // $('select#companionExist').change(function() {
    //     let companionExist = ($('select#companionExist').val() == 1);
    //     // 必須チェック制御
    //     $('#companionInfo input').attr('required', companionExist);
    //     // 表示、非表示
    //     if (companionExist) {
    //         $('#companionInfo').show();
    //     } else {
    //         $('#companionInfo').hide();
    //     }
    //     // let magazine = $('#magazine option:selected').attr('id');
    // });

    // 確認ボタンのクリック
    $('#confirmBtn').click(function() {
        if ($('form')[0].reportValidity()) {
            // window.scroll({ top: 0, behavior: 'smooth' });
            window.scroll(0, 0);
            $('input, select').attr('disabled', true);
            $('#confirmBtn').hide();
            $('#submitBtn').show();
            $('#backBtn').show();
            $('.showOnConfirm').show();
            $('.hideOnConfirm').hide();
        }
    });

    // 送信ボタンのクリック
    $('#submitBtn').click(function() {
        $('input, select').attr('disabled', false);
        $('#submitBtn').attr('disabled', true);
        $('#backBtn').attr('disabled', true);
        $('form')[0].submit();
    });

    // 戻るボタンのクリック
    $('#backBtn').click(function() {
        $('input, select').attr('disabled', false);
        $('#confirmBtn').show();
        $('#submitBtn').hide();
        $('#backBtn').hide();
        $('.showOnConfirm').hide();
        $('.hideOnConfirm').show();
    });

    //     // リアルタイムバリデーション
    //     $('input').change(function() {
    //         this.reportValidity();
    //     });
});

// function getAddressByPostCode() {
//     let postCode = $('#postCode').val();

//     $.ajax({
//             url: 'https://zip-cloud.appspot.com/api/search?zipcode=' + postCode,
//             type: 'GET',
//             cache: false,
//             dataType: 'json',
//         })
//         .done(function(data) {
//             var data_stringify = JSON.stringify(data);
//             var data_json = JSON.parse(data_stringify);
//             // console.debug(data_json); //DBG
//             if (data_json["results"] !== null) {
//                 let results = data_json["results"][0];
//                 $('#state').val(results['address1']);
//                 $('#address').val(results['address2'] + results['address3']);
//             }
//         })
//         .fail(function(xhr) {
//             console.error('ajax error');
//         });
// }

function checkEmail(input) {
    var email = document.getElementById("email").value;
    var email2 = input.value;

    // パスワードの一致確認
    if (email != email2) {
        input.setCustomValidity('メールアドレスが一致しません');
    } else {
        input.setCustomValidity('');
    }
}