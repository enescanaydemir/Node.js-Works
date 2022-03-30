import fs from 'fs'

//Dosya Oluşturma & Dosya Yazma
fs.appendFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000} ', (err) => {
    if (err)
        throw err;

    console.log('Dosyaya Ekleme Yapıldı');
});



//Dosya İçerisindeki Veriyi Okuma
fs.readFile('employees.json', { encoding: "utf-8" }, (err, data) => {
    if (err)
        throw err;
    console.log(data);
    console.log("Data Okundu")
})



//Okunan Veriyi Güncelleme
fs.appendFile('employees.json', '{"name:": "Employee 2 Name", "salary": 3000}\n', (err) => {
    if (err)
        throw err;

    console.log('Dosya Güncellendi!');
});



//Oluşturulan Dosyayı Silme
fs.unlink('employees.json', (err) => {
    if (err)
        throw err;
    console.log('Dosya Başarıyla Silindi!')
})