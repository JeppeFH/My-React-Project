import { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");
  console.log(quote);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      console.log(data);
      setQuote(data.quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <h2>Tilfældigt citat:</h2>
      <p>{quote}</p>
      <button onClick={fetchQuote}>Hent nyt citat</button>
    </>
  );
};

export default Quote;
