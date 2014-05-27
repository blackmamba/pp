window.pp = window.pp || {};

pp.convert = {
    init: function() {

        $('form').on('submit', this.onclick);

    },

    onclick: function(e) {
        e.preventDefault();
        $.ajax({
            url: "/convert" + '?' + $(this).serialize(),
            context: document.body
        }).done(function(data) {
            $('.result').val(data.result);
        });
    }


};
pp.convert.init();