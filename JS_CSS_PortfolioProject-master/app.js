(function () {
    // Add event listeners to navigation controls
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    // Add event listener to toggle light mode
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Add event listener for downloading the CV
    document.addEventListener('DOMContentLoaded', function () {
        const downloadBtn = document.querySelector('.submit-btn .main-btn');

        downloadBtn.addEventListener('click', function (event) {
            // Replace with the actual URL of your CV file
            const cvUrl = 'D:\JS_CSS_PortfolioProject-master\Ali Raza.docx';

            // Create a download link
            const downloadLink = document.createElement('a');
            downloadLink.href = cvUrl;
            downloadLink.download = 'Your_CV_File_Name.docx';

            // Trigger the click event to start the download
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    });
})();
