
import { GiftItem } from './GiftItem';
import { useFetchGifs } from '../hoocks/useFetchGifs';

export const GiftGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);



    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const result = await getGift(category);
    //     setImages(result);
    // }

    // useEffect(() => {

    //     getImages();

    // }, []);


    return (
        <>
            <h3>{category}</h3>
            {isLoading && (<h3>Loading...</h3>)}

            <div className="card-grid">
                {
                    images.map(image => (
                        <GiftItem
                            key={image.id}
                            {...image}

                        />
                    ))
                }


            </div>

        </>
    );
}
