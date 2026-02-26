"use server"

import axios from "axios"
import { redirect } from "next/navigation"
import { UserType } from "../_types/user";
import { setSession, deleteSession } from "../_lib/session";

const API_URL = 'http://localhost:3001'

export const loginAction = async (formData: FormData) => {
    console.log("Form Data:", formData)
    try {
        const response = await axios.get(`${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`
        );
        const user: UserType = response.data[0];
        if(!user) throw new Error('Invalid credentials');
        //set user in cookie
        await setSession({name: user.name, email: user.email, id: user.id});
    } catch (error) {
      throw new Error('Failed to login')
    }
    redirect('/contact');
};

export const logoutAction = async () => {
    await deleteSession();
    redirect('/login')
}