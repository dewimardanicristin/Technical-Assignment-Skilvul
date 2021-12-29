1. Apa perbedaan antara static web server dan dynamic web server?
    - Sebuah server web dinamis terdiri dari static web server ditambah perangkat lunak tambahan, seperti server aplikasi dan database.Disebut "dinamis" karena server aplikasi memperbarui file yang dihosting sebelum mengirim konten ke browser melalui server HTTP. Sedangkan static web server, atau stack, terdiri dari komputer (hardware) dengan server HTTP (software). Disebut "statis" karena server mengirimkan file yang dihosting apa adanya ke browser Anda.
2. Jelaskan arsitektur static site dan dynamic site
    - Dynamic Site Architecture
    ![image](https://user-images.githubusercontent.com/73428220/145914194-6c204c38-f2cf-43b8-91ea-0d26b142f129.png)

        Dynamic Site dapat mengembalikan data yang berbeda untuk URL berdasarkan informasi yang diberikan oleh pengguna atau preferensi yang disimpan dan dapat melakukan operasi lain sebagai bagian dari pengembalian respons (misalnya, mengirim pemberitahuan).
        Sebagian besar kode untuk mendukung situs web dinamis harus dijalankan di server. Membuat kode ini dikenal sebagai "pemrserver-side programming". Untuk memberikan gambaran yang lebih nyata bagaimana website bekerja berikut langkah-langkahnya :
        - Langkah 1
        
            Untuk mendapatkan akses ke situs web pada dasarnya Anda menggunakan browser. Masing-masing mengirim Permintaan HTTP ke server web. Permintaan HTTP adalah teks kode dengan informasi seperti browser, versinya, tanggal, bahasa, cookie Anda, dan URL (apa yang sebenarnya ingin dicapai).
        - Langkah 2
       
            Server Web membaca kode HTTP dan mengirim semua info ke Aplikasi Web.
        - Langkah 3
        
           Aplikasi web bekerja dengan parameter dan memprosesnya sesuai dengan kode dan Database. 
        - Langkah 4, 5
        
            Web App mengembangkan kode HTML dengan meta data dan mengirimkannya ke Web Server.
        - Langkah 6
        
            Server Web membuat Permintaan HTTP baru (jawaban untuk permintaan browser) dan akhirnya mengirimkannya ke browser.
        - Langkah 7
        
            Aplikasi Web membuat tag meta dalam kode HTML, Alasan untuk menambahkannya adalah untuk mengunduh file CSS, JS, Gambar atau Video secara terpisah untuk mengoptimalkan waktu respons dan juga memungkinkan untuk meningkatkan tingkat keamanan situs.
        - Terakhir
        
            Dan sekarang situs siap digunakan. Setiap klik di situs berarti mengirim Permintaan HTTP ke Server Web dan melakukannya beberapa kali untuk melengkapi semua formulir HTML.
     - Static Site Architecture
     ![image](https://user-images.githubusercontent.com/73428220/145914158-343e1461-953a-4586-b3c8-bb31fe674621.png)
        Static Site adalah situs yang mengembalikan konten hard-code yang sama dari server setiap kali sumber daya tertentu diminta). Saat pengguna ingin menavigasi ke halaman, browser mengirimkan permintaan "GET" HTTP yang menentukan URL-nya.Gambaran cara kerja website dari statice site architecture kurang lebih sama dengan dynamic hanya saja pada static site architecture tidak ada database yang perlu dimuat untuk menghasilkan halaman.
    
3. Apa saja yang dapat kita buat pada sisi server?
    - Efficient storage and delivery of information
    - Customised user experience
    - Controlled access to content
    - Store session/state information
    - Notifications and communication
    - Data analysis

4. Mohon jelaskan apa itu RESTful?
    REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server.
5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)
    - GET — retrieve a specific resource (by id) or a collection of resources
    - POST — create a new resource
    - PUT — update a specific resource (by id)
    - DELETE — remove a specific resource by id

6. Apa fungsi dari Response Codes?

    Responses from the server contain status codes to alert the client to information about the success of the operation. As a developer, you do not need to know every status code (there are many of them), but you should know the most common ones and how they are used.
