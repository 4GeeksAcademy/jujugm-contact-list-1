import { redirect } from "react-router";
import { AddContact } from "../views/addcontact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getContact: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/julia/contacts")
					if (!response.ok) {
						getActions().createJulia()
					}
					const data = await response.json()
					console.log(response)
					console.log(data);
					setStore({ contacts: data.contacts })


				} catch (error) {

				}
			},

			deleteContact: async (id) => {
				const requestOptions = {
				  method: "DELETE",
				  redirect: "follow"
				};
			  
				try {
				  const response = await fetch(`https://playground.4geeks.com/contact/agendas/julia/contacts/${id}`, requestOptions);
				  const result = await response.text();
				  console.log(result);


    // Actualizar el estado de los contactos después de eliminar uno
					const store = getStore();
					const updatedContacts = store.contacts.filter(contact => contact.id !== id);
					setStore({ contacts: updatedContacts });
				  
				} catch (error) {
				  console.error(error);
				}
			  },

			createJulia: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/julia", { method: "POST" })
					console.log(response)
					const data = await response.json()
					console.log(data)
				} catch (error) {

				}
			},

			addContact: async (contact, navigate) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/julia/contacts",
						{
							method: "POST",
							body: JSON.stringify(contact),
							headers: {
								"Content-Type": "application/json"
							}
						})
						const data = await response.json()

						if (data) {
							getActions().getContact();
							navigate("/")

						}
				} catch (error) {

				}
			},

			editContact: async (id, contact, navigate) => {
				try {
				  const response = await fetch(`https://playground.4geeks.com/contact/agendas/julia/contacts/${id}`, {
					method: "PUT",
					body: JSON.stringify(contact),
					headers: { "Content-Type": "application/json" }
				  });
		
				  if (!response.ok) {
					throw new Error("Error al actualizar el contacto");
				  }
		
				  const data = await response.json();
				  console.log("Contacto actualizado:", data);
		
				  // Actualizar la lista de contactos en el estado global
				  const store = getStore();
				  const updatedContacts = store.contacts.map(c => 
					c.id === id ? { ...c, ...contact } : c
				  );
				  setStore({ contacts: updatedContacts });
		
				  // Redirigir al usuario después de actualizar
				  if (data) {
					getActions().getContact();
					navigate("/")

				}
				} catch (error) {
				  console.error("Error en editContact:", error);
				}
			  }
			}
		  };

		 
			
			


		  }
		
	


export default getState;
