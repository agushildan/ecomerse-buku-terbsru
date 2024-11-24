document.querySelectorAll('.btndetail').forEach(item => {
    item.addEventListener('click', (event) => {
        let parent = event.target.parentNode.parentNode;
        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi').innerHTML;
        
        let tombolmodal = document.querySelector('.btnmodal');
        tombolmodal.click();
        document.querySelector('.modaltitle').innerHTML = judul;
        
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalimage').innerHTML = '';
        document.querySelector('.modalimage').appendChild(image);
        document.querySelector('.modaldeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalharga').innerHTML = harga;

        const nohp = '6289519808548';
        let pesan = `https://wa.me/${nohp}?text=Halo Bang, saya mau pesan produk ini ${judul} dengan harga ${harga}`;
        document.querySelector('.btnbeli').href = pesan;
    });
});
