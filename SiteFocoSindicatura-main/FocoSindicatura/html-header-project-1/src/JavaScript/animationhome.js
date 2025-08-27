document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('btn-iniciar');
    if (btn) {
        btn.addEventListener('click', function() {
            document.getElementById('main-center').innerHTML = `
                <div class="main-center" style="flex-direction: column; align-items: center; gap: 16px;">
                    <div>
                        <a href="somos.html" class="btn-iniciar btn-quem-somos" id="btn-quem-somos">Quem Somos</a>
                    </div>
                    <div class="video-container">
                        <iframe width="560" height="315"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            `;
        });
    }
});