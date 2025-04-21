// 导航栏切换
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});


// 视差滚动效果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const homeContent = document.querySelector('.home-content');
    const highlights = document.querySelector('.core-highlights');
    
    if (homeContent) {
        homeContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    if (highlights) {
        highlights.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// 动态光标效果
document.addEventListener('mousemove', (e) => {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
    document.body.appendChild(glow);
    
    setTimeout(() => glow.remove(), 1000);
});
/*
// 3D卡片效果
function init3DCards() {
    document.querySelectorAll('.tech-block').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${(y - rect.height/2) / 10}deg)
                rotateY(${-(x - rect.width/2) / 10}deg)
                translateZ(20px)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}
*/
// 视频播放控制
const video = document.querySelector('.demo-video video');
const playPauseButton = document.querySelector('.play-pause');
const muteButton = document.querySelector('.mute');
const progressBar = document.querySelector('.progress-bar');

if (video) {
    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    muteButton.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            video.muted = true;
            muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });

    video.addEventListener('timeupdate', () => {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.value = progress;
    });

    progressBar.addEventListener('input', () => {
        const time = (progressBar.value / 100) * video.duration;
        video.currentTime = time;
    });
}

// 互动模块表单显示与隐藏
function openContactForm() {
    document.getElementById('contact-form').style.display = 'flex';
}

function closeContactForm() {
    document.getElementById('contact-form').style.display = 'none';
}

// 初始化函数
function init() {
    init3DCards();
}

// 页面加载初始化
window.addEventListener('DOMContentLoaded', init);
 // 回到顶部按钮的显示和隐藏
        window.onscroll = function() {
            var backToTopButton = document.getElementById("backToTop");
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        function scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        // 功能展示切换
        function showFunction(functionName) {
            var contents = document.querySelectorAll('.function-content');
            contents.forEach(function(content) {
                content.style.display = 'none';
            });
            document.getElementById(functionName).style.display = 'block';
        }

        // 左侧目录栏滑动显示
        window.onload = function() {
            var leftNav = document.getElementById('leftNav');
            setTimeout(function() {
                leftNav.classList.add('show'); // 页面加载后左侧导航栏滑动显示
            }, 1000); // 延时1秒
        };
        const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const navButtons = document.querySelectorAll('.slider-nav button');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    let currentIndex = 0;

    function updateSlider() {
      const offset = -currentIndex * 100;
      slider.style.transform = `translateX(${offset}%)`;

      navButtons.forEach((button, index) => {
        if (index === currentIndex) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    }

    navButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    setInterval(nextSlide, 3000);