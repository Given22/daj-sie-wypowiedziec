import { useState, useEffect, useRef } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebaseLogin"

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
