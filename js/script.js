


const form = document.querySelector('.form');
const input = document.querySelector('.form__input');

const localStorageTransactions = JSON.parse(localStorage
    .getItem('transactions'));
let transactions = localStorage
    .getItem('transactions') !== null ? localStorageTransactions : [];

const removeTransaction = ID => {
    transactions = transactions.filter(transaction => 
        transaction.id !== ID);
    updateLocalStorage();   
    init()
    }

const updateLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}


///function insertExpenses() {
///    var jsonObject = {
 //       "id": $("#inputTable").find("#id").val(),
   //     "value": $("#inputTable").find("#value").val(),
      //  "description": $("#inputTable").find("#description").val(),
     //   "date": $("#inputTable").find("#date").val(),
        //"category": $("#inputTable").find("#category").val()
    //};

    //console.log("myJson", jsonObject);
    //}