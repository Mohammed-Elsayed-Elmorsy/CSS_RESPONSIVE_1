window.onscroll = function () {
    if (window.scrollY > 5200) {
        document.querySelectorAll('.progress .content >div div span').forEach(span => {
            span.style.animationPlayState = 'running'
        })
    }
}