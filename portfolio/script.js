document.querySelectorAll('.card .link[data-title]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = btn.dataset.title || '詳細';
        const desc = btn.dataset.desc || '';
        document.getElementById('m-title').textContent = title;
        document.getElementById('m-desc').textContent = desc;
        document.getElementById('modal').classList.add('open');
    });
});

document.getElementById('m-close').addEventListener('click', () => {
    document.getElementById('modal').classList.remove('open');
});

document.getElementById('year').textContent = new Date().getFullYear();
