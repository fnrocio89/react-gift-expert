import { useEffect, useState } from 'react';
import { getGift } from '../helpers/getGift';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const result = await getGift(category);
        setImages(result);
        setIsLoading(false);
    }

    useEffect(() => {

        getImages();

    }, []);

    return (
        {
            images,
            isLoading
        }

    )
}
