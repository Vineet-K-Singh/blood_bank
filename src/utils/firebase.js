import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
    apiKey: "AIzaSyAGvhfg0YULiUdZkqoYXW0WvRDoaga1FsI",
    authDomain: "blood-bank-8b278.firebaseapp.com",
    databaseURL: "https://blood-bank-8b278-default-rtdb.firebaseio.com",
    projectId: "blood-bank-8b278",
    storageBucket: "blood-bank-8b278.appspot.com",
    messagingSenderId: "535292729275",
    appId: "1:535292729275:web:c357991684a57f2743169e"
  };

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	addUserDetail(data) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`Donor_detail/${this.auth.currentUser.uid}`).set(data)
	}

	addRequestorDetail(data) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`Requestor_detail/${this.auth.currentUser.uid}`).set(data)
	}

	addSearcherDetail(data) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`Searcher_detail/${this.auth.currentUser.uid}`).set(data)
	}

	addPlaceDetail(data) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`Place_detail/${this.auth.currentUser.uid}`).set(data)
	}

	addHostDetail(data) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`Host_detail/${this.auth.currentUser.uid}`).set(data)
	}

	addVolunteerDetail(data) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`Volunteer_detail/${this.auth.currentUser.uid}`).set(data)
	}

	async getUserDetail() {
		const data = await this.db.doc(`Donor_detail`).get()
		return data.get(this.auth.currentUser.uid)
	}

	async getRequestorDetail() {
		const requestor_data = await this.db.doc(`Requestor_detail`).get()
		return requestor_data.get(this.auth.currentUser.uid)
	}

	async getSearcherDetail() {
		const searcher_data = await this.db.doc(`Searcher_detail`).get()
		return searcher_data.get(this.auth.currentUser.uid)
	}

	async getPlaceDetail() {
		const place_data = await this.db.doc(`Place_detail`).get()
		return place_data.get(this.auth.currentUser.uid)
	}

	async getHostDetail() {
		const host_data = await this.db.doc(`Host_detail`).get()
		return host_data.get(this.auth.currentUser.uid)
	}

	async getVolunteerDetail() {
		const volunteer_data = await this.db.doc(`Volunteer_detail`).get()
		return volunteer_data.get(this.auth.currentUser.uid)
	}




	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	async getCurrentUserQuote() {
		const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return quote.get('quote')
	}
}

export default new Firebase()
