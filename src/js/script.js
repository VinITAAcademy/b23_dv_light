window.addEventListener('DOMContentLoaded', function () {

    var video = this.document.querySelector('.videoPreview');

    video.addEventListener('click', function () {

        if (video.classList.contains('ready')) {
            return;
        }

        video.classList.add('ready');

        video.insertAdjacentHTML('afterbegin', '<iframe class="videoPreview" src="https://www.youtube.com/embed/pmrIlYBWP20?si=fEDOS5Ct8-rmn2I9&autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');

    });
});