import axios from "axios";
import Cookies from "js-cookie"

const API_HOST = 'https://api.seductionstation.org'

export const handleSignup = async (username: string, password: string, firstName: string, lastName: string, repeatpassword: string) => {
    await axios.post(`${API_HOST}/user/register`, {
        username,
        password,
        firstName,
        lastName,
        repeatpassword,
        department: "HR"
    })
        .then(res => Cookies.set('token', 'Bearer ' + res.data.token))
}

export const handleLogin = async (username: string, password: string) => {
    await axios.post(`${API_HOST}/user/login`, {username, password})
        .then(res => Cookies.set('token', 'Bearer ' + res.data.token))
}

export const handleUpdateTicket = async (ticket) => {
    console.log(`ticket.id ${ticket.id}`)
    await axios.patch(`${API_HOST}/ticket/${ticket.id}`, ticket, {
        headers: {
            Authorization: Cookies.get('token')
        }
    })
}

export async function getUserInfo() {
    return await axios.get(`${API_HOST}/user/info`, {
        headers: {
            Authorization: Cookies.get('token')
        }
    })
}

export const handlePostApplication = async (form) => {
    await axios.post(`${API_HOST}/ticket`, form, {
        headers: {
            Authorization: Cookies.get('token')
        }
    })
}

export async function getApplications() {
    return await axios.get(`${API_HOST}/tickets`, {
        headers: {
            Authorization: Cookies.get('token')
        }
    })
}

export async function getTicketById(id) {
    return await axios.get(`${API_HOST}/ticket/${id}`, {
        headers: {
            Authorization: Cookies.get('token')
        }
    })
}

