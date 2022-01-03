1. Jelaskan apa yang dimaksud dengan container pada docker !

        Container pada docker merupakan Wadah untuk mengemas dan menjalankan aplikasi. Wadah ini mencakup kode, runtime, system tools, dan pengaturan. Container hanya bisa mengakses resource yang telah ditentukan dalam Docker image.

2. Jelaskan apa perbedaan antara konsep container dengan virtual machine !

        - VM memakan banyak resource dan waktu utk booting karena melakukan virtualisasi pada host hardware-nya. 

        - Sedangkan container kebalikannya dari vm, container melakukan virtualisasi pada host OS-nya

3. Apa yang dimaksud dengan docker file ?

        Docker file merupakan Blueprint untuk membuat image

4. Apa yang dimaksud dengan docker registery ?

        Docker registery merupakan Tempat untuk upload/download image

5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !

Untuk menjalankan lebih dari 1 container kita dapat menggunakan docker compose. Docker compose merupakan alat untuk mendefinisikan dan menjalankan satu atau beberapa container yang saling terkait dengan sebuah command.

```Cara Kerja```
Buat file ```[namafile].yaml``` di dalam project yang telah dibuat. Tulis beberapa perintah dan jalankan menggunakan perintah ```docker-compose [namaFile].yaml up```