const bahasaIndonesia = 90
const bahasaInggris = 89
const mtk = 80
const ipa = 69


//Jika nilai bertipe data number dengan range 0-100

if ( (typeof bahasaIndonesia == 'number') && (typeof bahasaInggris == 'number') && 
(typeof mtk == 'number') && (typeof ipa == 'number') &&
(bahasaIndonesia>=0) && (bahasaInggris>=0) && (mtk>=0) && (ipa>=0) && 
(bahasaIndonesia<=100) && (bahasaInggris<=100) && (mtk<=100) && (ipa<=100)) {

    const rata2 = (bahasaIndonesia + bahasaInggris + mtk + ipa)/4
    if (rata2>=90 && rata2<=100) {
        console.log(`
        Rata-rata = ${rata2}
        Grade = A`)
    }

    else if (rata2>=80 && rata2<=89) {
        console.log(`
        Rata-rata = ${rata2}
        Grade = B`)
    }

    else if (rata2>=70 && rata2<=79) {
        console.log(`
        Rata-rata = ${rata2}
        Grade = C`)
    }

    else if (rata2>=60 && rata2<=69) {
        console.log(`
        Rata-rata = ${rata2}
        Grade = D`)
    }

    else if (rata2<=59) {
        console.log(`
        Rata-rata = ${rata2}
        Grade = E`)
    }
   
}

//Jika nilai tidak bertipe data number dengan range 0-100
else {
  console.log("ADA NILAI MATA PELAJARAN YANG SALAH")   
}
