document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('btn-iniciar');
    if (btn) {
        btn.addEventListener('click', function() {
            document.getElementById('main-center').innerHTML = `
                <div class="video-container">
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            `;
        });
    }
});