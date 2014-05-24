window.pp = window.pp || {};

pp.convert = {
    init: function() {
        $('button[type="submit"]').on('click', this.onclick);

    },

    onclick: function() {
        $.ajax({
            url: "/convert",
            context: document.body
        }).done(function() {
            $(this).addClass("done");
        });
    }


}