const addressBook = new AddressBook();
const addressList = document.querySelector("[name=address_list] ul");

const displayEntries = () => {
    addressList.innerHTML = "";
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

const handleForm = (form) => {
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const twitter = form.elements.twitter.value;
    addressBook.create({ name: name, phone: phone, twitter: twitter });
    form.reset();
    displayEntries();
    return false;
};

displayEntries();
