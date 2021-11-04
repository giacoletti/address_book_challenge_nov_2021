const storage = window.localStorage;

const renderContacts = () => {
    const contacts = JSON.parse(storage.getItem('entries'));

    let div = document.getElementById('contact-list');

    if (contacts) {
        div.innerHTML = '';
        const ul = document.createElement('ul');

        contacts.forEach(contact => {
            let li = document.createElement('li');

            li.innerHTML = `
                <span>${contact.name}</span> |
                <span>${contact.email}</span> |
                <span>${contact.phone}</span> |
                <span>${contact.company}</span> 
            `;

            ul.appendChild(li);   //adding single contact

        });

        div.appendChild(ul);  //adding whole contact list to the div element

    } else {
        div.innerHTML = '<p>You have no contacts in your address book</p>';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderContacts();
    const contactForm = document.getElementById('new-contact-form');
    const toggleFormVisibilityButton = document.getElementById('add-contact');

    contactForm.style.display = 'none';

    toggleFormVisibilityButton.addEventListener('click', () => {
        if (contactForm.style.display === '') {
            contactForm.style.display = 'none';
        } else {
            contactForm.style.display = '';
        }
    });

    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        //retrieve all the values from the input fields on the New Contact form on index page
        const { name, email, phone, company, notes, twitter } = contactForm.elements;

        const contact = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            notes: notes.value,
            twitter: twitter.value
        };

        console.log(contact);

        let contacts = JSON.parse(storage.getItem('entries')) || [];

        contacts.push(contact);

        //save contacts in localStorage
        storage.setItem('entries', JSON.stringify(contacts));

        renderContacts();
        contactForm.reset();
    });

});