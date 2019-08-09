$(function () {

    $('.load-more').on('click', function () {
        const btn = $('this');
        const loader = btn.find('span');
        $.ajax({
            url: 'data.html',
            type: 'GET',
            beforeSend: function () {
                btn.attr('disabled', true);
                loader.addClass('d-inline-block');
            },
            success: function (response) {
                setTimeout(function () {
                    loader.removeClass('d-inline-block');
                    btn.attr('disabled', false);
                    $('.after-posts').before(response);
                }, 1000);
            },
            error: function () {
                alert('Error!');
                loader.removeClass('d-inline-block');
                btn.attr('disabled', false);
            }
        });
    });

    $('#modalCall').on('shown.bs.modal', function () {
        $("#recipient-name").focus();
    });

    $('#modalProject').on('shown.bs.modal', function () {
        $("#recipient-name-1").focus();
    });

    // $('#modalCall').on('show.bs.modal', function (event) {
    //     var button = $(event.relatedTarget); // Button that triggered the modal
    //     var recipient = button.data('whatever');// Extract info from data-* attributes
    //     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    //     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    //     var modal = $(this);
    //     modal.find('.modal-title').text('Оставьте свое имя и телефон ' + recipient);
    //     modal.find('.modal-body input').val(recipient);
    // });
});