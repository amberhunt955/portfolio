export const getDogPhoto = async () => {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
    }
    }