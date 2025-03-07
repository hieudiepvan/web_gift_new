document.getElementById('giftBox').addEventListener('click', function() {
            this.classList.add('open');
            document.getElementById('surprise').style.display = 'block';
            document.getElementById('giftBox').style.display='none';
        });

function showImages() {
            let images = document.querySelectorAll('.image-container img');
            images.forEach((img, index) => {
                setTimeout(() => {
                    document.getElementById('surprise').style.display='none';
                    img.classList.add('show'); 
                }, index * 800);
            });
        }        