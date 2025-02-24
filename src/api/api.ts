import axios from "axios";
import useSWR from "swr";

const fetcher = <T>(url: string): Promise<T> =>
  axios.get<T>(url).then((res) => res.data);

export const useFetchData = <T>(endpoint: string, currentLang: string) => {
  const { data, error } = useSWR<T>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLang}/${endpoint}`,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const postData = async (
  endpoint: string,
  currentLang: string,
  data: Record<string, string>
) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLang}/${endpoint}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const postContact = (
  data: Record<string, string>,
  currentLang: string
) => postData("api/contact/", currentLang, data);
