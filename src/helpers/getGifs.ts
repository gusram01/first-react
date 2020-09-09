import { RespDataGiphy } from "../types/auxTypes";


export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=onfRWEU5er6mySKyfOqm8WXUfk70MTI2`;
  const { data } = await (await fetch(url)).json();
  const gifs = data.map((img: RespDataGiphy) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  })
  ) as Array<Partial<RespDataGiphy>>;

  return gifs;
}