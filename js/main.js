(function ($, m) {
    function viewport() {
        let e = window,
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

    const shareLinks = document.querySelectorAll('.share-link');
    if (shareLinks.length) {
        for (let i = 0; i < shareLinks.length; i++) {
            shareLinks[i].addEventListener('click', function (e) {
                e.preventDefault();
                let $this = $(this);
                let href = $this.attr('href');
                let top = screen.width / 2 - 300;
                let left = screen.height / 2 - 150;

                return viewport().width > 736 ? window.open(href, $this.attr('title'), 'toolbar=no, resizable=yes, location=no, width=600, height=300, menubar=no, status=no, scrollbars=no, directories=no, top=' + top + ', left=' + left) : window.open(href);
            });
        }
    }
    const disableCognitoLink = function () {
        const cognitoLinks = document.querySelectorAll('.cognito a');
        const searchText = "Powered by Cognito Forms";

        for (let i = 0; i < cognitoLinks.length; i++) {
            if (cognitoLinks[i].textContent.indexOf(searchText) > -1) {
                cognitoLinks[i].style.display = 'none';
                cognitoLinks[i].classList.add('d-none');
            }
        }
    }

    const fixCognitoForm = function () {
        const formGroups = document.querySelectorAll('.c-field');
        for (let i = 0; i < formGroups.length; i++) {
            let formGroup = formGroups[i];
            formGroup.classList.add('form-group');
            let inputs = formGroup.querySelectorAll('input');
            if (inputs) {
                for (let j = 0; j < inputs.length; j++) {
                    let input = inputs[j];
                    input.classList.add('form-control');
                    input.style.fontSize = '16px';
                }
            }
            let textArea = formGroup.querySelector('textarea');
            if (textArea) {
                textArea.classList.add('form-control');
                textArea.style.fontSize = '16px';
            }
        }
    }

    const homepageBody = document.querySelector('.homepage');
    if (homepageBody) {
        const ext = m.webp ? 'webp' : m.jpeg2000 ? 'jp2' : 'jpg';
        homepageBody.style.backgroundImage = "url(/images/banner." + ext + ")";
    }

    window.addEventListener('load', function () {
        fixCognitoForm();
        disableCognitoLink();
        if (Cognito) {
            document.addEventListener('Cognito.ready', fixCognitoForm);
            document.addEventListener('Cognito.ready', disableCognitoLink);
        }
    });
})(jQuery, Modernizr);
