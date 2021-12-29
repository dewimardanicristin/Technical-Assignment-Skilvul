// 1. Apa itu synchronous?
//Dalam operasi sinkron tugas dilakukan satu per satu dan hanya ketika satu selesai, berikut ini tidak 
//diblokir. Dengan kata lain, kita harus menunggu tugas selesai untuk pindah ke tugas berikutnya. 
// 2. Apa itu asynchronous?
//Dalam operasi asinkron , di sisi lain, kita dapat pindah ke tugas lain sebelum yang sebelumnya selesai. 
//Dengan cara ini, dengan pemrograman asinkron Anda dapat menangani beberapa permintaan secara bersamaan ,
//sehingga menyelesaikan lebih banyak tugas dalam periode waktu yang jauh lebih singkat.  
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
//ya, dapat
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// first log : 1
//     first log : 3
//     first log : 2
//     first log : 4
//     first log : 5
//     second log : 6
//     second log : 6
//     second log : 6
//     second log : 6
//     second log : 6
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
//Hal ini dikarenakan variable i di deklarasi dengan var yang menjadikannya variabel global dan telah di ubah oleh proses first log.
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
// for (var i = 1; i<=5; i++) {
//     console.log("first log: ", i); // 01 - Pertama
//     setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
//   }

//jawaban 6
for (let i = 1; i <= 5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}