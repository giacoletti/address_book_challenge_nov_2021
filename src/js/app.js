const addressBook = new AddressBook();
const addressList = document.querySelector("[name=address_list] ul");
const messageElement = document.getElementById("response_message");

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
    if (form.elements.name.value.trim() === "") {
        messageElement.innerText = "Please enter a name!";
    } else {
        const name = form.elements.name.value;
        const phone = form.elements.phone.value;
        const twitter = form.elements.twitter.value;
        addressBook.create({ name: name, phone: phone, twitter: twitter });
        form.reset();
        displayEntries();
        messageElement.innerText = "Contact saved!";
    }
    return false;   //it prevents the page from reloading
};

displayEntries();
