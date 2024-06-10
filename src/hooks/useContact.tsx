import axios from "axios";
import { useState, useEffect } from "react";
import { Contact } from "../types";

export const useContact = () => {
  const [contact, setContact] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6172cfe5110a740017222e2b.mockapi.io/elements');
        setContact(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    contact,
    setContact,
    loading
  }
}