document.getElementById('giftBox').addEventListener('click', function() {
    this.classList.add('open');
    document.getElementById('surprise').style.display = 'block';
    document.getElementById('giftBox').style.display = 'none';
});

function showImages() {
    document.getElementById('surprise').style.display = 'none';
    document.getElementById('heartContainer').style.display = 'block';

    let images = document.querySelectorAll('.heart-img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = "1";
            img.style.transform = "scale(1)";
        }, index * 400);
    });

    // Hiển thị ảnh trung tâm sau cùng
    setTimeout(() => {
        let centerImg = document.getElementById('centerImage');

        if (!centerImg) {
            centerImg = document.createElement("img");
            centerImg.id = "centerImage";
            centerImg.classList.add("center-image");
            centerImg.src = "../img/nhoccon.jpg";
            centerImg.style.display = "none";
            document.getElementById('heartContainer').appendChild(centerImg);
        }

        requestAnimationFrame(() => {
            centerImg.style.display = 'block';
            centerImg.style.opacity = '0';
            centerImg.style.transition = "opacity 1s ease-in-out";
            setTimeout(() => {
                centerImg.style.opacity = '1';
            }, 100);
        });

    }, images.length * 400 + 500);
}

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("heartContainer");
    container.style.display = "none"; // Ẩn ban đầu

    function adjustHeartShape() {
        const isLandscape = window.innerWidth > window.innerHeight;
        const numImages = isLandscape ? 25 : 29;
        const size = isLandscape ? 10 : 25;
        const centerX = isLandscape ? 180 : 120;
        const centerY = isLandscape ? 140 : 120;

        container.innerHTML = ""; // Xóa các ảnh cũ để vẽ lại

        for (let i = 0; i < numImages; i++) {
            const t = Math.PI * 2 * (i / numImages);
            const x = size * (16 * Math.pow(Math.sin(t), 3));
            const y = -size * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

            const img = document.createElement("img");
            img.src = "../img/img_hoahong.png";
            img.classList.add("heart-img");
            img.style.position = "absolute";
            img.style.left = `${centerX + x}px`;
            img.style.top = `${centerY + y}px`;
            img.style.opacity = "0";
            img.style.transform = "scale(0.5)";
            img.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

            container.appendChild(img);
        }
    }

    adjustHeartShape();
    window.addEventListener("resize", adjustHeartShape);
});

