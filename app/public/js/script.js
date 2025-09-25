document.addEventListener("DOMContentLoaded",()=>{

    document.getElementById('img').addEventListener("change",()=>{
        var imgPreview = document.getElementById('img-preview');
        imgPreview.src = URL.createObjectURL(event.target.files[0]);

    });

})