import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../Services/service';

export const useEmailFormik = ({onError, onResponse}) => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email('Format tidak sesuai!')
            .required('Tidak boleh kosong!'),
        }),
        onSubmit: async (values, {resetForm}) => {
            try {

                console.log(values)
                const response = await API.sendEmail(values)
                console.log(response)

                if(response.data.status === 200) {  
                    onResponse(response.data.status)
                    resetForm()
                }else {
                    onError(response.data.message)
                }
            } catch (error) {
                onError(error.message)
            }
        }
    })

    return formik
}