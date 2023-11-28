import { api } from "@/lib/axios"
import { useState } from "react"
import { ITestimony } from "../interfaces/IUseTestimonyService"

export const useTestimonyService = () => {
    const [ testimonies, setTestimonies ] = useState<ITestimony[]>()
    const [ testimoniesErrors, setTestimoniesErrors ] = useState<string>()

    const handleGetTestimonies = async () => {
        try {
        const response = await api.get("/testimony")

        if (response.status === 200) {
            setTestimonies(response.data)
        }
        } catch (error: any){
            setTestimoniesErrors(error.response.message)
        }

    }

    return {
        testimonies, setTestimonies, handleGetTestimonies, testimoniesErrors
    }
}