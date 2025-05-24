const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};
scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const toastContainer = document.getElementById('toastContainer');
function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, duration);
}

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(content) {
    modalBody.innerHTML = content;
    modal.style.display = 'flex';
}
modalClose.onclick = () => {
    modal.style.display = 'none';
};
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

const loading = document.getElementById('loading');
function showLoading() {
    loading.style.display = 'flex';
}
function hideLoading() {
    loading.style.display = 'none';
}

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.onclick = (e) => {
    e.preventDefault();
    openModal('<h4>آیا می‌خواهید خارج شوید؟</h4><button id="confirmLogout" class="btn btn-danger mt-3">بله، خروج</button>');
    document.getElementById('confirmLogout').onclick = () => {
        showLoading();
        setTimeout(() => {
            hideLoading();
            showToast('خروج با موفقیت انجام شد.');
            modal.style.display = 'none';
            window.location.href = "login.html";
        }, 2000);
    };
};
