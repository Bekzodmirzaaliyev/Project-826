import React, { useState } from 'react'
import { AiOutlineUserDelete } from "react-icons/ai";
import { FaPencil } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";


const Users = [
  {
    name: "Alice",
    lastname: "Johnson",
    phoneNumber: "+998911111111",
    image: "contact-images/avatar.jpg"
  },
  {
    name: "Bob",
    lastname: "Smith",
    phoneNumber: "+998922222222",
    image: "contact-images/avatar.jpg"
  },
  {
    name: "Emily",
    lastname: "Brown",
    phoneNumber: "+998933333333",
    image: "contact-images/avatar.jpg"
  },
  {
    name: "Daniel",
    lastname: "Clark",
    phoneNumber: "+998944444444",
    image: "contact-images/avatar.jpg"
  },
  {
    name: "Grace",
    lastname: "Wilson",
    phoneNumber: "+998955555555",
    image: "contact-images/avatar.jpg"
  },
  {
    name: "Michael",
    lastname: "Lee",
    phoneNumber: "+998966666666",
    image: "contact-images/avatar.jpg"
  },
  {
    name: "Sophia",
    lastname: "Martinez",
    phoneNumber: "+998977777777",
    image: "contact-images/avatar.jpg"
  },
  {
    name: "David",
    lastname: "Taylor",
    phoneNumber: "+998988888888",
    image: "contact-images/avatar.jpg"
  },
  {
    name: "Emma",
    lastname: "Lopez",
    phoneNumber: "+998999999999",
    image: "contact-images/avatar.jpg"
  },
  {
    name: "Oliver",
    lastname: "Hernandez",
    phoneNumber: "+998910101010",
    image: "contact-images/avatar.jpg"
  }
];

const Contacts = () => {
  const [users, setUsers] = useState(Users)
  const ContactList = [...users]
  let inputClassList = ["outline-none", "text-black", "bg-white", "border", "border-slate-300", "rounded"]

  const deleteUser = (id) => {
    ContactList.splice(id, 1);
    setUsers(ContactList)
  }

  const addContact = () => {
    const form = document.forms.addContactForm
    let formToObj = {
      name: form.elements.name.value,
      lastname: form.elements.lastname.value,
      phoneNumber: form.elements.phoneNumber.value,
      image: form.elements.image.value
    }

    if (!form.elements.image.value) {
      formToObj['image'] = 'contact-images/avatar.jpg'
    }

    ContactList.unshift(formToObj)
    setUsers(ContactList)
  }

  const editContact = (id) => {
    let editNameInput = document.getElementById(`editNameInput_${id}`);
    let editLastnameInput = document.getElementById(`editLastnameInput_${id}`);
    let editPhoneNumberInput = document.getElementById(`editPhoneNumberInput_${id}`);
    let nameText = document.getElementById(`nameText_${id}`);
    let lastnameText = document.getElementById(`lastnameText_${id}`);
    let phoneNumberText = document.getElementById(`phoneNumberText_${id}`);
    let saveButton = document.getElementById(`save_${id}`);
    let editButton = document.getElementById(`edit_${id}`);

    if (editNameInput.style.display === 'none') {
      // EDIT PROCESS
      editNameInput.style.display = 'block';
      editLastnameInput.style.display = 'block';
      editPhoneNumberInput.style.display = 'block';

      nameText.style.display = 'none';
      lastnameText.style.display = 'none';
      phoneNumberText.style.display = 'none';

      saveButton.style.display = 'block';
      editButton.style.display = 'none';
    } else {
      // SAVE PROCESS
      let contact = ContactList[id]
      contact.name = editNameInput.value
      contact.lastname = editLastnameInput.value
      contact.phoneNumber = editPhoneNumberInput.value
      setUsers(ContactList)

      editNameInput.style.display = 'none';
      editLastnameInput.style.display = 'none';
      editPhoneNumberInput.style.display = 'none';
      
      nameText.style.display = 'block';
      lastnameText.style.display = 'block';
      phoneNumberText.style.display = 'block';

      saveButton.style.display = 'none';
      editButton.style.display = 'block';
    }
  }



  return (
    <div className='flex justify-between h-screen overflow-hidden'>
      <div className='w-[50%] overflow-y-auto h-full'>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Fullname</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, id) => (
                <tr key={id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <input type="text" id={`editNameInput_${id}`} className={inputClassList.join(' ')} defaultValue={item.name} hidden required />
                      <p className="font-bold" id={`nameText_${id}`}>{item.name}</p>
                    </div>
                    <div>
                      <input type="text" id={`editLastnameInput_${id}`} className={inputClassList.join(' ')} defaultValue={item.lastname} hidden required />
                      <p id={`lastnameText_${id}`}>{item.lastname}</p>
                    </div>
                  </td>
                  <td>
                    <input type="text" id={`editPhoneNumberInput_${id}`} className={inputClassList.join(' ')} defaultValue={item.phoneNumber} hidden required />
                    <p id={`phoneNumberText_${id}`}>{item.phoneNumber}</p>
                  </td>
                  <td>
                    <div className='flex gap-4 justify-center items-center'>
                      <div>
                        <FaPencil className='w-8 h-8 cursor-pointer' id={`edit_${id}`} onClick={() => editContact(id)} />
                        <IoIosCheckmarkCircle className='w-8 h-8 cursor-pointer' id={`save_${id}`} onClick={() => editContact(id)} hidden />
                      </div>
                      <AiOutlineUserDelete className='text-red-500 w-8 h-8 cursor-pointer' onClick={() => deleteUser(id)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Avatar</th>
                <th>Fullname</th>
                <th>Phone Number</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className='w-[50%] h-full flex justify-center items-center'>
        <form className='border pt-3 px-5 pb-5 rounded bg-white text-black' name='addContactForm'>
          <h2 className='text-center text-[30px]'>Add Contact</h2>
          <div className='flex gap-4'>
            <div className='flex flex-col'>
              <label htmlFor="name">Name</label>
              <input name='name' type="text" id="name" className={inputClassList.join(' ')} required />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="lastname">Lastname</label>
              <input name='lastname' type="text" id="lastname" className={inputClassList.join(' ')} />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input name='phoneNumber' type="tel" id="phoneNumber" className={inputClassList.join(' ')} required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="image">Image</label>
            <input name='image' type="file" id="image" className={inputClassList.join(' ')} />
          </div>
          <button type="button" className='border-2 border-black rounded mt-3 p-1 px-3 text-black transition-all 
            hover:bg-black hover:text-white hover:transition-all' onClick={() => addContact()}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contacts