1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?
    Javascript merupakan bahasa pemrograman yang digunakan untuk memanipulasi html DOM dan sedangkan Node.js merupakan sebuah runtime environment dari javascript yang bersifat open source dan cross platform. Runtime ini menjalankan code javascirpt di luar dari browser dan menggunakan v8 engine dan biasanya digunakan untuk server side script atau backend.


2. Mohon jelaskan arsitektur dari Node.js?
    - Single Thread
        Thread dalam ilmu komputer adalah eksekusi menjalankan beberapa tugas atau program secara bersamaan. Setiap unit yang mampu mengeksekusi kode disebut thread.Javascript menggunakan konsep single thread, yang berarti hanya memiliki satu tumpukan panggilan yang digunakan untuk menjalankan program.Javascript menggunakan call stack untuk melakukan manajemen single thread. Ketika terdapat perintah baru maka akan ditambahkan (push) dan akan di keluarkan ketika perintahnya sudah selasai (pop)

    - Even Loop
        Dengan menggunakan konsep arsitektur javascript, walaupun menggunakan single thread tetapi kita dapat melihat javascript seperti menggunakan multi thread. Terdapat event queue yang berguna sebagai penampung ketika terdapat perintah baru yang akan dieksekusi.Event loop akan memfasilitasi kondisi ini, event loop akan memeriksa terus menerus, ketika antrian kosong di call stack maka akan menambah antrian baru dari event queue sampai semua perintah selesai di eksekusi.Javascript menggunakan konsep single thread, yang berarti hanya memiliki satu tumpukan panggilan yang digunakan untuk menjalankan program.
    - Server side scripting
        Sejatinya javascript merupakan bahasa pemrograman yang digunakan di front end side. Sehingga kita hanya bisa mengerjakan javascript dengan menggunakan browser untuk menampilkan hasil eksekusinya. Tetapi dengan menggunakan NodeJS kita dapat menjalankan javascript di server side menggunakan terminal command line menggunakan perintah “node”. 


3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
    Built-in Module merupakan module yang sudah tersedia dari node js, External Module merupakan module yang didapat dari suatu komunitas atau organisasi dan siap pakai. Dan custom module adalah module yang kita buat sendiri.

4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?
    - Built-in Module : Buffer ->  modules yang digunakan untuk mengakses, mengelola dan mengubah tipe data raw atau tipe data bytes

    - External Module : csv ->  menyediakan fungsionalitas untuk menghasilkan file CSV secara dinamis, memodifikasinya, mengubah CSV, dll

    - Custom Module
    ## Creating function for adding two values
        exports.Addition = function(val1, val2)
        {
            return (val1 + val2)
        }
