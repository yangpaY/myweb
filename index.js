// 테마 토글 기능
function toggleTheme() {
    const body = document.body;
    const button = document.querySelector('.theme-toggle');
    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        button.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-mode');
        button.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
}

// 저장된 테마 적용
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.querySelector('.theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // 프로젝트가 없을 경우 메시지 표시
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length === 0) {
        document.getElementById('no-projects').style.display = 'flex';
    }
    
    // 애니메이션 효과
    const heroSection = document.querySelector('.hero-section');
    const contactSection = document.querySelector('.contact-section');
    
    setTimeout(() => {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }, 200);
    
    setTimeout(() => {
        contactSection.style.opacity = '1';
        contactSection.style.transform = 'translateY(0)';
    }, 400);
});

// 탭 열기 기능
function openTab(tabName) {
    const tabs = document.querySelectorAll('.content-tab');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    
    const selectedTab = document.getElementById(`${tabName}-tab`);
    selectedTab.style.display = 'block';
    
    // 스크롤을 탭으로 이동
    selectedTab.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 탭 닫기 기능
function closeTab(tabName) {
    document.getElementById(`${tabName}-tab`).style.display = 'none';
}