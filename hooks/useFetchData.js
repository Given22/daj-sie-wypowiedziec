import { useState, useEffect, useRef } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db, storage } from "../firebaseLogin"

export default function useFetchData() {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [labels, setLabels] = useState(null)

	useEffect(() => {
		async function fetchData() {
			try {
				const docRef = doc(db, "labels", "0")
				const docSnap = await getDoc(docRef)
				if (docSnap.exists()) {
					setLabels(docSnap.data())
				}
			} catch (err) {
				setError("Couldn't fetch data")
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	return { labels, loading, error }
}

async function getDataFromStorage(storage, name) {
	  if(!name) return
	  let img = getDownloadURL(ref(storage, `images/${name}`))
	    .then((url) => {
	      return url;
	    })
	    .catch((e) => console.error(e));
	  return img;
	}

// import React, {useState} from 'react';
// import { collection, getDocs } from 'firebase/firestore/lite';
// import { ref,  getDownloadURL } from "firebase/storage";
// import { storage, db } from '../firebase';

// export const DataContext = React.createContext(false);

// export const DataProvider = ({ children }) => {
//   const [projects, setProjects] = useState([]);
//   const [skills, setSkills] = useState("");
//   const [links, setLinks] = useState(null);

//   React.useEffect(() => {
//     getDataFromFirestore(db, 'projects').then( (data) => {
//       data.forEach(async (item) => {
//         const img = await getDataFromStorage(storage, item.image)
//         const newItem = { ...item, image: img }
        
//         setProjects(prev => [...prev.filter(i => i.title !== newItem.title), newItem]);
//       })
//     }).catch((e) => console.error(e));
//     getDataFromFirestore(db, 'skills').then(data => setSkills(data)).catch((e) => console.error(e));
//     getDataFromFirestore(db, 'links').then(data => setLinks(data)).catch((e) => console.error(e));
    
//   }, []);  
  
//   return (
//     <DataContext.Provider value={{ projects, skills, links }}>
//       {children}
//     </DataContext.Provider>
//   )
// }

// async function getDataFromFirestore(db, name) {
//   const Col = collection(db, name);
//   const Snapshot = await getDocs(Col);
//   const List = Snapshot.docs.map(doc => doc.data());
//   return List;
// }

// 
