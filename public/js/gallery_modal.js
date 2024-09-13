// document.addEventListener('DOMContentLoaded', function() {
//     const folderImages = document.querySelectorAll('.portfolio-folder .folder-image');
//     const modal = document.getElementById("modal");
//     const modalImg = document.getElementById("modalImg");
//     const closeModal = document.getElementsByClassName("close")[0];

//     folderImages.forEach((image, index) => {
//         image.addEventListener('click', function() {
//             modal.style.display = "block";
//             modalImg.src = this.src;
//         });
//     });

//     closeModal.onclick = function() {
//         modal.style.display = "none";
//     }

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const folderImages = document.querySelectorAll('.portfolio-folder .folder-image');
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const closeModal = document.getElementsByClassName("close")[0];
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentIndex = 0;

    function showModal(index) {
        modal.style.display = "block";
        modalImg.src = folderImages[index].src;
        currentIndex = index;
    }

    function closeModalFunction() {
        modal.style.display = "none";
    }

    function showPrev() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : folderImages.length - 1;
        showModal(currentIndex);
    }

    function showNext() {
        currentIndex = (currentIndex < folderImages.length - 1) ? currentIndex + 1 : 0;
        showModal(currentIndex);
    }

    folderImages.forEach((image, index) => {
        image.addEventListener('click', function() {
            showModal(index);
        });
    });

    closeModal.onclick = closeModalFunction;
    prevBtn.onclick = showPrev;
    nextBtn.onclick = showNext;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModalFunction();
        }
    }
});
