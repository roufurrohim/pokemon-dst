import axios from "../helpers/axiosConfig"
import { API_URL } from "../helpers/env"
import { authHeader } from "../helpers/authHeader"

export const getDataList = async () => {
    try {
        const reqOptions = {headers: authHeader()}
        const product = await axios.get(
            `${API_URL}/api/v1/pokemons?limit=10&page=1&keyword=`, 
            reqOptions
        )
        return product.data
    } catch (err) {
        return err.message
    }
    
}
