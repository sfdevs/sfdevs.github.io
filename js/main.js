/*
    Projection by TEMPLATED
    templated.co @templatedco
    Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function ($) {
    function viewport() {
        var e = window,
            a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };
    }

    var shareLinks = document.querySelectorAll('.share-link');
    if (shareLinks.length) {
        for (var i = 0; i < shareLinks.length; i++) {
            shareLinks[i].addEventListener('click', function (e) {
                e.preventDefault();
                var $this = $(this);
                var href = $this.attr('href');
                var top = screen.width / 2 - 300;
                var left = screen.height / 2 - 150;

                return viewport().width > 736 ? window.open(href, $this.attr('title'), 'toolbar=no, resizable=yes, location=no, width=600, height=300, menubar=no, status=no, scrollbars=no, directories=no, top=' + top + ', left=' + left) : window.open(href);
            });
        }
    }
})(jQuery);

function disableCognitoLink() {
    var cognitoLinks = document.querySelectorAll('.cognito a');
    var searchText = "Powered by Cognito Forms";

    for (var i = 0; i < cognitoLinks.length; i++) {
        if (cognitoLinks[i].textContent.indexOf(searchText) > -1) {
            cognitoLinks[i].style.display = 'none';
            cognitoLinks[i].classList.add('d-none');
        }
    }
}

window.addEventListener('load', function() {
    disableCognitoLink();
    if (Cognito) {
        document.addEventListener('Cognito.ready', disableCognitoLink);
    }
});
