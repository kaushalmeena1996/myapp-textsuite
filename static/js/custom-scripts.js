function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#ocr_image').attr('src', e.target.result)
            $('#btn-1').hide();
            $('#btn-2').hide();
            $('#btn-3').prop('disabled', false);
            $('#btn-4').prop('disabled', false);
            $('#image_container').val(e.target.result);
            $('#ocr_image').show();
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function openImage() {
    $('#image_upload').trigger('click');
}

function openWebCam() {
    $('#webcam_div').show();
    Webcam.attach('#ocr_camera');
}

function resetImage() {
    $('#ocr_image').hide();
    $('#btn-1').show();
    $('#btn-2').show();
    $('#btn-3').prop('disabled', true);
    $('#btn-4').prop('disabled', true);
}

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        $('#ocr_image').attr('src', data_uri)
        $('#btn-1').hide();
        $('#btn-2').hide();
        $('#btn-3').prop('disabled', false);
        $('#btn-4').prop('disabled', false);
        $('#image_container').val(data_uri);
        $('#ocr_image').show();
    });
}

function stopCamera() {
    Webcam.reset();
    $('#webcam_div').hide();
}