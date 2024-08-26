// Cek apakah halaman ditemukan
if (document.readyState === 'complete') {
    if (document.body.innerHTML.includes('404') || document.title === '404') {
        window.location.href = '/404.html';
    }
}
