import axios from 'axios'
const { VITE_BASE_URL } = import.meta.env

const ReadCardDB = async (phonenumber) => {


    // console.log(phonenumber);

    try {
        const response = await axios({
            method: 'POST',
            url: `${VITE_BASE_URL}controller-readcard.php`,
            data: {search:phonenumber},
        });

        const { status,data, image_url} = response.data;
        // console.log( data, image_url );
        if(status === true){
            const dataArray = [JSON.parse(data), image_url];

            return dataArray;
        }
        else{
            return false;
        }

    }
    catch (error) {
        console.error(error);
    }





}
export default ReadCardDB;