# Hotel-Api

 * Server runs on 'localhost/3000'
 
 - Create Route 'localhost/3000/hotel/add'
	ex-
		{
		"hotel_name": "Hotel-Leela",
		"hotel_location": "Delhi",
		"room_number": 239,
		"room_type": "Single",
		"guest_names": "rohit",
		"guest_ids": "Adhaar-card"
		}
		
 - Read Route 'localhost/3000/hotel'
 
 - Update Route 'localhost/3000/hotel/id'
		ex = "you can pass any Document id in paramenter to Update"
		(for example here we updated the checkout field for the particular guest)
			{
				"hotel_name": "Hotel-Leela",
				"hotel_location": "Delhi",
				"room_number": 230,
				"room_type": "Single",
				"guest_names": "rohit",
				"guest_ids": "Adhaar-card",
				"checkout": "22/03/2020"
			}
		
		
 - Delete Route 'localhost/3000/hotel/id'		
		ex = "you can pass any Document id in paramenter to Delete"