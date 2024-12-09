import { Box, Container } from '@mui/material';
import Input from '@mui/material/Input';
import { useState } from 'react';
import { IMAGE_HOLDER } from '~/assets';

const ImagePreview = ({ scr = '', pathToStore, className = '', height = 'auto', width = '100%', onChange, ...props }) => {
    const [source, setSource] = useState(scr);
    const PATH_TO_STORE = 'src/assets/products/';

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSource(reader.result);
            };
            reader.readAsDataURL(file);
            console.log('onChange: ', onChange);
            onChange(e, pathToStore);
        }
    };

    return (
        <Container className={className}>
            <Box className="mb-3 rounded-md p-[2px] shadow-[0_0_12px_#999999]" height={height} width={width}>
                <img
                    src={source || scr || IMAGE_HOLDER}
                    alt="Preview"
                    height={height}
                    width={width}
                    className="rounded-md"
                />
            </Box>

            <input type="file" onChange={handleChange} accept="image/*" {...props} />
        </Container>
    );
};

export default ImagePreview;
