window.pp = window.pp || {};
pp.convert = {
    init: function() {
        $('form').on('submit', this.onclick);
        $('select').on('focus', this.preserveOldVal);
        $('select').on('change', this.handleSelectChange.bind(this));
        $('select').each(function(index, element) {
            var el = $(element);
            var symbol = el.val().toLowerCase();
            if (el.attr('name') === 'from') {
                //to case
                $('input[name="val"] ~ i').addClass('fa-' + symbol);

            } else {
                //to
                $('input.result ~ i').addClass('fa-' + symbol);

            }
            el.addClass('fa-' + symbol);
        });
    },
    onclick: function(e) {
        e.preventDefault();
        $.ajax({
            url: "/convert" + '?' + $(this).serialize(),
            context: document.body
        }).done(function(data) {
            $('.result').val(data.result);
        });
    },
    preserveOldVal: function(e) {
        e.target.prev = e.target.options[e.target.selectedIndex].text;
    },
    handleSelectChange: function(e) {
        var tar = $(e.target);
        var symbol = e.target.options[e.target.selectedIndex].text.toLowerCase();
        var cls = '';
        if (e.target.prev != 'undefined') {
            cls = 'fa-' + e.target.prev.toLowerCase();
        }
        if (tar.attr('name') === 'from') {
            //from case
            $('input[name="val"] ~ i').removeClass('fa-' + cls).addClass('fa-' + symbol);

        } else {
            //to
            $('input.result ~ i').removeClass('fa-' + cls).addClass('fa-' + symbol);

        }
        this.preserveOldVal(e);

    }
    
};
pp.convert.init();