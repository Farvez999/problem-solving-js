function paperRequirements(book1Quantity, book2Quantity, book3Quantity) {
    let book1Page = 100;
    let book2Page = 200;
    let book3Page = 300;

    let total1BookPage = book1Page * book1Quantity;
    let total2BookPage = book2Page * book2Quantity;
    let total3BookPage = book3Page * book3Quantity;

    const totalPage = total1BookPage + total2BookPage + total3BookPage;
    return totalPage;
}

const book1Quantity = 3;
const book2Quantity = 2;
const book3Quantity = 5;
const totalBookPage = paperRequirements(book1Quantity, book2Quantity, book3Quantity);
console.log('Total Book page :', totalBookPage);