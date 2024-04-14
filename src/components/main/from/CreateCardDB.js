
import axios from 'axios';

const { VITE_BASE_URL } = import.meta.env;





const CreateCard = async (values, token) => {

    if (localStorage.getItem('phone') && localStorage.getItem('id') && localStorage.getItem('logged')) {

        try {
            const response = await axios({
                method: 'POST',
                url: `${VITE_BASE_URL}controller-createcard.php`,
                data: { formvalues: values, phone: localStorage.getItem('phone'), user: localStorage.getItem('id'), token:token },
            });


            console.log('Response:', response); // Log the entire response object
            console.log('Response Data:', response.data); // Log the response data
            
            const {status} = response.data;
            return status;
            
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
        
    }

}
export default CreateCard;