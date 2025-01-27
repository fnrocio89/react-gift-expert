
export const getGift = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jdBOJXO5228DknHiYOQrLiZIpbQnJ4VO&q=${category}&limit=6`;


    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map((data) => (
        {
            id: data.id,
            title: data.title,
            url: data.images.downsized_medium.url,
        }
    ))


    return gifts;

};