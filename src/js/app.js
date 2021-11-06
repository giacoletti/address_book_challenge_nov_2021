const addressBook = new AddressBook();
const addressList = document.querySelector("[name=address_list] ul");

const displayEntries = () => {
    const entries = addressBook.index();
    let html;
    entries.forEach((entry) => {
        html = `Name: ${entry.name} `; 
        html += `Phone: ${entry.phone} `; 
        html += `Twitter: ${entry.twitter}`;
        let newListItem = document.createElement("li");
        newListItem.innerHTML = html;
        addressList.appendChild(newListItem);
    });
};

displayEntries();
