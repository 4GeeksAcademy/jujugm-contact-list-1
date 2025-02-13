import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "./card"; 

export const Home = () => {
	 const {store, actions} = useContext (Context)
	 if (!store.contacts || store.contacts.length === 0) {
		return <div className="text-center mt-5 mb-4"><p>No hay contactos disponibles</p></div>;
	}
		return(
			<div className="text-center mt-5 mb-4 ">
			<h1>Contacts</h1>
	 		{
				store.contacts.map (contact => {
					return (
						
						<div key={contact.id}>
							<Card
							  id={contact.id} // Pass the id prop
							name = {contact.name}
							email = {contact.email}
							phone = {contact.phone}
							address = {contact.address}
							/>
							</div>

					)
				})
			}

	</div>
);
}
