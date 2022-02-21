import 'antd/dist/antd.min.css';
import "./upload.scss";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Divider, Input, InputNumber, Button, Upload } from "antd";
import axios from "axios";
import { API_URL } from "../config/constants";
function UploadPage(){
    const [imageUrl,setImageUrl] = useState(null);
    const navigate = useNavigate();
    const onSubmit = (values) => {
        axios.post(`${API_URL}/products`,{
            name:values.name,
            description: values.description,
            seller:values.seller,
            price:parseInt(values.price),
            imageUrl: `${API_URL}/`+imageUrl
        }).then((result)=>{
            navigate(-1);
        })
        .catch((error)=>{
            console.error(error);
        })
    }
}