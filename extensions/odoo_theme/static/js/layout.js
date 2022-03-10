(function ($) {

    document.addEventListener('DOMContentLoaded', function () {
        const content = document.getElementById('o_content');

        // Enforce the presence of the `img-fluid` class on all images in the body
        content.querySelectorAll('img').forEach(image => {
            image.classList.add('img-fluid');



            image.setAttribute('type', 'button');
            image.setAttribute('data-bs-toggle', 'modal');
            image.setAttribute('data-bs-target', `#modal-${image.id}`);

            const div = document.createElement("div");
            div.innerHTML = `<div class="modal fade" id="modal-${image.id}">\n` +
                '  <div class="modal-dialog modal-dialog-centered" style="max-width: auto!important">\n' +
                '    <div class="modal-content">\n' +
                '      <div class="modal-body">\n' +
                '        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n' +
                `        <img src="${image.src}" alt="Create an invoice"/>\n` +
                '      </div>\n' +
                '    </div>\n' +
                '  </div>\n' +
                '</div>'
            image.parentNode.append(div);
        });
    });


})();
