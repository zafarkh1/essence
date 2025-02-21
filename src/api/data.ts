import axios from "axios";

export const getHome = async (currentLang: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLang}/api/hompage/`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getWho = async (currentLang: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLang}/api/about/`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getWhat = async (currentLang: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLang}/api/creative/`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getClients = async (currentLang: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLang}/api/partners/`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getWork = async (currentLang: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLang}/api/work/`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPeople = async (currentLang: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLang}/api/people/`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// export const postContact = async (data: any, currentLang: string) => {
//   try {
//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLang}/api/contact/`,
//       data
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };
