<script>
        function imagefun() {
            var Image_Id = document.getElementById('getImage');
            if (Image_Id.src.match("loupville.jpg")) {
                Image_Id.src = "logostrattmon.jpg";
            else {
                Image_Id.src = "loupville.jpg";
            }
        }        
    </script>