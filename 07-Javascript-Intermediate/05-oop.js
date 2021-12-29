// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
    // pada saat kode di run outputn yang muncul adalah 
    // - fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
    // - fun2 {}
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
    // Hasil dari fun1 dan fun2 berbeda
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
    // Pada kasus ini fun1 ditulis menggunakan function sedangkan fun2 ditulis dengan arrow function, haisl yang berbeda
    //disebabkan oleh pada fun2 this tidak menunjuk kepada apapun.
// const obj = {
//     fun1: function() {
//       console.log("fun1", this);
//     },
//     fun2: () => {
//       console.log("fun2", this);
//     }
//   };
  
//   obj.fun1();
//   obj.fun2();

// //soal2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// Encapsulation adalah  gaya pemrograman di mana detail implementasi disembunyikan. Ini sangat mengurangi 
// kompleksitas pengembangan perangkat lunak. Dengan Enkapsulasi, hanya metode yang diekspos. Pemrogram
// tidak perlu khawatir tentang detail implementasi tetapi hanya peduli dengan operasi. Misalnya, jika 
// pengembang ingin menggunakan pustaka tautan dinamis untuk menampilkan tanggal dan waktu, dia tidak perlu khawatir tentang kode di kelas tanggal dan waktu, melainkan cukup menggunakan kelas data dan waktu dengan menggunakan variabel publik untuk memanggil itu. 
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// Abstraksi adalah adalah metodologi pemrograman di mana rincian kode pemrograman disembunyikan dari pengguna, dan hanya 
// hal-hal penting yang ditampilkan kepada pengguna. Abstraksi berkaitan dengan ide-ide daripada peristiwa.
// Ini seperti pengguna menjalankan program (Web Browser) tanpa melihat kode latar belakang.
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// Inheritance berkaitan dengan hubungan antara kelas dan metode, yang seperti orang tua dan anak. 
// Seorang anak dapat dilahirkan dengan beberapa atribut orang tua. Warisan memastikan penggunaan kembali 
// kode seperti halnya banyak anak dapat mewarisi atribut orang tua mereka. Pada inheritance suatu kode 
// yang telah ditulis pada kelas parent class dapat digunakan berulang kali pada kelas-kelas turunannya 
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
// Polymorpishm memungkinkan untuk membuat hierarki kelas, di mana kelas dasar memberikan perilaku dan 
// atributnya ke kelas turunan. Anda kemudian bebas untuk memodifikasi atau memperluas fungsinya. 
//  memastikan bahwa metode yang tepat akan dieksekusi berdasarkan tipe objek pemanggil. 
//sumber : https://www.nerd.vision/post/polymorphism-encapsulation-data-abstraction-and-inheritance-in-object-oriented-programming

//soal3
// class Phone {
//     constructor(brand, storage, ram) {
//         this.brand = brand;
//         this.storage = storage;
//         this.ram = ram;
//       }
    
//     getBrandName() {
//         return this.brand
//     }
    
//     setBrandName(newBrand) {
//         return this.brand = newBrand;
//     }
    
//     printSpecification() {
//         console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
//     }
    
//     setSpecification(newStorage, newRam) {
//         this.storage = newStorage;
//         this.ram = newRam;
//     }
// }

// const phone = new Phone("Skilvul Mobile co", 64, 4);

// console.log(phone.getBrandName());
// phone.setBrandName("SM.co")
// console.log(phone.getBrandName());

// phone.printSpecification();
// phone.setSpecification(32, 2);
// phone.printSpecification();

 //soal4
 class Student {
    constructor(name, gender) {
       this.name = name;
       this.gender = gender;
       this.courseOfferings = [];
    }
 
    getIndexFromCourse(course) {
       const indexOfCourse = this.courseOfferings.findIndex((courseOffering) => {
          return courseOffering.course.getSubject() === course.getSubject();
       });
       return indexOfCourse;
    }
    
    takeNewCourse(course) {
       // check if course already in array
       const isCourseExist = this.courseOfferings.find((courseOffering) => {
          return courseOffering.course.getSubject() === course.getSubject();
       });
 
       // push the course into array if the course not exist yet
       if (this.courseOfferings.length === 0 || !isCourseExist) {
             this.courseOfferings.push(new CourseOffering(course));
             course.decreaseQuota();
       }
    }
    
    courseAttendance(course) {
       const indexOfCourse = this.getIndexFromCourse(course);
 
       if (indexOfCourse >= 0) {
          this.courseOfferings[indexOfCourse].attendance++;
       }
    }
 
    takeATest(course) {
       const indexOfCourse = this.getIndexFromCourse(course);
       if (indexOfCourse >= 0) {
          if (this.courseOfferings[indexOfCourse].attendance >= course.getAttendance()) {
             this.courseOfferings[indexOfCourse].grade = Math.floor(Math.random() * 100);
          } 
          
          else {
             console.log("please fill your absent");
          }
       }
    }
 }
 
 class CourseOffering {
    constructor(course) {
       this.course = course;
       this.attendance = 0;
       this.grade = 0;
    }
 }
 
 class Course {
    constructor(subject, quota, attendance) {
       this.subject = subject;
       this.quota = quota;
       this.attendance = attendance;
    }
 
    getSubject() {
       return this.subject;
    }
 
    getAttendance() {
       return this.attendance;
    }
 
    decreaseQuota() {
       this.quota--;
    }
 }
    
 const biology = new Course("biology", 10, 3);
 const physics = new Course("physics", 10, 2);
 
 const johnWatson = new Student("john watson", "male");
 
 johnWatson.takeNewCourse(biology);
 johnWatson.takeNewCourse(physics);
 
 johnWatson.courseAttendance(physics);
 johnWatson.courseAttendance(physics);
 johnWatson.courseAttendance(biology);
 johnWatson.courseAttendance(physics);
 
 console.log(biology.quota);
 console.log(physics.quota);
 
 johnWatson.takeATest(biology);
 johnWatson.takeATest(physics);
 
 console.log(johnWatson.courseOfferings);