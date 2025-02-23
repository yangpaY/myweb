function toggleTheme() {
    const body = document.body;
    const button = document.querySelector('.theme-toggle');
    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        button.textContent = 'Light Mode';
    } else {
        body.classList.add('light-mode');
        button.textContent = 'Dark Mode';
    }
}

// 페이지 로드 시 애니메이션 효과
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});